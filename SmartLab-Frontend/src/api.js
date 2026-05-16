// ═══════════════════════════════════════════════════════════════
//  SmartLab — API Service Layer  (v2 — Feature Upgrade)
//  All communication with the Spring Boot backend lives here.
//  Components never call fetch() directly — they use these functions.
//
//  Base URL: http://localhost:8081/api
// ═══════════════════════════════════════════════════════════════

const BASE_URL = "http://localhost:8081/api";

export const LAB_ID = 1;

// ─── Shared fetch wrapper ───────────────────────────────────────
async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Network error" }));
    throw new Error(err.message || `Request failed: ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

// ═══════════════════════════════════════════════════════════════
//  COMPUTERS / LAB MAP
// ═══════════════════════════════════════════════════════════════

export async function fetchComputers(labId = LAB_ID) {
  return request(`/computers?labId=${labId}`);
}

export async function fetchComputerStats(labId = LAB_ID) {
  return request(`/computers/stats?labId=${labId}`);
}

export async function updateComputerStatus(computerId, status, adminName = "Admin") {
  return request(`/computers/${computerId}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status, adminName }),
  });
}

// ═══════════════════════════════════════════════════════════════
//  ISSUES
// ═══════════════════════════════════════════════════════════════

export async function reportIssue(payload) {
  return request("/issues", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function fetchIssues(labId = LAB_ID, status = null) {
  const qs = status
    ? `/issues?labId=${labId}&status=${status}`
    : `/issues?labId=${labId}`;
  return request(qs);
}

export async function fetchIssueById(issueId) {
  return request(`/issues/${issueId}`);
}

export async function fetchIssuesByComputer(computerId) {
  return request(`/issues/computer/${computerId}`);
}

export async function updateIssueStatus(issueId, status, notes = "", resolvedBy = "Admin") {
  return request(`/issues/${issueId}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status, notes, resolvedBy }),
  });
}

export async function fetchActivityLog() {
  return request("/issues/activity");
}

// ─── Feature 6: Student Issue Tracking ──────────────────────────
/**
 * GET /api/issues/by-roll?roll=22CS047
 * Returns all issues submitted by the given roll number.
 */
export async function fetchIssuesByRollNumber(rollNumber) {
  return request(`/issues/by-roll?roll=${encodeURIComponent(rollNumber)}`);
}

// ═══════════════════════════════════════════════════════════════
//  ANALYTICS  (Feature 4)
// ═══════════════════════════════════════════════════════════════

/**
 * GET /api/analytics/problematic-pcs?labId=1
 * Returns top-10 PCs ranked by total issue count.
 * [ { pcNumber, pcLabel, totalIssues, openIssues }, ... ]
 */
export async function fetchProblematicPcs(labId = LAB_ID) {
  return request(`/analytics/problematic-pcs?labId=${labId}`);
}

// ═══════════════════════════════════════════════════════════════
//  DATA TRANSFORM HELPERS
// ═══════════════════════════════════════════════════════════════

export function toFrontendStatus(s) {
  return { WORKING: "ok", MINOR: "minor", FAULTY: "faulty", OFFLINE: "offline" }[s] ?? "ok";
}

export function toBackendStatus(s) {
  return { ok: "WORKING", minor: "MINOR", faulty: "FAULTY", offline: "OFFLINE" }[s] ?? "WORKING";
}

export function toFrontendIssueStatus(s) {
  return { OPEN: "open", IN_PROGRESS: "prog", FIXED: "fixed", CLOSED: "closed" }[s] ?? "open";
}

export function toBackendIssueStatus(s) {
  return { open: "OPEN", prog: "IN_PROGRESS", fixed: "FIXED", closed: "CLOSED" }[s] ?? "OPEN";
}

export function pcLabel(n) {
  return `PC-${String(n).padStart(2, "0")}`;
}

export function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", hour12: true,
  });
}

export function formatDate(iso) {
  if (!iso) return "";
  const d    = new Date(iso);
  const diff = Math.floor((Date.now() - d) / 86_400_000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
}
