package com.smartlab.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.smartlab.dto.IssueRequest;
import com.smartlab.dto.IssueResponse;
import com.smartlab.entity.Issue;
import com.smartlab.service.IssueService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    // ── POST /api/issues ────────────────────────────────────────────────
    // Student submits a new issue report
    @PostMapping
    public ResponseEntity<Issue> reportIssue(@Valid @RequestBody IssueRequest request) {
        Issue created = issueService.reportIssue(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // ── GET /api/issues?labId=1[&status=OPEN] ───────────────────────────
    // Get all issues for a lab (admin view); optional status filter
    @GetMapping
    public ResponseEntity<List<IssueResponse>> getAllIssues(
            @RequestParam Long labId,
            @RequestParam(required = false) Issue.Status status) {

        List<IssueResponse> issues = status != null
            ? issueService.getIssuesByStatus(labId, status)
            : issueService.getAllIssuesByLab(labId);
        return ResponseEntity.ok(issues);
    }

    // ── GET /api/issues/{id} ────────────────────────────────────────────
    @GetMapping("/{id}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long id) {
        return ResponseEntity.ok(issueService.getIssueById(id));
    }

    // ── GET /api/issues/computer/{computerId} ───────────────────────────
    // Feature 2: Issue History Per Computer
    // Returns full issue timeline for a PC, used in the PC history modal
    @GetMapping("/computer/{computerId}")
    public ResponseEntity<List<IssueResponse>> getIssuesByComputer(@PathVariable Long computerId) {
        return ResponseEntity.ok(issueService.getIssuesByComputer(computerId));
    }

    // ── PATCH /api/issues/{id}/status ───────────────────────────────────
    // Admin: OPEN → IN_PROGRESS → FIXED (or CLOSED / REOPEN)
    @PatchMapping("/{id}/status")
    public ResponseEntity<Issue> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {

        Issue.Status newStatus = Issue.Status.valueOf(body.get("status").toUpperCase());
        String notes      = body.get("notes");
        String resolvedBy = body.get("resolvedBy");

        Issue updated = issueService.updateIssueStatus(id, newStatus, notes, resolvedBy);
        return ResponseEntity.ok(updated);
    }

    // ── GET /api/issues/activity ────────────────────────────────────────
    // Feature 7: Improved activity log — last 20 enriched entries
    @GetMapping("/activity")
    public ResponseEntity<?> getRecentActivity() {
        return ResponseEntity.ok(issueService.getRecentActivity());
    }

    // ── GET /api/issues/by-roll?roll=22CS047 ────────────────────────────
    // Feature 6: Student Issue Tracking — search by roll number
    @GetMapping("/by-roll")
    public ResponseEntity<List<IssueResponse>> getByRollNumber(
            @RequestParam("roll") String rollNumber) {
        return ResponseEntity.ok(issueService.getIssuesByRollNumber(rollNumber));
    }
}
