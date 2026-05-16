// ═══════════════════════════════════════════════════════════════
//  PcHistoryModal.jsx
//  Feature 2 — Issue History Per Computer
//
//  Shows a timeline of every issue ever reported on a given PC.
//  Opened from the AdminDashboard when an admin clicks the
//  "History" button on a PC tile or issue row.
//
//  Props:
//    computerId  — database ID of the computer
//    pcLabel     — display string e.g. "PC-12"
//    onClose     — callback to close the modal
// ═══════════════════════════════════════════════════════════════

import { usePcHistory } from "./useLabData";

// ── Severity colour helpers (match the existing theme vars) ────
const sevColor = s => ({
  CRITICAL: "#ff3860", HIGH: "#ff6b35",
  MEDIUM: "#ffdd57",  MINOR: "#00ff87",
})[s] ?? "#8896b3";

const statusBadge = s => ({
  OPEN:        { label: "Open",        bg: "#ff386020", color: "#ff3860" },
  IN_PROGRESS: { label: "In Progress", bg: "#ffdd5720", color: "#ffdd57" },
  FIXED:       { label: "Fixed",       bg: "#00ff8720", color: "#00ff87" },
  CLOSED:      { label: "Closed",      bg: "#58596d20", color: "#8896b3" },
})[s] ?? { label: s, bg: "#161c2a", color: "#8896b3" };

function formatDateTime(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: true,
  });
}

export default function PcHistoryModal({ computerId, pcLabel, onClose }) {
  const { history, loading, error } = usePcHistory(computerId);

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
        }}
      />

      {/* ── Modal panel ── */}
      <div style={{
        position: "fixed", top: "50%", left: "50%", zIndex: 1000,
        transform: "translate(-50%,-50%)",
        width: "min(720px, 95vw)", maxHeight: "80vh",
        background: "#0d1117", border: "1px solid #1f2a3f",
        borderRadius: "18px", display: "flex", flexDirection: "column",
        boxShadow: "0 24px 80px rgba(0,212,255,0.12)",
      }}>

        {/* Header */}
        <div style={{
          padding: "20px 24px 16px", borderBottom: "1px solid #1f2a3f",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
          }}>🖥️</div>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", color: "#00d4ff", fontWeight: 600, fontSize: "1rem" }}>
              {pcLabel} — Maintenance History
            </div>
            <div style={{ color: "#8896b3", fontSize: "0.75rem", marginTop: 2 }}>
              {loading ? "Loading…" : `${history.length} issue${history.length !== 1 ? "s" : ""} on record`}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              marginLeft: "auto", background: "none", border: "none",
              color: "#8896b3", cursor: "pointer", fontSize: "1.2rem",
              lineHeight: 1, padding: "4px 8px", borderRadius: 6,
              transition: "color .2s",
            }}
            onMouseEnter={e => e.target.style.color = "#e8edf8"}
            onMouseLeave={e => e.target.style.color = "#8896b3"}
          >✕</button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", padding: "16px 24px 24px" }}>
          {loading && (
            <div style={{ color: "#8896b3", textAlign: "center", padding: "40px 0" }}>
              Loading history…
            </div>
          )}

          {error && (
            <div style={{ color: "#ff3860", textAlign: "center", padding: "40px 0" }}>
              {error}
            </div>
          )}

          {!loading && !error && history.length === 0 && (
            <div style={{ color: "#8896b3", textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>✅</div>
              No issues reported on this PC yet.
            </div>
          )}

          {/* Timeline */}
          {!loading && history.length > 0 && (
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: 15, top: 8, bottom: 8,
                width: 2, background: "#1f2a3f",
              }} />

              {history.map((issue, idx) => {
                const badge  = statusBadge(issue.status);
                const sColor = sevColor(issue.severity);
                return (
                  <div key={issue.id} style={{
                    display: "flex", gap: 16, marginBottom: idx < history.length - 1 ? 20 : 0,
                  }}>
                    {/* Timeline dot */}
                    <div style={{
                      flexShrink: 0, width: 32, height: 32, borderRadius: "50%",
                      background: "#0d1117", border: `2px solid ${sColor}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.7rem", color: sColor, fontWeight: 700, zIndex: 1,
                    }}>
                      {issue.severity?.[0] ?? "?"}
                    </div>

                    {/* Card */}
                    <div style={{
                      flex: 1, background: "#111520", border: "1px solid #1f2a3f",
                      borderRadius: 12, padding: "12px 16px",
                    }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                        <span style={{
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: "0.8rem", fontWeight: 600, color: "#e8edf8",
                        }}>
                          {issue.issueType}
                        </span>

                        {/* Status badge */}
                        <span style={{
                          marginLeft: "auto", fontSize: "0.65rem", fontWeight: 600,
                          padding: "2px 8px", borderRadius: 20,
                          background: badge.bg, color: badge.color,
                          fontFamily: "'IBM Plex Mono',monospace",
                        }}>
                          {badge.label}
                        </span>

                        {/* Escalation badge — Feature 5 */}
                        {issue.escalated && (
                          <span style={{
                            fontSize: "0.6rem", fontWeight: 700,
                            padding: "2px 7px", borderRadius: 20,
                            background: "rgba(255,107,53,0.2)", color: "#ff6b35",
                            fontFamily: "'IBM Plex Mono',monospace",
                          }}>
                            ⚡ ESCALATED
                          </span>
                        )}
                      </div>

                      {issue.description && (
                        <div style={{ color: "#8896b3", fontSize: "0.78rem", marginBottom: 8 }}>
                          {issue.description}
                        </div>
                      )}

                      <div style={{
                        display: "flex", gap: 16, flexWrap: "wrap",
                        fontSize: "0.7rem", color: "#3e4f6e",
                        fontFamily: "'IBM Plex Mono',monospace",
                      }}>
                        <span>👤 {issue.studentName} · {issue.rollNumber}</span>
                        <span>📅 {formatDateTime(issue.reportedAt)}</span>
                        {/* Feature 3 — Resolution time */}
                        {issue.resolutionLabel && (
                          <span style={{ color: "#00ff87" }}>
                            ⏱ Resolved in {issue.resolutionLabel}
                          </span>
                        )}
                        {issue.resolvedBy && (
                          <span>🔧 {issue.resolvedBy}</span>
                        )}
                      </div>

                      {issue.notes && (
                        <div style={{
                          marginTop: 8, padding: "6px 10px",
                          background: "rgba(0,212,255,0.05)", borderRadius: 6,
                          fontSize: "0.72rem", color: "#8896b3", borderLeft: "2px solid #1f2a3f",
                        }}>
                          {issue.notes}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
