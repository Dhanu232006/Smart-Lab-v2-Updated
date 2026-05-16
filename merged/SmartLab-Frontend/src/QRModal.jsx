// ═══════════════════════════════════════════════════════════════
//  QRModal.jsx
//  Feature 1 — QR-Based Issue Reporting
//
//  Admin opens this modal to generate and display a QR code for
//  any PC. The QR encodes a URL like:
//    http://<host>:5173/?pc=12
//
//  When a student scans the QR, SmartLabTracker.jsx reads the
//  `pc` query parameter and auto-selects that PC on the map.
//
//  Implementation:
//  - Uses the free qrcode.react library (npm install qrcode.react)
//  - Falls back to a Google Charts QR URL if the library is absent
//
//  Props:
//    pcNumber   — integer PC number (e.g. 12)
//    pcLabel    — display string e.g. "PC-12"
//    baseUrl    — front-end origin (default: window.location.origin)
//    onClose    — callback
// ═══════════════════════════════════════════════════════════════

import { useState, useEffect } from "react";

/**
 * Generates a QR code image URL via Google Charts API (no extra npm needed).
 * Uses HTTPS endpoint; works offline only if the host has internet.
 * Replace with qrcode.react for fully offline support.
 */
function qrImageUrl(text, size = 240) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&bgcolor=0d1117&color=00d4ff&margin=10`;
}

export default function QRModal({ pcNumber, pcLabel, baseUrl, onClose }) {
  const origin = baseUrl || window.location.origin;
  const qrUrl  = `${origin}/?pc=${pcNumber}`;
  const imgSrc = qrImageUrl(qrUrl, 240);

  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(qrUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed", top: "50%", left: "50%", zIndex: 1000,
        transform: "translate(-50%,-50%)",
        width: "min(380px, 92vw)",
        background: "#0d1117", border: "1px solid #1f2a3f",
        borderRadius: 18, overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,212,255,0.15)",
      }}>

        {/* Header */}
        <div style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid #1f2a3f",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ fontSize: "1.2rem" }}>📱</span>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", color: "#00d4ff", fontWeight: 600, fontSize: "0.9rem" }}>
              QR Code — {pcLabel}
            </div>
            <div style={{ color: "#8896b3", fontSize: "0.7rem", marginTop: 2 }}>
              Students scan to report an issue directly
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              marginLeft: "auto", background: "none", border: "none",
              color: "#8896b3", cursor: "pointer", fontSize: "1.1rem", padding: "4px 8px",
            }}
          >✕</button>
        </div>

        {/* QR image */}
        <div style={{ padding: "28px 0 16px", display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: 12, background: "#111520",
            border: "1px solid #1f2a3f", borderRadius: 14,
          }}>
            <img
              src={imgSrc}
              alt={`QR for ${pcLabel}`}
              width={200}
              height={200}
              style={{ display: "block", borderRadius: 6 }}
            />
          </div>
        </div>

        {/* URL display */}
        <div style={{ padding: "0 20px" }}>
          <div style={{
            background: "#111520", border: "1px solid #1f2a3f",
            borderRadius: 10, padding: "8px 12px",
            fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.7rem",
            color: "#8896b3", wordBreak: "break-all",
          }}>
            {qrUrl}
          </div>
        </div>

        {/* Actions */}
        <div style={{ padding: "14px 20px 22px", display: "flex", gap: 10 }}>
          <button
            onClick={copyLink}
            style={{
              flex: 1, padding: "10px 0", borderRadius: 10, cursor: "pointer",
              background: copied ? "rgba(0,255,135,0.15)" : "rgba(0,212,255,0.12)",
              border: `1px solid ${copied ? "rgba(0,255,135,0.3)" : "rgba(0,212,255,0.25)"}`,
              color: copied ? "#00ff87" : "#00d4ff",
              fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.8rem", fontWeight: 600,
              transition: "all .2s",
            }}
          >
            {copied ? "✓ Copied!" : "📋 Copy Link"}
          </button>
          <a
            href={imgSrc}
            download={`${pcLabel}-qr.png`}
            style={{
              flex: 1, padding: "10px 0", borderRadius: 10, cursor: "pointer",
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.25)",
              color: "#a855f7", textDecoration: "none",
              fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.8rem", fontWeight: 600,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s",
            }}
          >
            ⬇ Download
          </a>
        </div>

        <div style={{ textAlign: "center", paddingBottom: 16, fontSize: "0.68rem", color: "#3e4f6e" }}>
          Print and place on {pcLabel} for quick reporting
        </div>
      </div>
    </>
  );
}
