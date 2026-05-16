package com.smartlab.service;

import com.smartlab.dto.ProblematicPcResponse;
import com.smartlab.entity.Issue;
import com.smartlab.repository.IssueRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * AnalyticsService — Feature 4: Most Problematic PCs
 *
 * Provides aggregated analytics that are not already served by
 * ComputerService.getDashboardStats().
 */
@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final IssueRepository issueRepository;

    /**
     * Returns PCs sorted by total issue count (descending), limited to top 10.
     * Also includes each PC's current open/in-progress issue count so the
     * frontend can show a "currently active" indicator.
     *
     * GET /api/analytics/problematic-pcs?labId=1
     */
    public List<ProblematicPcResponse> getProblematicPcs(Long labId) {
        // Raw aggregation: [pcNumber, totalCount]
        List<Object[]> rows = issueRepository.countIssuesPerComputer(labId);

        // Fetch all open+in-progress issues for the lab in one query to avoid N+1
        List<Issue> openIssues = issueRepository.findByLabIdAndStatus(labId, Issue.Status.OPEN);
        openIssues.addAll(issueRepository.findByLabIdAndStatus(labId, Issue.Status.IN_PROGRESS));

        // Build a map: pcNumber → open count
        java.util.Map<Integer, Long> openByPc = new java.util.HashMap<>();
        for (Issue i : openIssues) {
            int pcNum = i.getComputer().getPcNumber();
            openByPc.merge(pcNum, 1L, Long::sum);
        }

        List<ProblematicPcResponse> result = new ArrayList<>();
        int limit = Math.min(rows.size(), 10);
        for (int i = 0; i < limit; i++) {
            Object[] row    = rows.get(i);
            int  pcNum      = ((Number) row[0]).intValue();
            long total      = ((Number) row[1]).longValue();
            long openCount  = openByPc.getOrDefault(pcNum, 0L);

            result.add(new ProblematicPcResponse(
                pcNum,
                "PC-" + String.format("%02d", pcNum),
                total,
                openCount
            ));
        }
        return result;
    }
}
