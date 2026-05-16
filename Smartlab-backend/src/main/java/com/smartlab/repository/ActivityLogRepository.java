package com.smartlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartlab.entity.ActivityLog;

import java.util.List;

public interface ActivityLogRepository extends JpaRepository<ActivityLog, Long> {

    /** Last 20 entries for the live dashboard feed */
    List<ActivityLog> findTop20ByOrderByPerformedAtDesc();

    /** Full timeline for a specific issue (Feature 2 + 7) */
    List<ActivityLog> findByIssueIdOrderByPerformedAtDesc(Long issueId);

    /** All log entries for a specific computer — used in PC History modal */
    List<ActivityLog> findByComputerIdOrderByPerformedAtDesc(Long computerId);
}
