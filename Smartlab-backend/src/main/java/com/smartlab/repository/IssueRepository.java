package com.smartlab.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import com.smartlab.entity.Issue;

import java.time.LocalDateTime;
import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {

    List<Issue> findByComputerIdOrderByReportedAtDesc(Long computerId);

    List<Issue> findByStatusOrderByReportedAtDesc(Issue.Status status);

    @Query("SELECT i FROM Issue i JOIN i.computer c WHERE c.lab.id = :labId ORDER BY i.reportedAt DESC")
    List<Issue> findAllByLabId(@Param("labId") Long labId);

    @Query("SELECT i FROM Issue i JOIN i.computer c WHERE c.lab.id = :labId AND i.status = :status ORDER BY i.reportedAt DESC")
    List<Issue> findByLabIdAndStatus(@Param("labId") Long labId, @Param("status") Issue.Status status);

    @Query("SELECT COUNT(i) FROM Issue i JOIN i.computer c WHERE c.lab.id = :labId AND i.status = :status")
    long countByLabIdAndStatus(@Param("labId") Long labId, @Param("status") Issue.Status status);

    @Query("SELECT i FROM Issue i JOIN i.computer c WHERE c.lab.id = :labId AND i.status = 'FIXED' AND i.resolvedAt >= :startOfDay")
    List<Issue> findFixedToday(@Param("labId") Long labId, @Param("startOfDay") LocalDateTime startOfDay);

    @Query("SELECT i.issueType, COUNT(i) FROM Issue i JOIN i.computer c WHERE c.lab.id = :labId GROUP BY i.issueType ORDER BY COUNT(i) DESC")
    List<Object[]> countByIssueType(@Param("labId") Long labId);

    // ── Feature 6: Student Issue Tracking ───────────────────────────────
    // Fetch all issues submitted by a specific roll number
    @Query("SELECT i FROM Issue i JOIN i.computer c WHERE i.rollNumber = :rollNumber ORDER BY i.reportedAt DESC")
    List<Issue> findByRollNumberOrderByReportedAtDesc(@Param("rollNumber") String rollNumber);

    // ── Feature 4: Most Problematic PCs ─────────────────────────────────
    // Aggregate issue count per computer in a given lab
    @Query("SELECT c.pcNumber, COUNT(i) as cnt FROM Issue i JOIN i.computer c WHERE c.lab.id = :labId GROUP BY c.id, c.pcNumber ORDER BY cnt DESC")
    List<Object[]> countIssuesPerComputer(@Param("labId") Long labId);

    // ── Feature 5: Auto-Escalation ───────────────────────────────────────
    // Find OPEN issues older than the given cutoff that are not yet HIGH/CRITICAL
    @Query("SELECT i FROM Issue i WHERE i.status = 'OPEN' AND i.reportedAt < :cutoff AND i.severity NOT IN ('HIGH', 'CRITICAL')")
    List<Issue> findStaleOpenIssues(@Param("cutoff") LocalDateTime cutoff);
}
