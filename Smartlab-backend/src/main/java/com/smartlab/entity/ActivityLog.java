package com.smartlab.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

/**
 * ActivityLog — Extended audit trail.
 *
 * New fields (Feature 7 — Improved Activity Log):
 *   oldStatus  — status before the change  (e.g. "OPEN")
 *   newStatus  — status after  the change  (e.g. "IN_PROGRESS")
 *   actionType — machine-readable event tag (e.g. "STATUS_CHANGE", "REOPEN", "ESCALATED")
 *
 * These are nullable so old data and simple log entries are unaffected.
 */
@Entity
@Table(name = "activity_log")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActivityLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "issue_id")
    private Long issueId;

    @Column(name = "computer_id")
    private Long computerId;

    // Human-readable message shown in the dashboard feed
    @Column(name = "action", nullable = false, length = 255)
    private String action;

    @Column(name = "performed_by", length = 150)
    private String performedBy = "System";

    @Column(name = "performed_at")
    private LocalDateTime performedAt;

    // ── New audit fields ──────────────────────────────────────────────────
    /** Status before the transition, e.g. "OPEN" */
    @Column(name = "old_status", length = 50)
    private String oldStatus;

    /** Status after the transition, e.g. "IN_PROGRESS" */
    @Column(name = "new_status", length = 50)
    private String newStatus;

    /**
     * Machine-readable action type for filtering / icons in the UI.
     * Values: ISSUE_REPORTED | STATUS_CHANGE | REOPEN | ESCALATED | PC_STATUS_CHANGE
     */
    @Column(name = "action_type", length = 50)
    private String actionType;

    @PrePersist
    public void setPerformedAt() {
        this.performedAt = LocalDateTime.now();
    }

    // ── Convenience constructors ─────────────────────────────────────────

    /** Legacy constructor — keeps existing call sites working */
    public ActivityLog(Long issueId, Long computerId, String action, String performedBy) {
        this.issueId     = issueId;
        this.computerId  = computerId;
        this.action      = action;
        this.performedBy = performedBy;
    }

    /** Full audit constructor with status transition + action type */
    public ActivityLog(Long issueId, Long computerId, String action, String performedBy,
                       String oldStatus, String newStatus, String actionType) {
        this.issueId     = issueId;
        this.computerId  = computerId;
        this.action      = action;
        this.performedBy = performedBy;
        this.oldStatus   = oldStatus;
        this.newStatus   = newStatus;
        this.actionType  = actionType;
    }
}
