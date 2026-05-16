package com.smartlab.dto;

import lombok.Data;
import java.time.LocalDateTime;
import com.smartlab.entity.Issue;

/**
 * IssueResponse — DTO returned by all issue query endpoints.
 *
 * New fields (Feature 3 — Resolution Time Tracking):
 *   resolutionMinutes  — total minutes from reportedAt to resolvedAt (null if not yet resolved)
 *   resolutionLabel    — human-friendly string e.g. "1 hr 24 min" (null if not resolved)
 *
 * New fields (Feature 5 — Escalation):
 *   escalated          — true when the issue was auto-escalated by the scheduler
 */
@Data
public class IssueResponse {
    public Long id;
    public Long computerId;
    public String pcLabel;          // "PC-03"

    public String studentName;
    public String rollNumber;

    public String issueType;
    public Issue.Severity severity;
    public String description;
    public Issue.Status status;

    public LocalDateTime reportedAt;
    public LocalDateTime resolvedAt;
    public String resolvedBy;
    public String notes;

    // ── Feature 3: Resolution Time ────────────────────────────────────
    /** Total resolution time in minutes; null if issue is still open */
    public Long resolutionMinutes;

    /** Friendly label, e.g. "2 hr 10 min" or "45 min"; null if still open */
    public String resolutionLabel;

    // ── Feature 5: Escalation badge ──────────────────────────────────
    /** True when this issue was auto-escalated to HIGH priority */
    public boolean escalated;
}
