-- ═══════════════════════════════════════════════════════
--  SmartLab Issue Tracker — MySQL Database Schema v2
--  Includes original schema + v2 feature columns.
--  Run this file ONCE for a fresh install.
--  For existing databases use migration_v2.sql instead.
-- ═══════════════════════════════════════════════════════

CREATE DATABASE IF NOT EXISTS smartlab_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE smartlab_db;

-- ─────────────────────────────────────────────
--  TABLE: labs
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS labs (
  id          BIGINT        NOT NULL AUTO_INCREMENT,
  lab_name    VARCHAR(100)  NOT NULL,
  block       VARCHAR(50)   NOT NULL,
  department  VARCHAR(150)  NOT NULL,
  total_pcs   INT           NOT NULL DEFAULT 0,
  created_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- ─────────────────────────────────────────────
--  TABLE: computers
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS computers (
  id          BIGINT        NOT NULL AUTO_INCREMENT,
  lab_id      BIGINT        NOT NULL,
  pc_number   INT           NOT NULL,
  row_name    VARCHAR(10)   NOT NULL,
  side        ENUM('LEFT','RIGHT') NOT NULL,
  status      ENUM('WORKING','MINOR','FAULTY','OFFLINE')
                            NOT NULL DEFAULT 'WORKING',
  updated_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
                            ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_lab_pc (lab_id, pc_number),
  CONSTRAINT fk_computers_lab FOREIGN KEY (lab_id)
    REFERENCES labs(id) ON DELETE CASCADE
);

-- ─────────────────────────────────────────────
--  TABLE: issues  (v2: added escalated column)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS issues (
  id              BIGINT        NOT NULL AUTO_INCREMENT,
  computer_id     BIGINT        NOT NULL,
  student_name    VARCHAR(150)  NOT NULL,
  roll_number     VARCHAR(50)   NOT NULL,
  issue_type      VARCHAR(100)  NOT NULL,
  severity        ENUM('MINOR','MEDIUM','HIGH','CRITICAL')
                                NOT NULL DEFAULT 'MEDIUM',
  description     TEXT,
  status          ENUM('OPEN','IN_PROGRESS','FIXED','CLOSED')
                                NOT NULL DEFAULT 'OPEN',
  reported_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  resolved_at     DATETIME      NULL,
  resolved_by     VARCHAR(150)  NULL,
  notes           TEXT          NULL,
  -- Feature 5: Auto Escalation flag
  escalated       TINYINT(1)    NOT NULL DEFAULT 0
    COMMENT '1 when auto-escalated by EscalationService after 24h open',
  PRIMARY KEY (id),
  CONSTRAINT fk_issues_computer FOREIGN KEY (computer_id)
    REFERENCES computers(id) ON DELETE CASCADE
);

-- ─────────────────────────────────────────────
--  TABLE: activity_log  (v2: added status + action_type cols)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS activity_log (
  id           BIGINT        NOT NULL AUTO_INCREMENT,
  issue_id     BIGINT        NULL,
  computer_id  BIGINT        NULL,
  action       VARCHAR(255)  NOT NULL,
  performed_by VARCHAR(150)  NOT NULL DEFAULT 'System',
  performed_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  -- Feature 7: Improved Activity Log
  old_status   VARCHAR(50)   NULL  COMMENT 'Status before the change',
  new_status   VARCHAR(50)   NULL  COMMENT 'Status after the change',
  action_type  VARCHAR(50)   NULL
    COMMENT 'ISSUE_REPORTED | STATUS_CHANGE | REOPEN | ESCALATED | PC_STATUS_CHANGE',
  PRIMARY KEY (id)
);

-- ─────────────────────────────────────────────
--  INDEXES
-- ─────────────────────────────────────────────
CREATE INDEX idx_issues_status      ON issues(status);
CREATE INDEX idx_issues_computer    ON issues(computer_id);
CREATE INDEX idx_issues_reported_at ON issues(reported_at);
CREATE INDEX idx_issues_roll_number ON issues(roll_number);
CREATE INDEX idx_computers_lab      ON computers(lab_id);
CREATE INDEX idx_computers_status   ON computers(status);
CREATE INDEX idx_log_action_type    ON activity_log(action_type);

-- ═══════════════════════════════════════════════════════
--  SEED DATA
-- ═══════════════════════════════════════════════════════

INSERT INTO labs (lab_name, block, department, total_pcs)
VALUES ('Lab 3', 'Block B', 'Department of Computer Science', 29);

INSERT INTO computers (lab_id, pc_number, row_name, side, status) VALUES
(1,  1, 'ROW1', 'LEFT',  'MINOR'),
(1,  2, 'ROW1', 'LEFT',  'WORKING'),
(1,  3, 'ROW1', 'LEFT',  'FAULTY'),
(1,  4, 'ROW1', 'LEFT',  'WORKING'),
(1,  5, 'ROW1', 'RIGHT', 'WORKING'),
(1,  6, 'ROW1', 'RIGHT', 'MINOR'),
(1,  7, 'ROW1', 'RIGHT', 'WORKING'),
(1,  8, 'ROW1', 'RIGHT', 'WORKING'),
(1,  9, 'ROW2', 'LEFT',  'WORKING'),
(1, 10, 'ROW2', 'LEFT',  'WORKING'),
(1, 11, 'ROW2', 'LEFT',  'WORKING'),
(1, 12, 'ROW2', 'LEFT',  'WORKING'),
(1, 13, 'ROW2', 'RIGHT', 'FAULTY'),
(1, 14, 'ROW2', 'RIGHT', 'WORKING'),
(1, 15, 'ROW2', 'RIGHT', 'WORKING'),
(1, 16, 'ROW2', 'RIGHT', 'WORKING'),
(1, 17, 'ROW3', 'LEFT',  'WORKING'),
(1, 18, 'ROW3', 'LEFT',  'WORKING'),
(1, 19, 'ROW3', 'LEFT',  'WORKING'),
(1, 20, 'ROW3', 'LEFT',  'FAULTY'),
(1, 21, 'ROW3', 'RIGHT', 'WORKING'),
(1, 22, 'ROW3', 'RIGHT', 'MINOR'),
(1, 23, 'ROW3', 'RIGHT', 'WORKING'),
(1, 24, 'ROW3', 'RIGHT', 'WORKING'),
(1, 25, 'ROW4', 'LEFT',  'WORKING'),
(1, 26, 'ROW4', 'LEFT',  'WORKING'),
(1, 27, 'ROW4', 'LEFT',  'WORKING'),
(1, 28, 'ROW4', 'LEFT',  'WORKING'),
(1, 29, 'ROW4', 'RIGHT', 'WORKING');

INSERT INTO issues (computer_id, student_name, roll_number, issue_type, severity, description, status) VALUES
(3,  'Ravi Kumar',   '22CS047', 'Not Booting', 'CRITICAL', 'System stuck at BIOS screen on every boot',  'IN_PROGRESS'),
(13, 'Priya Sharma', '22CS061', 'Keyboard',    'HIGH',     'Keyboard not responding at all',             'OPEN'),
(20, 'Arjun Nair',   '22CS033', 'No Internet', 'MEDIUM',   'No internet connectivity since morning',     'OPEN'),
(1,  'Meena Iyer',   '22CS019', 'Mouse',       'MINOR',    'Mouse cursor jumps randomly across screen',  'OPEN'),
(6,  'Suresh Babu',  '22CS072', 'Display',     'HIGH',     'Monitor flickering on startup',              'FIXED');

INSERT INTO activity_log (issue_id, computer_id, action, performed_by, old_status, new_status, action_type) VALUES
(1, 3,  'Issue #1 reported on PC-03 by Ravi Kumar — Not Booting (CRITICAL)',   'Student', NULL,          'OPEN',        'ISSUE_REPORTED'),
(2, 13, 'Issue #2 reported on PC-13 by Priya Sharma — Keyboard (HIGH)',        'Student', NULL,          'OPEN',        'ISSUE_REPORTED'),
(3, 20, 'Issue #3 reported on PC-20 by Arjun Nair — No Internet (MEDIUM)',     'Student', NULL,          'OPEN',        'ISSUE_REPORTED'),
(4, 1,  'Issue #4 reported on PC-01 by Meena Iyer — Mouse (MINOR)',            'Student', NULL,          'OPEN',        'ISSUE_REPORTED'),
(5, 6,  'Issue #5 reported on PC-06 by Suresh Babu — Display (HIGH)',          'Student', NULL,          'OPEN',        'ISSUE_REPORTED'),
(1, 3,  'Issue #1 on PC-03: OPEN → IN_PROGRESS',                               'Admin',   'OPEN',        'IN_PROGRESS', 'STATUS_CHANGE'),
(5, 6,  'Issue #5 on PC-06: IN_PROGRESS → FIXED',                              'Admin',   'IN_PROGRESS', 'FIXED',       'STATUS_CHANGE'),
(5, 6,  'PC-06 status changed: MINOR → WORKING',                               'Admin',   'MINOR',       'WORKING',     'PC_STATUS_CHANGE');
