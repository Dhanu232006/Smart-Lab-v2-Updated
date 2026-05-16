package com.smartlab.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * ProblematicPcResponse — used by GET /api/analytics/problematic-pcs
 * Feature 4: Most Problematic PCs
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProblematicPcResponse {
    /** PC number on the floor map, e.g. 3 */
    public Integer pcNumber;
    /** Formatted label, e.g. "PC-03" */
    public String pcLabel;
    /** Total number of issues ever reported on this PC */
    public Long totalIssues;
    /** Open or in-progress issues right now */
    public Long openIssues;
}
