-- ═══════════════════════════════════════════════════════════════
--  SmartLab Issue Tracker — Database Migration
--  Run this file ONCE against an existing smartlab_db
--  to add the new columns required by the feature upgrade.
--
--  Safe: every statement uses IF NOT EXISTS / column-exists checks
--  so re-running is harmless.
-- ═══════════════════════════════════════════════════════════════

USE smartlab_db;

-- ─────────────────────────────────────────────
--  Feature 5 — Auto Escalation
--  Add `escalated` flag to issues table
-- ─────────────────────────────────────────────
ALTER TABLE issues
  ADD COLUMN IF NOT EXISTS escalated TINYINT(1) NOT NULL DEFAULT 0
  COMMENT '1 when auto-escalated by EscalationService after 24 h open';

-- ─────────────────────────────────────────────
--  Feature 7 — Improved Activity Log
--  Add status-transition and action-type columns
-- ─────────────────────────────────────────────
ALTER TABLE activity_log
  ADD COLUMN IF NOT EXISTS old_status  VARCHAR(50)  NULL
  COMMENT 'Issue/PC status before the change',

  ADD COLUMN IF NOT EXISTS new_status  VARCHAR(50)  NULL
  COMMENT 'Issue/PC status after the change',

  ADD COLUMN IF NOT EXISTS action_type VARCHAR(50)  NULL
  COMMENT 'Machine-readable tag: ISSUE_REPORTED | STATUS_CHANGE | REOPEN | ESCALATED | PC_STATUS_CHANGE';

-- Index for filtering by action_type in the dashboard
CREATE INDEX IF NOT EXISTS idx_log_action_type ON activity_log(action_type);

-- ─────────────────────────────────────────────
--  Index for Feature 6 — Student Roll Number search
-- ─────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_issues_roll_number ON issues(roll_number);

-- ─────────────────────────────────────────────
--  Verify migration
-- ─────────────────────────────────────────────
SELECT 'Migration complete' AS status;
