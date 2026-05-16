import { useState, useCallback, useEffect, useRef } from "react";
import { useLabMap, useIssues, useReportIssue } from "./useLabData";
import StudentTracker from "./StudentTracker";

/* ─── FONTS ─────────────────────────────────────────────────────────── */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap');`;

/* ─── CONSTANTS ──────────────────────────────────────────────────────── */
const LAB_ROWS = [
  { left: [1,2,3,4],     right: [5,6,7,8]    },
  { left: [9,10,11,12],  right: [13,14,15,16] },
  { left: [17,18,19,20], right: [21,22,23,24] },
  { left: [25,26,27,28], right: [29]          },
];

const ISSUE_CHIPS = [
  "Not Booting","Keyboard","Mouse","No Internet",
  "Display","Audio","Software","Very Slow","No Power"
];

const statusLabel = s => ({ ok:"Operational", faulty:"Critical", minor:"Degraded", offline:"Offline" }[s] ?? "");
const statusColor = s => ({ ok:"#00ff87", faulty:"#ff3860", minor:"#ffdd57", offline:"#585c6d" }[s] ?? "#fff");

/* ─── CSS ────────────────────────────────────────────────────────────── */
const css = `
${FONTS}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #080a0f;
  --surface: #0d1117;
  --panel:   #111520;
  --card:    #161c2a;
  --rim:     #1f2a3f;
  --rim2:    #2a3752;
  --rim3:    #354363;

  --cyan:    #00d4ff;
  --cyan2:   #00a3c4;
  --green:   #00ff87;
  --amber:   #ffdd57;
  --red:     #ff3860;
  --purple:  #a855f7;

  --c-cyan:  rgba(0,212,255,0.08);
  --c-green: rgba(0,255,135,0.08);
  --c-amber: rgba(255,221,87,0.08);
  --c-red:   rgba(255,56,96,0.08);

  --text:    #e8edf8;
  --text2:   #8896b3;
  --text3:   #3e4f6e;

  --mono:    'IBM Plex Mono', monospace;
  --body:    'Space Grotesk', sans-serif;

  --rad:     12px;
  --rad-lg:  18px;
  --transition: 0.2s cubic-bezier(0.4,0,0.2,1);
}

/* ── Root ── */
.sl-root {
  font-family: var(--body);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
}

/* subtle grid overlay */
.sl-root::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* corner glow accents */
.sl-root::after {
  content: '';
  position: fixed;
  top: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ── Nav ── */
.sl-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 60px;
  background: rgba(8,10,15,0.92);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--rim);
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  gap: 1rem;
  position: relative;
  z-index: 50;
}

.sl-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.sl-logo-icon {
  width: 34px; height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--cyan) 0%, #6c63ff 100%);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px;
  box-shadow: 0 0 20px rgba(0,212,255,0.35), 0 0 40px rgba(0,212,255,0.1);
  flex-shrink: 0;
}

.sl-logo-text { color: var(--text); }
.sl-logo-text span { color: var(--cyan); }

.sl-spacer { flex: 1; }

.sl-nav-pills {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sl-pill {
  background: var(--card);
  border: 1px solid var(--rim);
  border-radius: 8px;
  padding: 5px 13px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text2);
  display: flex;
  align-items: center;
  gap: 6px;
}
.sl-pill-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 6px var(--red);
  animation: pulse-dot 2s ease-in-out infinite;
}
.sl-pill b { color: var(--amber); font-weight: 600; }

@keyframes pulse-dot {
  0%,100% { opacity:1; transform: scale(1); }
  50%      { opacity:0.5; transform: scale(0.85); }
}

.sl-admin-btn {
  background: transparent;
  border: 1px solid var(--rim2);
  border-radius: 8px;
  padding: 7px 16px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text2);
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.04em;
}
.sl-admin-btn:hover {
  border-color: var(--cyan);
  color: var(--cyan);
  background: var(--c-cyan);
  box-shadow: 0 0 12px rgba(0,212,255,0.1);
}

/* ── Info Strip ── */
.sl-strip {
  background: var(--surface);
  border-bottom: 1px solid var(--rim);
  padding: 10px 1.75rem;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 0.78rem;
  color: var(--text2);
  position: relative;
  z-index: 1;
}

.sl-strip-live {
  display: flex; align-items: center; gap: 6px;
  padding: 3px 10px;
  background: rgba(0,255,135,0.07);
  border: 1px solid rgba(0,255,135,0.2);
  border-radius: 6px;
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--green);
  font-weight: 600;
  letter-spacing: 0.08em;
}
.sl-strip-live-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse-dot 1.5s ease-in-out infinite;
}

.sl-strip-sep { color: var(--rim2); }
.sl-strip strong { color: var(--text); font-weight: 600; }

.sl-strip-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 9px;
  background: var(--card);
  border: 1px solid var(--rim);
  border-radius: 5px;
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text2);
}

/* ── Body ── */
.sl-body {
  flex: 1;
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* ── Canvas (Lab Map) ── */
.sl-canvas {
  flex: 1;
  padding: 28px 44px 28px 44px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sl-map-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.sl-map-title {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text3);
  display: flex;
  align-items: center;
  gap: 10px;
}
.sl-map-title::after {
  content: '';
  display: block;
  width: 60px; height: 1px;
  background: linear-gradient(90deg, var(--rim2), transparent);
}

/* ── Projector ── */
.sl-proj-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
}

.sl-proj {
  width: min(480px, 90%);
  height: 42px;
  background: var(--panel);
  border: 1px solid var(--rim2);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

.sl-proj-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(0,212,255,0.04) 30%,
    rgba(0,212,255,0.12) 50%,
    rgba(0,212,255,0.04) 70%,
    transparent 100%
  );
  animation: proj-sweep 5s ease-in-out infinite;
}
@keyframes proj-sweep {
  0%,100% { opacity: 0.5; }
  50%      { opacity: 1; }
}

.sl-proj-icon {
  font-size: 14px;
  position: relative;
  z-index: 1;
}
.sl-proj-lbl {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--cyan);
  position: relative;
  z-index: 1;
  opacity: 0.8;
}

.sl-proj-base {
  width: min(520px, 98%);
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--cyan2), var(--cyan2), transparent);
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 12px rgba(0,212,255,0.2);
}

.sl-proj-sub {
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text3);
  margin-top: 8px;
}

/* ── Grid Layout ── */
.sl-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.sl-row {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.sl-cluster { display: flex; gap: 10px; }
.sl-cluster-left  { flex: 1; justify-content: flex-end; }
.sl-cluster-right { flex: 1; justify-content: flex-start; }

.sl-aisle {
  width: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sl-aisle-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.sl-aisle-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, transparent, var(--rim2), transparent);
}
.sl-aisle-label {
  font-family: var(--mono);
  font-size: 0.48rem;
  letter-spacing: 0.15em;
  color: var(--text3);
  transform: rotate(90deg);
  white-space: nowrap;
}

/* ── PC Tile ── */
.sl-pc {
  width: 62px; height: 60px;
  border-radius: var(--rad);
  border: 1.5px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 5px;
  position: relative;
  transition: transform 0.18s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s, border-color 0.2s, background 0.2s;
  user-select: none;
  flex-shrink: 0;
  overflow: hidden;
}

/* inner glow strip at bottom */
.sl-pc::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.2s;
}
.sl-pc:hover::before { opacity: 1; }

/* status dot */
.sl-pc::after {
  content: '';
  position: absolute;
  bottom: 7px; right: 8px;
  width: 5px; height: 5px;
  border-radius: 50%;
}

.sl-pc-icon { font-size: 18px; line-height: 1; }
.sl-pc-num {
  font-family: var(--mono);
  font-size: 0.5rem;
  font-weight: 500;
  opacity: 0.6;
  letter-spacing: 0.06em;
}

/* States */
.sl-pc.ok {
  background: rgba(0,255,135,0.04);
  border-color: rgba(0,255,135,0.18);
  color: var(--green);
}
.sl-pc.ok::before  { background: var(--green); box-shadow: 0 0 8px var(--green); }
.sl-pc.ok::after   { background: var(--green); box-shadow: 0 0 6px var(--green); }
.sl-pc.ok:hover    { transform: translateY(-5px) scale(1.08); border-color: var(--green); box-shadow: 0 10px 28px rgba(0,255,135,0.22); background: rgba(0,255,135,0.08); }

.sl-pc.minor {
  background: rgba(255,221,87,0.04);
  border-color: rgba(255,221,87,0.2);
  color: var(--amber);
}
.sl-pc.minor::before { background: var(--amber); box-shadow: 0 0 8px var(--amber); }
.sl-pc.minor::after  { background: var(--amber); box-shadow: 0 0 6px var(--amber); }
.sl-pc.minor:hover   { transform: translateY(-5px) scale(1.08); border-color: var(--amber); box-shadow: 0 10px 28px rgba(255,221,87,0.22); background: rgba(255,221,87,0.08); }

.sl-pc.faulty {
  background: rgba(255,56,96,0.05);
  border-color: rgba(255,56,96,0.22);
  color: var(--red);
  animation: faulty-pulse 2.5s ease-in-out infinite;
}
.sl-pc.faulty::before { background: var(--red); box-shadow: 0 0 8px var(--red); }
.sl-pc.faulty::after  { background: var(--red); box-shadow: 0 0 6px var(--red); }
.sl-pc.faulty:hover   { transform: translateY(-5px) scale(1.08); border-color: var(--red); box-shadow: 0 10px 32px rgba(255,56,96,0.32); background: rgba(255,56,96,0.1); animation: none; }

@keyframes faulty-pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(255,56,96,0); }
  50%      { box-shadow: 0 0 0 6px rgba(255,56,96,0.12); }
}

.sl-pc.offline {
  background: transparent;
  border-color: var(--rim);
  color: var(--text3);
  cursor: default;
  opacity: 0.35;
}

.sl-pc.selected {
  border-color: var(--cyan) !important;
  box-shadow: 0 0 0 3px rgba(0,212,255,0.2), 0 10px 30px rgba(0,212,255,0.3) !important;
  transform: translateY(-6px) scale(1.12) !important;
  background: rgba(0,212,255,0.1) !important;
  color: var(--cyan) !important;
  animation: none !important;
}
.sl-pc.selected::after { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }

/* ── Legend ── */
.sl-legend {
  display: flex;
  gap: 6px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.sl-legend-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: 8px;
  font-size: 0.72rem;
  color: var(--text2);
  font-family: var(--mono);
  transition: border-color var(--transition);
}
.sl-legend-item:hover { border-color: var(--rim2); }

.sl-legend-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
}
.sl-legend-dot.ok      { background: var(--green); box-shadow: 0 0 5px var(--green); }
.sl-legend-dot.minor   { background: var(--amber); box-shadow: 0 0 5px var(--amber); }
.sl-legend-dot.faulty  { background: var(--red);   box-shadow: 0 0 5px var(--red);   }
.sl-legend-dot.offline { background: var(--rim2); }

/* ── Sidebar ── */
.sl-sidebar {
  width: 300px;
  flex-shrink: 0;
  background: var(--surface);
  border-left: 1px solid var(--rim);
  padding: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sl-sidebar::-webkit-scrollbar { width: 3px; }
.sl-sidebar::-webkit-scrollbar-thumb { background: var(--rim2); border-radius: 2px; }

.sl-sb-section {
  padding: 20px 20px;
  border-bottom: 1px solid var(--rim);
}

.sl-sec-title {
  font-family: var(--mono);
  font-size: 0.58rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text3);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sl-sec-title::before {
  content: '';
  display: block;
  width: 3px; height: 12px;
  background: var(--cyan);
  border-radius: 2px;
  box-shadow: 0 0 6px var(--cyan);
}

/* ── Stat Cards ── */
.sl-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.sl-stat {
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 12px 14px;
  position: relative;
  overflow: hidden;
  transition: border-color var(--transition);
}
.sl-stat:hover { border-color: var(--rim2); }

.sl-stat::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  border-radius: 2px 2px 0 0;
}
.sl-stat.ok::before    { background: var(--green); box-shadow: 0 0 8px var(--green); }
.sl-stat.minor::before { background: var(--amber); box-shadow: 0 0 8px var(--amber); }
.sl-stat.fault::before { background: var(--red);   box-shadow: 0 0 8px var(--red);   }
.sl-stat.off::before   { background: var(--rim2); }

.sl-stat-num {
  font-family: var(--mono);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 4px;
}
.sl-stat.ok .sl-stat-num    { color: var(--green); }
.sl-stat.minor .sl-stat-num { color: var(--amber); }
.sl-stat.fault .sl-stat-num { color: var(--red);   }
.sl-stat.off .sl-stat-num   { color: var(--text3); }

.sl-stat-lbl {
  font-size: 0.65rem;
  color: var(--text2);
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* ── Health Bar ── */
.sl-health-bar-wrap {
  margin-top: 14px;
}
.sl-health-bar-label {
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--text3);
  margin-bottom: 6px;
}
.sl-health-bar-track {
  height: 5px;
  background: var(--panel);
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  gap: 2px;
}
.sl-health-segment {
  height: 100%;
  border-radius: 2px;
  transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
}

/* ── Selected Panel ── */
.sl-sel-box {
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sl-sel-box.active {
  border-color: rgba(0,212,255,0.35);
  box-shadow: 0 0 0 1px rgba(0,212,255,0.1), inset 0 0 24px rgba(0,212,255,0.03);
}

.sl-sel-placeholder {
  text-align: center;
  color: var(--text3);
  font-family: var(--mono);
  font-size: 0.7rem;
  line-height: 2;
}
.sl-sel-arrow { font-size: 1.1rem; display: block; margin-bottom: 4px; }

.sl-sel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.sl-sel-name {
  font-family: var(--mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cyan);
}
.sl-sel-spec {
  font-size: 0.65rem;
  color: var(--text3);
  font-family: var(--mono);
  margin-bottom: 12px;
  line-height: 1.8;
}

.sl-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--mono);
  font-size: 0.62rem;
  font-weight: 600;
  border: 1px solid;
}
.sl-badge-dot { width: 5px; height: 5px; border-radius: 50%; }
.sl-badge.ok     { background: rgba(0,255,135,0.08); color: var(--green); border-color: rgba(0,255,135,0.25); }
.sl-badge.ok .sl-badge-dot { background: var(--green); box-shadow: 0 0 5px var(--green); }
.sl-badge.minor  { background: rgba(255,221,87,0.08); color: var(--amber); border-color: rgba(255,221,87,0.25); }
.sl-badge.minor .sl-badge-dot { background: var(--amber); box-shadow: 0 0 5px var(--amber); }
.sl-badge.faulty { background: rgba(255,56,96,0.08);  color: var(--red);   border-color: rgba(255,56,96,0.25); }
.sl-badge.faulty .sl-badge-dot { background: var(--red); box-shadow: 0 0 5px var(--red); }

.sl-report-btn {
  width: 100%;
  margin-top: 12px;
  padding: 11px 0;
  background: linear-gradient(135deg, rgba(255,56,96,0.12), rgba(255,56,96,0.06));
  border: 1px solid rgba(255,56,96,0.35);
  border-radius: var(--rad);
  color: var(--red);
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.sl-report-btn:hover {
  background: rgba(255,56,96,0.18);
  border-color: var(--red);
  box-shadow: 0 4px 18px rgba(255,56,96,0.22);
  transform: translateY(-1px);
}

/* ── Issues List ── */
.sl-issues {
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-height: 320px;
  overflow-y: auto;
}
.sl-issues::-webkit-scrollbar { width: 3px; }
.sl-issues::-webkit-scrollbar-thumb { background: var(--rim2); border-radius: 2px; }

.sl-issue {
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 11px 13px;
  cursor: default;
  transition: border-color var(--transition);
  animation: slide-in 0.35s ease-out both;
  position: relative;
  overflow: hidden;
}
.sl-issue::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
}
.sl-issue.open::before   { background: var(--red); }
.sl-issue.prog::before   { background: var(--amber); }
.sl-issue.fixed::before  { background: var(--green); }
.sl-issue:hover { border-color: var(--rim2); }

@keyframes slide-in {
  from { opacity: 0; transform: translateX(10px); }
  to   { opacity: 1; transform: translateX(0); }
}

.sl-issue-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.sl-issue-id {
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--cyan);
}
.sl-issue-time {
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--text3);
}
.sl-issue-desc {
  font-size: 0.75rem;
  color: var(--text2);
  margin-bottom: 7px;
  line-height: 1.4;
}

.sl-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.sl-tag.open  { background: rgba(255,56,96,0.1);   color: var(--red);   }
.sl-tag.prog  { background: rgba(255,221,87,0.1);  color: var(--amber); }
.sl-tag.fixed { background: rgba(0,255,135,0.08);  color: var(--green); }

/* ── Misc ── */
.sl-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  gap: 10px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text3);
  letter-spacing: 0.1em;
}
.sl-loading-spin {
  width: 18px; height: 18px;
  border: 2px solid var(--rim);
  border-top-color: var(--cyan);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.sl-err-banner {
  background: rgba(255,56,96,0.06);
  border: 1px solid rgba(255,56,96,0.25);
  border-radius: var(--rad);
  padding: 10px 14px;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--red);
  margin-bottom: 1rem;
}

.sl-empty {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  text-align: center;
  padding: 1.5rem;
  letter-spacing: 0.08em;
}

/* ── Modal Overlay ── */
.sl-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
}
.sl-overlay.open {
  opacity: 1;
  pointer-events: all;
}

/* ── Modal ── */
.sl-modal {
  background: var(--surface);
  border: 1px solid var(--rim2);
  border-radius: var(--rad-lg);
  width: min(480px, 94vw);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,212,255,0.06);
  transform: translateY(20px) scale(0.97);
  transition: transform 0.3s cubic-bezier(.34,1.2,.64,1);
}
.sl-overlay.open .sl-modal {
  transform: translateY(0) scale(1);
}

.sl-m-head {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--rim);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--panel);
}

.sl-m-title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sl-m-icon {
  width: 32px; height: 32px;
  background: rgba(255,56,96,0.1);
  border: 1px solid rgba(255,56,96,0.25);
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}
.sl-m-title {
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
}
.sl-m-subtitle {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text3);
  margin-top: 2px;
}

.sl-m-head-right {
  display: flex;
  align-items: center;
  gap: 9px;
}
.sl-m-pcbadge {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--c-cyan);
  color: var(--cyan);
  padding: 5px 12px;
  border-radius: 7px;
  border: 1px solid rgba(0,212,255,0.2);
}
.sl-m-close {
  background: none;
  border: 1px solid var(--rim);
  color: var(--text2);
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 9px;
  border-radius: 7px;
  transition: all var(--transition);
  line-height: 1;
  font-family: var(--mono);
}
.sl-m-close:hover {
  background: var(--card);
  border-color: var(--rim2);
  color: var(--text);
}

.sl-m-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}
.sl-m-body::-webkit-scrollbar { width: 3px; }
.sl-m-body::-webkit-scrollbar-thumb { background: var(--rim2); border-radius: 2px; }

.sl-fg label {
  display: block;
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--text3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 7px;
}

.sl-input, .sl-select, .sl-textarea {
  width: 100%;
  background: var(--panel);
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  padding: 10px 13px;
  color: var(--text);
  font-family: var(--body);
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
}
.sl-input:focus, .sl-select:focus, .sl-textarea:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0,212,255,0.1);
}
.sl-input::placeholder, .sl-textarea::placeholder { color: var(--text3); }
.sl-input.err, .sl-select.err { border-color: var(--red); box-shadow: 0 0 0 2px rgba(255,56,96,0.1); }
.sl-select option { background: var(--panel); }

.sl-chips { display: flex; flex-wrap: wrap; gap: 7px; }
.sl-chip {
  padding: 6px 12px;
  border-radius: 7px;
  border: 1px solid var(--rim);
  background: var(--panel);
  color: var(--text2);
  font-family: var(--mono);
  font-size: 0.65rem;
  cursor: pointer;
  transition: all 0.18s;
  user-select: none;
  font-weight: 500;
}
.sl-chip:hover { border-color: var(--rim2); color: var(--text); }
.sl-chip.on {
  border-color: rgba(255,56,96,0.4);
  background: rgba(255,56,96,0.1);
  color: var(--red);
}

.sl-m-foot {
  padding: 14px 24px 20px;
  border-top: 1px solid var(--rim);
  display: flex;
  gap: 9px;
  justify-content: flex-end;
  align-items: center;
  background: var(--panel);
}
.sl-err-msg {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--red);
  flex: 1;
}

.sl-btn-cancel {
  padding: 9px 18px;
  background: transparent;
  border: 1px solid var(--rim);
  border-radius: var(--rad);
  color: var(--text2);
  font-family: var(--mono);
  font-size: 0.72rem;
  cursor: pointer;
  transition: all var(--transition);
}
.sl-btn-cancel:hover { border-color: var(--rim2); color: var(--text); }

.sl-btn-submit {
  padding: 9px 22px;
  background: linear-gradient(135deg, rgba(255,56,96,0.2), rgba(255,56,96,0.1));
  border: 1px solid rgba(255,56,96,0.4);
  border-radius: var(--rad);
  color: var(--red);
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.04em;
}
.sl-btn-submit:hover:not(:disabled) {
  background: rgba(255,56,96,0.25);
  border-color: var(--red);
  box-shadow: 0 4px 18px rgba(255,56,96,0.25);
  transform: translateY(-1px);
}
.sl-btn-submit:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── Toast ── */
.sl-toast {
  position: fixed;
  bottom: 24px; right: 24px;
  z-index: 300;
  background: rgba(0,10,5,0.95);
  border: 1px solid rgba(0,255,135,0.35);
  border-radius: var(--rad);
  padding: 13px 18px;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--green);
  box-shadow: 0 8px 32px rgba(0,255,135,0.15);
  display: flex;
  align-items: center;
  gap: 9px;
  transform: translateY(80px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(.34,1.2,.64,1);
  pointer-events: none;
}
.sl-toast-check {
  width: 22px; height: 22px;
  background: rgba(0,255,135,0.1);
  border: 1px solid rgba(0,255,135,0.3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px;
}
.sl-toast.show { transform: translateY(0); opacity: 1; }

/* ── Responsive ── */
@media (max-width: 720px) {
  .sl-body { flex-direction: column; }
  .sl-canvas { width: 100%; padding: 16px; }
  .sl-sidebar { width: 100%; border-left: none; border-top: 1px solid var(--rim); }
  .sl-pc { width: 50px; height: 48px; }
  .sl-cluster { gap: 7px; }
}
`;

