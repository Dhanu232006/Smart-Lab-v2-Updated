package com.smartlab.service;

import com.smartlab.dto.IssueRequest;
import com.smartlab.dto.IssueResponse;
import com.smartlab.entity.ActivityLog;
import com.smartlab.entity.Computer;
import com.smartlab.entity.Issue;
import com.smartlab.repository.ActivityLogRepository;
import com.smartlab.repository.ComputerRepository;
import com.smartlab.repository.IssueRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository       issueRepository;
    private final ComputerRepository    computerRepository;
    private final ActivityLogRepository activityLogRepository;

    // ── Student: report a new issue ──────────────────────────────────────
    @Transactional
    public Issue reportIssue(IssueRequest req) {
        Computer computer = computerRepository.findById(req.getComputerId())
            .orElseThrow(() -> new RuntimeException("Computer not found: id=" + req.getComputerId()));

        Issue issue = new Issue();
        issue.setComputer(computer);
        issue.setStudentName(req.getStudentName());
        issue.setRollNumber(req.getRollNumber());
        issue.setIssueType(req.getIssueType());
        issue.setSeverity(req.getSeverity());
        issue.setDescription(req.getDescription());
        issue.setStatus(Issue.Status.OPEN);

        Issue saved = issueRepository.save(issue);

        // Downgrade computer status based on severity
        Computer.Status newPcStatus = switch (req.getSeverity()) {
            case CRITICAL, HIGH -> Computer.Status.FAULTY;
            case MEDIUM, MINOR  -> Computer.Status.MINOR;
        };
        if (computer.getStatus() == Computer.Status.WORKING) {
            computer.setStatus(newPcStatus);
            computerRepository.save(computer);
        }

        // Feature 7 — rich activity log: tag as ISSUE_REPORTED
        String msg = String.format("Issue #%d reported on PC-%02d by %s — %s (%s)",
            saved.getId(), computer.getPcNumber(),
            req.getStudentName(), req.getIssueType(), req.getSeverity());
        activityLogRepository.save(new ActivityLog(
            saved.getId(), computer.getId(), msg, "Student",
            null, Issue.Status.OPEN.name(), "ISSUE_REPORTED"
        ));

        return saved;
    }

    // ── Admin: change issue status ────────────────────────────────────────
    @Transactional
    public Issue updateIssueStatus(Long issueId, Issue.Status newStatus, String notes, String resolvedBy) {
        Issue issue = issueRepository.findById(issueId)
            .orElseThrow(() -> new RuntimeException("Issue not found: id=" + issueId));

        Issue.Status oldStatus = issue.getStatus();
        issue.setStatus(newStatus);

        if (notes      != null) issue.setNotes(notes);
        if (resolvedBy != null) issue.setResolvedBy(resolvedBy);

        // Feature 3 — set resolved timestamp when fixed/closed
        if (newStatus == Issue.Status.FIXED || newStatus == Issue.Status.CLOSED) {
            issue.setResolvedAt(LocalDateTime.now());
            // Re-open the PC if no other open issues remain
            Computer computer = issue.getComputer();
            boolean hasOtherOpenIssues = issueRepository
                .findByComputerIdOrderByReportedAtDesc(computer.getId())
                .stream()
                .anyMatch(i -> !i.getId().equals(issueId)
                    && (i.getStatus() == Issue.Status.OPEN || i.getStatus() == Issue.Status.IN_PROGRESS));
            if (!hasOtherOpenIssues) {
                computer.setStatus(Computer.Status.WORKING);
                computerRepository.save(computer);
            }
        }

        Issue saved = issueRepository.save(issue);

        // Feature 7 — detect REOPEN action for richer log entry
        String actionType = (oldStatus == Issue.Status.FIXED || oldStatus == Issue.Status.CLOSED)
            && newStatus == Issue.Status.OPEN ? "REOPEN" : "STATUS_CHANGE";

        String msg = String.format("Issue #%d on PC-%02d: %s → %s",
            issueId, issue.getComputer().getPcNumber(), oldStatus, newStatus);
        activityLogRepository.save(new ActivityLog(
            issueId, issue.getComputer().getId(), msg,
            resolvedBy != null ? resolvedBy : "Admin",
            oldStatus.name(), newStatus.name(), actionType
        ));

        return saved;
    }

    // ── Admin: update PC status directly ─────────────────────────────────
    @Transactional
    public Computer updateComputerStatus(Long computerId, Computer.Status newStatus, String adminName) {
        Computer computer = computerRepository.findById(computerId)
            .orElseThrow(() -> new RuntimeException("Computer not found: id=" + computerId));

        Computer.Status old = computer.getStatus();
        computer.setStatus(newStatus);
        Computer saved = computerRepository.save(computer);

        String msg = String.format("PC-%02d status changed: %s → %s",
            computer.getPcNumber(), old, newStatus);
        activityLogRepository.save(new ActivityLog(
            null, computerId, msg, adminName,
            old.name(), newStatus.name(), "PC_STATUS_CHANGE"
        ));

        return saved;
    }

    // ── Queries ───────────────────────────────────────────────────────────

    public List<IssueResponse> getAllIssuesByLab(Long labId) {
        return issueRepository.findAllByLabId(labId)
            .stream().map(this::toResponse).toList();
    }

    public List<IssueResponse> getIssuesByStatus(Long labId, Issue.Status status) {
        return issueRepository.findByLabIdAndStatus(labId, status)
            .stream().map(this::toResponse).toList();
    }

    public Issue getIssueById(Long id) {
        return issueRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Issue not found: id=" + id));
    }

    public List<IssueResponse> getIssuesByComputer(Long computerId) {
        return issueRepository.findByComputerIdOrderByReportedAtDesc(computerId)
            .stream().map(this::toResponse).toList();
    }

    // Feature 6 — Student Issue Tracking: fetch by roll number
    public List<IssueResponse> getIssuesByRollNumber(String rollNumber) {
        return issueRepository.findByRollNumberOrderByReportedAtDesc(rollNumber.trim().toUpperCase())
            .stream().map(this::toResponse).toList();
    }

    public List<ActivityLog> getRecentActivity() {
        return activityLogRepository.findTop20ByOrderByPerformedAtDesc();
    }

    // ── Internal: map Issue → IssueResponse (Feature 3 + 5) ─────────────
    /**
     * Converts an Issue entity to IssueResponse, computing:
     *  - resolutionMinutes and resolutionLabel (Feature 3)
     *  - escalated flag (Feature 5)
     */
    public IssueResponse toResponse(Issue issue) {
        IssueResponse res = new IssueResponse();

        res.id          = issue.getId();
        res.computerId  = issue.getComputer().getId();
        res.pcLabel     = "PC-" + String.format("%02d", issue.getComputer().getPcNumber());
        res.studentName = issue.getStudentName();
        res.rollNumber  = issue.getRollNumber();
        res.issueType   = issue.getIssueType();
        res.severity    = issue.getSeverity();
        res.description = issue.getDescription();
        res.status      = issue.getStatus();
        res.reportedAt  = issue.getReportedAt();
        res.resolvedAt  = issue.getResolvedAt();
        res.resolvedBy  = issue.getResolvedBy();
        res.notes       = issue.getNotes();
        res.escalated   = issue.isEscalated();

        // Feature 3 — compute resolution time
        if (issue.getReportedAt() != null && issue.getResolvedAt() != null) {
            long minutes = Duration.between(issue.getReportedAt(), issue.getResolvedAt()).toMinutes();
            res.resolutionMinutes = minutes;
            res.resolutionLabel   = formatDuration(minutes);
        }

        return res;
    }

    /** Formats minutes into a human-readable string, e.g. "1 hr 24 min" */
    private String formatDuration(long totalMinutes) {
        if (totalMinutes < 1)  return "< 1 min";
        if (totalMinutes < 60) return totalMinutes + " min";
        long hours = totalMinutes / 60;
        long mins  = totalMinutes % 60;
        return mins > 0 ? hours + " hr " + mins + " min" : hours + " hr";
    }
}
