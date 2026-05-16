package com.smartlab.service;

import com.smartlab.entity.ActivityLog;
import com.smartlab.entity.Issue;
import com.smartlab.repository.ActivityLogRepository;
import com.smartlab.repository.IssueRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

/**
 * EscalationService — Feature 5: Smart Auto Escalation
 *
 * Runs every hour and promotes any OPEN issue that is older than 24 hours
 * and not already HIGH or CRITICAL to HIGH priority.
 *
 * This uses Spring's @Scheduled, which requires @EnableScheduling on the
 * main application class (already present via SmartlabBackendApplication).
 *
 * The escalated flag on the Issue entity is set to true so the frontend
 * can display a visible badge on the issue card.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class EscalationService {

    private final IssueRepository       issueRepository;
    private final ActivityLogRepository activityLogRepository;

    /**
     * Runs every hour (3600000 ms).
     * Finds OPEN issues older than 24 h with severity MINOR or MEDIUM
     * and escalates them to HIGH.
     */
    @Scheduled(fixedRate = 3_600_000)
    @Transactional
    public void escalateStaleIssues() {
        LocalDateTime cutoff = LocalDateTime.now().minusHours(24);
        List<Issue> staleIssues = issueRepository.findStaleOpenIssues(cutoff);

        if (staleIssues.isEmpty()) return;

        log.info("[EscalationService] Escalating {} stale issue(s)", staleIssues.size());

        for (Issue issue : staleIssues) {
            Issue.Severity oldSeverity = issue.getSeverity();
            issue.setSeverity(Issue.Severity.HIGH);
            issue.setEscalated(true);
            issueRepository.save(issue);

            String msg = String.format(
                "⚠ Issue #%d on PC-%02d auto-escalated: %s → HIGH (open > 24 h)",
                issue.getId(), issue.getComputer().getPcNumber(), oldSeverity
            );
            activityLogRepository.save(new ActivityLog(
                issue.getId(), issue.getComputer().getId(),
                msg, "System",
                oldSeverity.name(), Issue.Severity.HIGH.name(), "ESCALATED"
            ));

            log.info(msg);
        }
    }
}
