// ═══════════════════════════════════════════════════════════════
//  StudentTracker.jsx
//  Feature 6 — Student Issue Tracking
//
//  Student enters their roll number and sees all their submitted
//  complaints with current status and resolution progress.
//
//  Usage in SmartLabTracker.jsx:
//    import StudentTracker from "./StudentTracker";
//    <StudentTracker />   (renders as a collapsible panel below the map)
// ═══════════════════════════════════════════════════════════════

import { useState } from "react";
import { useStudentTracker } from "./useLabData";

const statusStyle = s => ({
  open:   { label: "Open",        color: "#ff3860", bg: "rgba(255,56,96,0.12)" },
  prog:   { label: "In Progress", color: "#ffdd57", bg: "rgba(255,221,87,0.12)" },
  fixed:  { label: "Fixed",       color: "#00ff87", bg: "rgba(0,255,135,0.12)" },
  closed: { label: "Closed",      color: "#8896b3", bg: "rgba(136,150,179,0.1)" },
})[s] ?? { label: s, color: "#8896b3", bg: "transparent" };

const sevColor = s => ({
  CRITICAL: "#ff3860", HIGH: "#ff6b35",
  MEDIUM: "#ffdd57",  MINOR: "#00ff87",
})[s] ?? "#8896b3";

function ProgressBar({ frontendStatus }) {
  const steps  = ["open", "prog", "fixed"];
  const active = steps.indexOf(frontendStatus);
  const pct    = frontendStatus === "fixed" || frontendStatus === "closed"
    ? 100 : active < 0 ? 0 : Math.round(((active) / (steps.length - 1)) * 100);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: "0.65rem", color: "#3e4f6e", fontFamily: "'IBM Plex Mono',monospace" }}>
        <span>Reported</span><span>In Progress</span><span>Resolved</span>
      </div>
      <div style={{ height: 4, background: "#1f2a3f", borderRadius: 4, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 4, width: `${pct}%`,
          background: pct === 100 ? "#00ff87" : "linear-gradient(90deg,#00d4ff,#a855f7)",
          transition: "width .4s ease",
        }} />
      </div>
    </div>
  );
}

export default function StudentTracker() {
  const [roll,     setRoll]     = useState("");
  const [expanded, setExpanded] = useState(false);
  const { issues, loading, error, searched, search, reset } = useStudentTracker();

  const handleSearch = () => {
    if (!roll.trim()) return;
    search(roll);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={{
      margin: "24px 0",
      background: "#0d1117",
      border: "1px solid #1f2a3f",
      borderRadius: 16,
      overflow: "hidden",
    }}>
      {/* ── Collapsible header ── */}
      <button
        onClick={() => setExpanded(p => !p)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "14px 20px", display: "flex", alignItems: "center", gap: 10,
          color: "#e8edf8",
        }}
      >
        <span style={{ fontSize: "1rem" }}>🎓</span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.85rem", fontWeight: 600, color: "#00d4ff" }}>
          Track My Issues
        </span>
        <span style={{ marginLeft: "auto", color: "#3e4f6e", transition: "transform .2s", transform: expanded ? "rotate(180deg)" : "none" }}>▼</span>
      </button>

      {/* ── Body ── */}
      {expanded && (
        <div style={{ padding: "0 20px 20px" }}>

          {/* Search row */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <input
              value={roll}
              onChange={e => { setRoll(e.target.value); if (searched) reset(); }}
              onKeyDown={handleKey}
              placeholder="Enter your Roll Number e.g. 22CS047"
              style={{
                flex: 1, padding: "10px 14px",
                background: "#111520", border: "1px solid #1f2a3f",
                borderRadius: 10, color: "#e8edf8",
                fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.82rem",
                outline: "none",
              }}
            />
            <button
              onClick={handleSearch}
              disabled={loading || !roll.trim()}
              style={{
                padding: "10px 20px", borderRadius: 10, cursor: "pointer",
                background: loading ? "#1f2a3f" : "rgba(0,212,255,0.15)",
                border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff",
                fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.82rem",
                fontWeight: 600, transition: "background .2s",
              }}
            >
              {loading ? "…" : "Search"}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div style={{ color: "#ff3860", fontSize: "0.8rem", marginBottom: 12 }}>{error}</div>
          )}

          {/* Empty state */}
          {searched && !loading && issues.length === 0 && (
            <div style={{ color: "#8896b3", fontSize: "0.82rem", textAlign: "center", padding: "24px 0" }}>
              No issues found for roll number <strong style={{ color: "#e8edf8" }}>{roll}</strong>
            </div>
          )}

          {/* Results */}
          {issues.map(issue => {
            const st = statusStyle(issue.frontendStatus);
            return (
              <div key={issue.id} style={{
                background: "#111520", border: "1px solid #1f2a3f",
                borderRadius: 12, padding: "14px 16px", marginBottom: 10,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.8rem", color: "#00d4ff", fontWeight: 600 }}>
                      {issue.pcLabel}
                    </div>
                    <div style={{ color: "#e8edf8", fontSize: "0.85rem", fontWeight: 500, marginTop: 2 }}>
                      {issue.issueType}
                    </div>
                    {issue.description && (
                      <div style={{ color: "#8896b3", fontSize: "0.75rem", marginTop: 4 }}>{issue.description}</div>
                    )}
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 20,
                      background: st.bg, color: st.color,
                      fontSize: "0.65rem", fontWeight: 700,
                      fontFamily: "'IBM Plex Mono',monospace",
                    }}>
                      {st.label}
                    </span>
                    <span style={{ fontSize: "0.65rem", color: sevColor(issue.severity), fontFamily: "'IBM Plex Mono',monospace" }}>
                      {issue.severity}
                    </span>
                    {/* Feature 5 escalation badge */}
                    {issue.escalated && (
                      <span style={{ fontSize: "0.6rem", padding: "2px 7px", borderRadius: 20, background: "rgba(255,107,53,0.2)", color: "#ff6b35", fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700 }}>
                        ⚡ ESCALATED
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <ProgressBar frontendStatus={issue.frontendStatus} />

                <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap", fontSize: "0.7rem", color: "#3e4f6e", fontFamily: "'IBM Plex Mono',monospace" }}>
                  <span>📅 {new Date(issue.reportedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</span>
                  {/* Feature 3 — Resolution time */}
                  {issue.resolutionLabel && (
                    <span style={{ color: "#00ff87" }}>⏱ Resolved in {issue.resolutionLabel}</span>
                  )}
                  {issue.resolvedBy && <span>🔧 by {issue.resolvedBy}</span>}
                </div>

                {issue.notes && (
                  <div style={{ marginTop: 8, padding: "6px 10px", background: "rgba(0,212,255,0.05)", borderRadius: 6, fontSize: "0.72rem", color: "#8896b3" }}>
                    📝 {issue.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
