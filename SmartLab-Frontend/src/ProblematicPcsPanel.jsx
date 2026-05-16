// ═══════════════════════════════════════════════════════════════
//  ProblematicPcsPanel.jsx
//  Feature 4 — Most Problematic PCs Analytics
//
//  Renders a ranked bar-chart style list of the top PCs by total
//  issue count. Designed to drop into the AdminDashboard alongside
//  the existing KPI cards.
//
//  Props:
//    labId — optional; defaults to LAB_ID from api.js
// ═══════════════════════════════════════════════════════════════

import { useProblematicPcs } from "./useLabData";

export default function ProblematicPcsPanel({ labId }) {
  const { pcs, loading, error } = useProblematicPcs(labId);

  const maxIssues = pcs.length > 0 ? pcs[0].totalIssues : 1;

  return (
    <div style={{
      background: "#0d1117", border: "1px solid #1f2a3f",
      borderRadius: 16, padding: "18px 20px",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <span style={{ fontSize: "1rem" }}>🔥</span>
        <span style={{
          fontFamily: "'IBM Plex Mono',monospace",
          color: "#00d4ff", fontWeight: 600, fontSize: "0.85rem",
        }}>
          Most Problematic PCs
        </span>
        {!loading && pcs.length > 0 && (
          <span style={{
            marginLeft: "auto", fontSize: "0.65rem",
            color: "#8896b3", fontFamily: "'IBM Plex Mono',monospace",
          }}>
            top {pcs.length}
          </span>
        )}
      </div>

      {loading && (
        <div style={{ color: "#3e4f6e", fontSize: "0.8rem", textAlign: "center", padding: "24px 0" }}>
          Loading analytics…
        </div>
      )}

      {error && (
        <div style={{ color: "#ff3860", fontSize: "0.8rem" }}>{error}</div>
      )}

      {!loading && pcs.length === 0 && !error && (
        <div style={{ color: "#8896b3", fontSize: "0.8rem", textAlign: "center", padding: "24px 0" }}>
          No issue data yet.
        </div>
      )}

      {/* Bar list */}
      {pcs.map((pc, i) => {
        const pct     = Math.round((pc.totalIssues / maxIssues) * 100);
        const hasOpen = pc.openIssues > 0;
        const rankColor = i === 0 ? "#ff3860" : i === 1 ? "#ff6b35" : i === 2 ? "#ffdd57" : "#8896b3";

        return (
          <div key={pc.pcNumber} style={{ marginBottom: i < pcs.length - 1 ? 14 : 0 }}>
            {/* Row header */}
            <div style={{
              display: "flex", alignItems: "center",
              gap: 8, marginBottom: 5,
            }}>
              {/* Rank */}
              <span style={{
                fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700,
                fontSize: "0.7rem", color: rankColor, width: 16, textAlign: "right",
              }}>
                {i + 1}
              </span>

              {/* PC label */}
              <span style={{
                fontFamily: "'IBM Plex Mono',monospace", fontWeight: 600,
                fontSize: "0.78rem", color: "#e8edf8", minWidth: 52,
              }}>
                {pc.pcLabel}
              </span>

              {/* Open badge */}
              {hasOpen && (
                <span style={{
                  fontSize: "0.6rem", fontWeight: 700,
                  padding: "1px 6px", borderRadius: 20,
                  background: "rgba(255,56,96,0.15)", color: "#ff3860",
                  fontFamily: "'IBM Plex Mono',monospace",
                }}>
                  {pc.openIssues} open
                </span>
              )}

              {/* Count */}
              <span style={{
                marginLeft: "auto",
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: "0.72rem", color: "#8896b3",
              }}>
                {pc.totalIssues} issue{pc.totalIssues !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Bar */}
            <div style={{
              height: 5, background: "#161c2a",
              borderRadius: 4, overflow: "hidden",
            }}>
              <div style={{
                height: "100%", borderRadius: 4,
                width: `${pct}%`,
                background: i === 0
                  ? "linear-gradient(90deg,#ff3860,#ff6b35)"
                  : i === 1
                  ? "linear-gradient(90deg,#ff6b35,#ffdd57)"
                  : "linear-gradient(90deg,#00d4ff80,#a855f780)",
                transition: "width .5s cubic-bezier(.4,0,.2,1)",
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