/* ─── HELPERS ─────────────────────────────────────────────────────────── */
const statusIcon  = s => ({ ok: "🖥️", faulty: "⚠️", minor: "🖥️", offline: "✕" }[s] ?? "🖥️");

/* ─── PC TILE ────────────────────────────────────────────────────────── */
function PCTile({ num, frontendStatus, selected, onClick }) {
  const cls = ["sl-pc", frontendStatus, selected ? "selected" : ""].filter(Boolean).join(" ");
  return (
    <div className={cls} onClick={() => onClick(num)} title={`PC-${String(num).padStart(2,"0")} · ${statusLabel(frontendStatus)}`}>
      <span className="sl-pc-icon">{statusIcon(frontendStatus)}</span>
      <span className="sl-pc-num">{String(num).padStart(2,"0")}</span>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────── */
export default function SmartLabTracker({ onAdmin }) {
  /* ── unchanged API calls ── */
  const { computers, loading, error: mapError, optimisticUpdate } = useLabMap();
  const { issues, loading: issuesLoading, refresh: refreshIssues }  = useIssues();

  /* ── state ── */
  const [selected,  setSelected]  = useState(null);
  const [modal,     setModal]     = useState(false);
  const [toast,     setToast]     = useState(false);
  const [chips,     setChips]     = useState([]);
  const [fname,     setFname]     = useState("");
  const [froll,     setFroll]     = useState("");
  const [fsev,      setFsev]      = useState("");
  const [fdesc,     setFdesc]     = useState("");
  const [formErr,   setFormErr]   = useState("");

  /* ── Feature 1: QR URL routing ── */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pcParam = params.get("pc");
    if (pcParam) {
      const num = parseInt(pcParam, 10);
      if (!isNaN(num) && num >= 1 && num <= 29) {
        setSelected(num);
        setModal(true);
      }
    }
  }, []);

  /* ── unchanged submit logic ── */
  const { submit, submitting, error: submitError } = useReportIssue(() => {
    const newStatus = (fsev === "HIGH" || fsev === "CRITICAL") ? "faulty" : "minor";
    optimisticUpdate(selected, newStatus);
    refreshIssues();
    closeModal();
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  });

  /* ── derived ── */
  const pcList = Object.values(computers);
  const stats = {
    ok:      pcList.filter(p => p.frontendStatus === "ok").length,
    minor:   pcList.filter(p => p.frontendStatus === "minor").length,
    faulty:  pcList.filter(p => p.frontendStatus === "faulty").length,
    offline: pcList.filter(p => p.frontendStatus === "offline").length,
  };
  const total       = pcList.length || 29;
  const healthPct   = Math.round((stats.ok / total) * 100);
  const openCount   = issues.filter(i => i.frontendStatus === "open").length;
  const selectedPC  = selected ? computers[selected] : null;
  const selectedId  = selected ? `PC-${String(selected).padStart(2,"0")}` : "";

  /* ── unchanged handlers ── */
  const selectPC = useCallback((num) => {
    if (computers[num]?.frontendStatus === "offline") return;
    setSelected(num);
  }, [computers]);

  const closeModal = () => {
    setModal(false); setChips([]); setFname(""); setFroll("");
    setFsev(""); setFdesc(""); setFormErr("");
  };

  const handleSubmit = async () => {
    if (!fname.trim()) { setFormErr("Name is required"); return; }
    if (!froll.trim()) { setFormErr("Roll number is required"); return; }
    if (!chips.length) { setFormErr("Select at least one issue type"); return; }
    if (!fsev)         { setFormErr("Select severity"); return; }
    setFormErr("");
    await submit({
      computerId:  selectedPC.id,
      studentName: fname.trim(),
      rollNumber:  froll.trim(),
      issueType:   chips[0].replace(/[^\w\s]/g, "").trim(),
      severity:    fsev,
      description: fdesc.trim(),
    });
  };

  /* ── render ── */
  return (
    <>
      <style>{css}</style>
      <div className="sl-root">

        {/* NAV */}
        <nav className="sl-nav">
          <div className="sl-logo">
            <div className="sl-logo-icon">💻</div>
            <div className="sl-logo-text">Smart<span>Lab</span></div>
          </div>
          <div className="sl-spacer" />
          <div className="sl-nav-pills">
            {openCount > 0 && (
              <div className="sl-pill">
                <div className="sl-pill-dot" />
                <b>{openCount}</b> open
              </div>
            )}
            <div className="sl-pill" style={{ color: "var(--green)" }}>
              ↑ {healthPct}% healthy
            </div>
            {onAdmin && (
              <button className="sl-admin-btn" onClick={onAdmin}>Admin →</button>
            )}
          </div>
        </nav>

        {/* STRIP */}
        <div className="sl-strip">
          <div className="sl-strip-live">
            <div className="sl-strip-live-dot" />
            LIVE
          </div>
          <strong>Lab 3 — Block B</strong>
          <span className="sl-strip-sep">·</span>
          <span className="sl-strip-tag">🏫 Computer Science</span>
          <span className="sl-strip-sep">·</span>
          <span className="sl-strip-tag">🖥️ 29 Systems</span>
          <span className="sl-strip-sep">·</span>
          <span className="sl-strip-tag">🕐 08:00 – 14:30</span>
          <span className="sl-strip-sep">·</span>
          <span className="sl-strip-tag">CS-3A</span>
        </div>

        {/* BODY */}
        <div className="sl-body">

          {/* ── LAB MAP ── */}
          <div className="sl-canvas">
            <div className="sl-map-header">
              <div className="sl-map-title">Lab Floor Map — Click a system to report</div>
            </div>

            {mapError && <div className="sl-err-banner">⚠ {mapError}</div>}

            {/* Projector */}
            <div className="sl-proj-wrap">
              <div className="sl-proj">
                <div className="sl-proj-glow" />
                <span className="sl-proj-icon">📽️</span>
                <span className="sl-proj-lbl">Projector / Board</span>
              </div>
              <div className="sl-proj-base" />
              <div className="sl-proj-sub">All Eyes This Way</div>
            </div>

            {/* PC Grid */}
            {loading ? (
              <div className="sl-loading">
                <div className="sl-loading-spin" />
                Loading lab map…
              </div>
            ) : (
              <div className="sl-grid">
                {LAB_ROWS.map((row, ri) => (
                  <div className="sl-row" key={ri}>
                    <div className="sl-cluster sl-cluster-left">
                      {row.left.map(n => (
                        <PCTile
                          key={n} num={n}
                          frontendStatus={computers[n]?.frontendStatus ?? "ok"}
                          selected={selected === n}
                          onClick={selectPC}
                        />
                      ))}
                    </div>
                    <div className="sl-aisle">
                      <div className="sl-aisle-inner">
                        <div className="sl-aisle-line" />
                      </div>
                    </div>
                    <div className="sl-cluster sl-cluster-right">
                      {row.right.map(n => (
                        <PCTile
                          key={n} num={n}
                          frontendStatus={computers[n]?.frontendStatus ?? "ok"}
                          selected={selected === n}
                          onClick={selectPC}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Legend */}
            <div className="sl-legend">
              {["ok","minor","faulty","offline"].map(s => (
                <div className="sl-legend-item" key={s}>
                  <div className={`sl-legend-dot ${s}`} />
                  {statusLabel(s)}
                </div>
              ))}
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="sl-sidebar">

            {/* Stats */}
            <div className="sl-sb-section">
              <div className="sl-sec-title">System Stats</div>
              <div className="sl-stat-grid">
                <div className="sl-stat ok">
                  <div className="sl-stat-num">{stats.ok}</div>
                  <div className="sl-stat-lbl">Operational</div>
                </div>
                <div className="sl-stat minor">
                  <div className="sl-stat-num">{stats.minor}</div>
                  <div className="sl-stat-lbl">Degraded</div>
                </div>
                <div className="sl-stat fault">
                  <div className="sl-stat-num">{stats.faulty}</div>
                  <div className="sl-stat-lbl">Critical</div>
                </div>
                <div className="sl-stat off">
                  <div className="sl-stat-num">{stats.offline}</div>
                  <div className="sl-stat-lbl">Offline</div>
                </div>
              </div>
              {/* Health bar */}
              <div className="sl-health-bar-wrap">
                <div className="sl-health-bar-label">
                  <span>Lab Health</span>
                  <span style={{ color: "var(--green)" }}>{healthPct}%</span>
                </div>
                <div className="sl-health-bar-track">
                  <div className="sl-health-segment" style={{ width: `${(stats.ok/total)*100}%`, background: "var(--green)" }} />
                  <div className="sl-health-segment" style={{ width: `${(stats.minor/total)*100}%`, background: "var(--amber)" }} />
                  <div className="sl-health-segment" style={{ width: `${(stats.faulty/total)*100}%`, background: "var(--red)" }} />
                </div>
              </div>
            </div>

            {/* Selected PC */}
            <div className="sl-sb-section">
              <div className="sl-sec-title">Selected System</div>
              <div className={`sl-sel-box ${selected ? "active" : ""}`}>
                {!selected ? (
                  <div className="sl-sel-placeholder">
                    <span className="sl-sel-arrow">←</span>
                    Click a system on the map
                  </div>
                ) : (
                  <>
                    <div className="sl-sel-header">
                      <div className="sl-sel-name">{selectedId}</div>
                      <div className={`sl-badge ${selectedPC?.frontendStatus}`}>
                        <div className="sl-badge-dot" />
                        {statusLabel(selectedPC?.frontendStatus)}
                      </div>
                    </div>
                    <div className="sl-sel-spec">
                      Row {Math.ceil(selected / 8)} · Seat {selected}<br />
                      Lab 3 — Block B
                    </div>
                    <button className="sl-report-btn" onClick={() => setModal(true)}>
                      ⚠ Report Issue for {selectedId}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Recent Issues */}
            <div className="sl-sb-section" style={{ flex: 1, borderBottom: "none" }}>
              <div className="sl-sec-title">Recent Issues</div>
              <div className="sl-issues">
                {issuesLoading ? (
                  <div className="sl-empty">Loading…</div>
                ) : issues.length === 0 ? (
                  <div className="sl-empty">No issues reported</div>
                ) : (
                  issues.slice(0, 8).map((iss, i) => (
                    <div
                      className={`sl-issue ${iss.frontendStatus}`}
                      key={iss.id ?? i}
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <div className="sl-issue-top">
                        <span className="sl-issue-id">{iss.pcLabel}</span>
                        <span className="sl-issue-time">{iss.reportedAt?.slice(11,16)}</span>
                      </div>
                      <div className="sl-issue-desc">{iss.issueType}</div>
                      <span className={`sl-tag ${iss.frontendStatus}`}>
                        {iss.frontendStatus === "open" ? "Open" : iss.frontendStatus === "prog" ? "In Progress" : "Fixed"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>{/* /sidebar */}
        </div>{/* /body */}

        {/* ── STUDENT TRACKER (Feature 6) ── */}
        <div style={{ padding: "0 24px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <StudentTracker />
        </div>

        {/* ── MODAL ── */}
        <div className={`sl-overlay ${modal ? "open" : ""}`} onClick={e => e.target === e.currentTarget && closeModal()}>
          <div className="sl-modal">
            <div className="sl-m-head">
              <div className="sl-m-title-wrap">
                <div className="sl-m-icon">⚠</div>
                <div>
                  <div className="sl-m-title">Report Issue</div>
                  <div className="sl-m-subtitle">Notify the lab administrator</div>
                </div>
              </div>
              <div className="sl-m-head-right">
                <span className="sl-m-pcbadge">{selectedId}</span>
                <button className="sl-m-close" onClick={closeModal}>✕</button>
              </div>
            </div>

            <div className="sl-m-body">
              <div className="sl-fg">
                <label>Your Name</label>
                <input
                  className={`sl-input ${formErr && !fname ? "err" : ""}`}
                  placeholder="e.g. Ravi Kumar"
                  value={fname}
                  onChange={e => { setFname(e.target.value); setFormErr(""); }}
                />
              </div>
              <div className="sl-fg">
                <label>Roll Number</label>
                <input
                  className={`sl-input ${formErr && !froll ? "err" : ""}`}
                  placeholder="e.g. 22CS047"
                  value={froll}
                  onChange={e => { setFroll(e.target.value); setFormErr(""); }}
                />
              </div>
              <div className="sl-fg">
                <label>Issue Type — select all that apply</label>
                <div className="sl-chips">
                  {ISSUE_CHIPS.map(c => (
                    <div
                      key={c}
                      className={`sl-chip ${chips.includes(c) ? "on" : ""}`}
                      onClick={() => setChips(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c])}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sl-fg">
                <label>Severity</label>
                <select
                  className={`sl-select ${formErr && !fsev ? "err" : ""}`}
                  value={fsev}
                  onChange={e => { setFsev(e.target.value); setFormErr(""); }}
                >
                  <option value="">Select severity…</option>
                  <option value="MINOR">Minor — small inconvenience</option>
                  <option value="MEDIUM">Medium — affects work</option>
                  <option value="HIGH">High — cannot use system</option>
                  <option value="CRITICAL">Critical — safety concern</option>
                </select>
              </div>
              <div className="sl-fg">
                <label>Additional Details (optional)</label>
                <textarea
                  className="sl-textarea"
                  rows={2}
                  placeholder="Any extra info for the admin…"
                  value={fdesc}
                  onChange={e => setFdesc(e.target.value)}
                />
              </div>
            </div>

            <div className="sl-m-foot">
              {(formErr || submitError) && <span className="sl-err-msg">{formErr || submitError}</span>}
              <button className="sl-btn-cancel" onClick={closeModal}>Cancel</button>
              <button className="sl-btn-submit" disabled={submitting} onClick={handleSubmit}>
                {submitting ? "Submitting…" : "Submit Report →"}
              </button>
            </div>
          </div>
        </div>

        {/* TOAST */}
        <div className={`sl-toast ${toast ? "show" : ""}`}>
          <div className="sl-toast-check">✓</div>
          Reported — admin notified!
        </div>

      </div>
    </>
  );
}
