package com.smartlab.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.smartlab.dto.ProblematicPcResponse;
import com.smartlab.service.AnalyticsService;

import java.util.List;

/**
 * AnalyticsController — Feature 4: Most Problematic PCs
 *
 * Separate controller keeps analytics endpoints cleanly isolated.
 * All routes under /api/analytics/
 */
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    /**
     * GET /api/analytics/problematic-pcs?labId=1
     *
     * Returns top-10 PCs ranked by total issue count.
     * Example response:
     * [
     *   { "pcNumber": 3,  "pcLabel": "PC-03", "totalIssues": 8, "openIssues": 2 },
     *   { "pcNumber": 12, "pcLabel": "PC-12", "totalIssues": 5, "openIssues": 1 },
     *   ...
     * ]
     */
    @GetMapping("/problematic-pcs")
    public ResponseEntity<List<ProblematicPcResponse>> getProblematicPcs(
            @RequestParam Long labId) {
        return ResponseEntity.ok(analyticsService.getProblematicPcs(labId));
    }
}
