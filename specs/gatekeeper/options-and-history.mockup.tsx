import React from "react";
import { defineScreen } from "@mokly/mokly";

// Logo Waskita Official SVG Component (viewBox="0 0 160 34")
const WaskitaLogo: React.FC<{ width?: number | string; height?: number | string }> = ({
  width = 130,
  height = 28,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 160 34"
    fill="none"
    style={{ display: "block" }}
  >
    <g id="logotype">
      <path
        d="M 112.97 0 C 110.65 0 108.68 1.71 108.36 4 C 108.03 6.29 109.52 8 111.84 8 C 114.16 8 116.13 6.29 116.45 4 C 116.78 1.71 115.29 0 112.97 0 z M 0 3.21 L 5.17 4.03 L 4.2 30.47 L 10.85 30.47 L 17.55 13.8 L 19.65 30.47 L 26.3 30.47 L 36.1 3.21 L 29.65 3.21 L 23 22.1 L 20.9 5.4 L 15.8 5.4 L 9.95 22.1 L 11.55 3.21 L 0 3.21 z M 85.8 3.21 L 82.86 24.13 L 89.21 23.97 L 89.51 21.88 L 90.4 21.1 L 92.28 23.89 L 98.95 23.72 L 95.4 18.8 L 105 9.88 L 97.2 9.88 L 90.31 16.18 L 92.13 3.21 L 85.8 3.21 z M 122.86 4.8 L 122.14 9.89 L 116.79 9.89 C 120.32 10.4 121.93 10.65 121.75 12.69 L 120.64 20.55 C 119.66 27.51 121.2 31.01 126.4 31.01 C 127.8 31.01 129.3 30.9 130.8 30.65 L 131.6 24.8 L 130.2 24.8 C 127.5 24.8 126.58 23.3 126.97 20.55 L 127.77 14.85 L 132.3 14.85 L 133 9.88 L 128.47 9.88 L 129.18 4.8 L 122.86 4.8 z M 54.2 9.33 C 59.1 9.36 67.8 10.01 66.55 11.07 C 64.8 12.5 63.8 14.2 63.4 16.42 C 62.7 21.38 67.32 22.09 70.13 22.51 L 70.51 22.57 C 72.22 22.82 73.52 23.02 73.34 24.3 C 73.22 25.18 72.49 25.84 70.55 25.84 C 69.28 25.84 68.55 25.55 68.3 24.96 L 68.3 25.17 L 61.93 25.17 L 56.94 25.17 L 46.73 25.17 C 46.69 25.17 46.64 25.18 46.6 25.18 C 46.55 25.18 46.51 25.17 46.47 25.17 L 37.65 25.17 L 44.73 24.83 C 43.05 24.13 42.18 22.41 42.49 20.18 C 42.91 17.22 45.14 15.17 48.01 15.17 C 50.87 15.17 52.53 17.22 52.11 20.18 C 51.82 22.21 50.68 23.82 49.05 24.62 L 57.08 24.23 L 59.09 9.88 L 52.76 9.88 L 52.45 12.1 C 51.85 10.3 50.14 9.34 47.65 9.34 C 41.6 9.34 36.96 13.92 36.08 20.18 C 35.2 26.43 38.6 31.01 44.68 31.01 C 47.17 31.01 49.14 30.05 50.19 28.22 L 49.87 30.47 L 56.2 30.47 L 56.81 26.15 L 62.13 26.15 C 62.99 29.25 65.79 31.01 69.91 31.01 C 75 31.01 78.81 28.45 79.69 24.54 C 80.61 24.7 81.6 24.94 82.71 25.21 L 81.97 30.47 L 88.3 30.47 L 89.01 25.4 L 93.29 25.4 L 96.7 30.47 L 103.8 30.47 L 100.15 25.4 L 106.23 25.4 L 105.51 30.47 L 111.84 30.47 L 112.69 24.45 L 106.36 24.45 L 99.47 24.45 L 92.65 24.45 L 89.15 24.45 L 82.82 24.45 L 82 24.45 L 79.71 24.45 C 79.75 24.28 79.78 24.1 79.8 23.93 C 80.49 19.05 76 18.26 73.07 17.84 L 72.81 17.8 C 71.04 17.53 69.68 17.32 69.85 16.13 C 69.97 15.3 70.71 14.51 72.27 14.51 C 73.54 14.51 74.31 15.05 74.34 16.01 L 80.5 16.01 C 80.89 12.3 78.1 9.34 72.92 9.34 L 54.2 9.33 z M 145.15 9.34 C 139.1 9.34 134.46 13.92 133.58 20.18 C 133.05 23.94 134.08 27.1 136.3 29.02 C 135.22 29.77 133.47 30.24 131.2 30.47 L 138.84 30.47 C 139.83 30.82 140.95 31.01 142.18 31.01 C 144.67 31.01 146.64 30.05 147.69 28.22 L 147.37 30.47 L 153.7 30.47 L 156.59 9.88 L 150.26 9.88 L 149.95 12.1 C 149.35 10.3 147.64 9.34 145.15 9.34 z M 108.41 9.88 L 106.49 23.53 L 112.84 23.37 L 114.74 9.88 L 108.41 9.88 z M 145.51 15.17 C 148.37 15.17 150.03 17.22 149.61 20.18 C 149.19 23.14 146.97 25.18 144.1 25.18 C 141.23 25.18 139.58 23.14 139.99 20.18 C 140.41 17.22 142.64 15.17 145.51 15.17 z "
        fill="#10B981"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

// Lucide Icon SVG Components
const IconMenu: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16M4 12h16M4 18h12" />
  </svg>
);

const IconPlus: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const IconArrowRight: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconMoreVertical: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

const IconSearch: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const IconX: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const IconSquarePen: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
  </svg>
);

const IconInfo: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const IconSettings: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconFileUp: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M12 12v6" />
    <path d="m15 15-3-3-3 3" />
  </svg>
);

const IconSliders: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="21" x2="14" y1="4" y2="4" />
    <line x1="10" x2="3" y1="4" y2="4" />
    <line x1="21" x2="12" y1="12" y2="12" />
    <line x1="8" x2="3" y1="12" y2="12" />
    <line x1="21" x2="16" y1="20" y2="20" />
    <line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" />
    <line x1="8" x2="8" y1="10" y2="14" />
    <line x1="16" x2="16" y1="18" y2="22" />
  </svg>
);

const IconShare2: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

const IconPin: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="17" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
  </svg>
);

const IconPencil: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

const IconTrash2: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

// Interactive Client Script for Options & History Screen
const interactiveOptionsScript = `
  (function() {
    function initWaskitaOptions() {
      // Sliders Live Update View A
      const vsmA = document.getElementById("wsk-va-slider-vsm");
      const vsmValA = document.getElementById("wsk-va-val-vsm");
      if (vsmA && vsmValA) {
        vsmA.addEventListener("input", function(e) {
          vsmValA.textContent = parseFloat(e.target.value).toFixed(2);
        });
      }

      const mattrA = document.getElementById("wsk-va-slider-mattr");
      const mattrValA = document.getElementById("wsk-va-val-mattr");
      if (mattrA && mattrValA) {
        mattrA.addEventListener("input", function(e) {
          mattrValA.textContent = parseFloat(e.target.value).toFixed(2);
        });
      }

      const hkoA = document.getElementById("wsk-va-slider-hko");
      const hkoValA = document.getElementById("wsk-va-val-hko");
      if (hkoA && hkoValA) {
        hkoA.addEventListener("input", function(e) {
          hkoValA.textContent = e.target.value + "%";
        });
      }

      const cdsA = document.getElementById("wsk-va-slider-cds");
      const cdsValA = document.getElementById("wsk-va-val-cds");
      if (cdsA && cdsValA) {
        cdsA.addEventListener("input", function(e) {
          cdsValA.textContent = e.target.value + "%";
        });
      }

      // Sheet expand toggle
      const handleA = document.getElementById("wsk-va-sheet-handle");
      const sheetA = document.getElementById("wsk-va-sheet");
      let expandedA = false;
      if (handleA && sheetA) {
        handleA.addEventListener("click", function() {
          if (!expandedA) {
            sheetA.style.height = "88%";
            expandedA = true;
          } else {
            sheetA.style.height = "50%";
            expandedA = false;
          }
        });
      }

      // Sidebar Popover toggle
      window.toggleHistPopover = function(id) {
        const el = document.getElementById(id);
        if (el) {
          const isShow = el.style.display === "block";
          document.querySelectorAll(".wsk-hist-popover").forEach(p => p.style.display = "none");
          el.style.display = isShow ? "none" : "block";
        }
      };
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initWaskitaOptions);
    } else {
      initWaskitaOptions();
    }
  })();
`;

export default defineScreen({
  title: "2. Opsi Masukan, Ambang Batas & Riwayat Sesi (Waskita V2.1)",
  description:
    "Spesifikasi Waskita V2.1: View A (Bottom Sheet 50% hingga 88% dengan 4 Range Sliders) dan View B (Fullscreen Sidebar ala Gemini dengan riwayat sesi bersih, ellipsis judul + spasi 7px + SVG Popover).",
  desktop: (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "#E2E8F0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        boxSizing: "border-box",
        color: "#1E293B",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "36px",
          maxWidth: "1140px",
          width: "100%",
        }}
      >
        {/* Device Frame 1: View A - Bottom Sheet Modal Opsi Masukan & Ambang Batas */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#1E293B",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            View A: Bottom Sheet Modal (50% hingga 88%)
          </div>

          <div
            style={{
              width: "390px",
              height: "844px",
              background: "#F7F4EB",
              borderRadius: "44px",
              border: "8px solid #1E293B",
              boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.25)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Top Notch */}
            <div
              style={{
                height: "28px",
                background: "#F7F4EB",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "18px",
                  background: "#1E293B",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* Backdrop Dimming Effect (Low Opacity Dark Dim) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(15, 23, 42, 0.32)",
                backdropFilter: "blur(2px)",
                zIndex: 10,
              }}
            />

            {/* Bottom Sheet Container (Initial 50%, expandable to 88%) */}
            <div
              id="wsk-va-sheet"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "#F7F4EB",
                borderRadius: "28px 28px 0 0",
                boxShadow: "0 -10px 40px rgba(15, 23, 42, 0.18)",
                zIndex: 20,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "height 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Drag Handle Pill */}
              <div
                id="wsk-va-sheet-handle"
                style={{
                  padding: "10px 0 6px 0",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "grab",
                  flexShrink: 0,
                }}
                title="Klik untuk ekspansi ke 88% / ciutkan ke 50%"
              >
                <div
                  style={{
                    width: "48px",
                    height: "5px",
                    background: "#C0D5E5",
                    borderRadius: "9999px",
                  }}
                />
              </div>

              {/* Sheet Header */}
              <div
                style={{
                  padding: "6px 20px 12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
                  flexShrink: 0,
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1E293B",
                    }}
                  >
                    Opsi Audit &amp; Masukan
                  </h3>
                  <p style={{ margin: "2px 0 0 0", fontSize: "11px", color: "rgba(30, 41, 59, 0.65)" }}>
                    Atur berkas draf, kueri SERP, dan ambang batas
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#E9DFCA",
                    border: "none",
                    color: "#1E293B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <IconX size={16} color="#1E293B" />
                </button>
              </div>

              {/* Scrollable Sheet Content (File, Kueri, 4 Sliders) */}
              <div
                style={{
                  padding: "16px 20px 28px 20px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  flex: 1,
                }}
              >
                {/* Bagian 1: File Dokumen */}
                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(30, 41, 59, 0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "10px",
                    }}
                  >
                    <IconFileUp size={18} color="#1E293B" />
                    <strong style={{ fontSize: "13px", color: "#1E293B" }}>
                      File Dokumen
                    </strong>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: "11px",
                        color: "#1E293B",
                        background: "#C0CEE8",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                        fontWeight: "600",
                      }}
                    >
                      Maks. 2MB
                    </span>
                  </div>
                  <div
                    style={{
                      border: "2px dashed #C0D5E5",
                      borderRadius: "12px",
                      padding: "16px",
                      textAlign: "center",
                      background: "#F7F4EB",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "12px", fontWeight: "600", color: "#1E293B" }}>
                      Pilih berkas .md, .txt, atau .docx
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(30, 41, 59, 0.65)", marginTop: "2px" }}>
                      Teks naskah akan diekstrak otomatis ke kapsul input
                    </div>
                  </div>
                </div>

                {/* Bagian 2: Kueri Target */}
                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(30, 41, 59, 0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "10px",
                    }}
                  >
                    <IconSearch size={18} color="#1E293B" />
                    <strong style={{ fontSize: "13px", color: "#1E293B" }}>
                      Kueri Target Pencarian SERP
                    </strong>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="text"
                      defaultValue="resep kopi tubruk tradisional"
                      placeholder="Masukkan frasa kueri artikel..."
                      style={{
                        flex: 1,
                        padding: "9px 12px",
                        border: "1px solid #C0D5E5",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#1E293B",
                        outline: "none",
                        background: "#F7F4EB",
                      }}
                    />
                    <button
                      type="button"
                      style={{
                        background: "#C0CEE8",
                        color: "#1E293B",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0 14px",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      Simpan
                    </button>
                  </div>
                </div>

                {/* Bagian 3: Ambang Batas 4 Sliders */}
                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(30, 41, 59, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <IconSliders size={18} color="#1E293B" />
                      <strong style={{ fontSize: "13px", color: "#1E293B" }}>
                        Ambang Batas Audit
                      </strong>
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        background: "#C0CEE8",
                        color: "#1E293B",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                        fontWeight: "700",
                      }}
                    >
                      Baku
                    </span>
                  </div>

                  {/* Slider 1: VSM */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                      <span style={{ fontWeight: "600" }}>VSM Cosine Similarity</span>
                      <span id="wsk-va-val-vsm" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        0.60
                      </span>
                    </div>
                    <input
                      id="wsk-va-slider-vsm"
                      type="range"
                      min="0.10"
                      max="1.00"
                      step="0.05"
                      defaultValue="0.60"
                      style={{ accentColor: "#C0CEE8", width: "100%", cursor: "pointer" }}
                    />
                  </div>

                  {/* Slider 2: MATTR */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                      <span style={{ fontWeight: "600" }}>MATTR (Kekayaan Leksikal)</span>
                      <span id="wsk-va-val-mattr" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        0.55
                      </span>
                    </div>
                    <input
                      id="wsk-va-slider-mattr"
                      type="range"
                      min="0.10"
                      max="1.00"
                      step="0.05"
                      defaultValue="0.55"
                      style={{ accentColor: "#C0CEE8", width: "100%", cursor: "pointer" }}
                    />
                  </div>

                  {/* Slider 3: HKO */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                      <span style={{ fontWeight: "600" }}>HKO Overlap (Sub-judul)</span>
                      <span id="wsk-va-val-hko" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        40%
                      </span>
                    </div>
                    <input
                      id="wsk-va-slider-hko"
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      defaultValue="40"
                      style={{ accentColor: "#C0CEE8", width: "100%", cursor: "pointer" }}
                    />
                  </div>

                  {/* Slider 4: CDS */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                      <span style={{ fontWeight: "600" }}>Skor Lolos Standar (CDS)</span>
                      <span id="wsk-va-val-cds" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        75%
                      </span>
                    </div>
                    <input
                      id="wsk-va-slider-cds"
                      type="range"
                      min="50"
                      max="100"
                      step="5"
                      defaultValue="75"
                      style={{ accentColor: "#C0CEE8", width: "100%", cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Frame 2: View B - Fullscreen Sidebar Ala Gemini (Sudah Login) */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#1E293B",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            View B: Fullscreen Sidebar Ala Gemini (100% Layar)
          </div>

          <div
            style={{
              width: "390px",
              height: "844px",
              background: "#F7F4EB",
              borderRadius: "44px",
              border: "8px solid #1E293B",
              boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.25)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Top Notch */}
            <div
              style={{
                height: "28px",
                background: "#F7F4EB",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "18px",
                  background: "#1E293B",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* Sidebar Fullscreen Container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Sticky Header with Fade Bottom */}
              <div
                style={{
                  height: "56px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "linear-gradient(180deg, #F7F4EB 65%, rgba(247,244,235,0) 100%)",
                  flexShrink: 0,
                  zIndex: 10,
                }}
              >
                <WaskitaLogo width={120} height={26} />
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <button
                    type="button"
                    aria-label="Cari Riwayat"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px",
                      color: "#1E293B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconSearch size={18} color="#1E293B" />
                  </button>
                  <button
                    type="button"
                    aria-label="Tutup Sidebar"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px",
                      color: "#1E293B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconX size={20} color="#1E293B" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body Riwayat (Gemini Style) */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "10px 16px 20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Analisis Baru Button */}
                <button
                  type="button"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#E9DFCA",
                    border: "none",
                    borderRadius: "14px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1E293B",
                    cursor: "pointer",
                    marginBottom: "12px",
                  }}
                >
                  <IconSquarePen size={18} color="#1E293B" />
                  <span>Analisis Baru</span>
                </button>

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "rgba(30, 41, 59, 0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "4px 8px",
                  }}
                >
                  Riwayat Analisis
                </div>

                {/* History Items (No boxes, no percentages, ellipsis + 7px + MoreVertical) */}
                {[
                  { id: "vb-h1", title: "Resep Kopi Tubruk Tradisional Enak dan Gurih" },
                  { id: "vb-h2", title: "Panduan Seduh Kopi Tubruk Nusantara" },
                  { id: "vb-h3", title: "Manfaat Kopi Hitam Tanpa Gula untuk Kesehatan" },
                  { id: "vb-h4", title: "Sejarah Budaya Ngopi di Warung Tradisional" },
                  { id: "vb-h5", title: "Perbedaan Arabika dan Robusta dalam Cita Rasa" },
                  { id: "vb-h6", title: "Teknik Roasting Biji Kopi Level Medium" },
                ].map((item) => (
                  <div
                    key={item.id}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#C0D5E5")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span
                      style={{
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "13px",
                        color: "#1E293B",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </span>

                    {/* 7px Space */}
                    <div style={{ width: "7px", flexShrink: 0 }} />

                    <button
                      type="button"
                      aria-label="Menu Opsi Riwayat"
                      onClick={(e) => {
                        e.stopPropagation();
                        // @ts-ignore
                        if (typeof window !== "undefined" && window.toggleHistPopover) {
                          // @ts-ignore
                          window.toggleHistPopover(`popover-${item.id}`);
                        }
                      }}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        color: "#1E293B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "4px",
                        flexShrink: 0,
                      }}
                    >
                      <IconMoreVertical size={16} color="#1E293B" />
                    </button>

                    {/* Popover Menu Titik Tiga (SVG Share2, Pin, Pencil, Trash2) */}
                    <div
                      id={`popover-${item.id}`}
                      className="wsk-hist-popover"
                      style={{
                        display: "none",
                        position: "absolute",
                        right: "12px",
                        top: "38px",
                        background: "#C0D5E5",
                        borderRadius: "12px",
                        padding: "6px",
                        boxShadow: "0 10px 25px rgba(30, 41, 59, 0.2)",
                        zIndex: 50,
                        width: "140px",
                        border: "1px solid rgba(30, 41, 59, 0.12)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 8px",
                          fontSize: "12px",
                          color: "#1E293B",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        <IconShare2 size={14} color="#1E293B" />
                        <span>Share Analisis</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 8px",
                          fontSize: "12px",
                          color: "#1E293B",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        <IconPin size={14} color="#1E293B" />
                        <span>Pin</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 8px",
                          fontSize: "12px",
                          color: "#1E293B",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        <IconPencil size={14} color="#1E293B" />
                        <span>Rename</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 8px",
                          fontSize: "12px",
                          color: "#991B1B",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        <IconTrash2 size={14} color="#991B1B" />
                        <span>Delete</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fixed Footer Authenticated */}
              <div
                style={{
                  height: "64px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#F7F4EB",
                  borderTop: "1px solid rgba(30, 41, 59, 0.08)",
                  flexShrink: 0,
                }}
              >
                {/* User Profile */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "#C0CEE8",
                      color: "#1E293B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "13px",
                      flexShrink: 0,
                    }}
                  >
                    AS
                  </div>
                  <div style={{ minWidth: 0, maxWidth: "160px" }}>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#1E293B",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Ahmad Saif Almuflihin
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "10px",
                        fontWeight: "700",
                        background: "#C0CEE8",
                        color: "#1E293B",
                        padding: "1px 6px",
                        borderRadius: "4px",
                        marginTop: "2px",
                      }}
                    >
                      Pro
                    </span>
                  </div>
                </div>

                {/* Settings Icon */}
                <button
                  type="button"
                  aria-label="Pengaturan"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px",
                    color: "#1E293B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconSettings size={20} color="#1E293B" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Side Panel Documentation */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid #CBD5E1",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#E9DFCA",
                color: "#1E293B",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px",
              }}
            >
              Waskita V2.1: Spesifikasi Komponen
            </div>
            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "20px",
                fontWeight: "800",
                color: "#1E293B",
              }}
            >
              2. Opsi Masukan &amp; Fullscreen Sidebar
            </h2>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
              Memvisualisasikan dua overlay utama Waskita V2.1:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                borderTop: "1px solid #F1F5F9",
                paddingTop: "16px",
              }}
            >
              <div>
                <strong style={{ fontSize: "13px", color: "#1E293B" }}>
                  1. View A: Bottom Sheet Modal (50% hingga 88%)
                </strong>
                <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#64748B", lineHeight: "1.5" }}>
                  Tinggi awal 50%, drag handle pill untuk swipe/expand ke 88%, scrollable habis, memuat File Dokumen, Kueri Target, dan 4 Interactive Range Sliders (VSM, MATTR, HKO, CDS).
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "13px", color: "#1E293B" }}>
                  2. View B: Fullscreen Sidebar Ala Gemini (100% Layar)
                </strong>
                <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#64748B", lineHeight: "1.5" }}>
                  Header fixed dengan gradient fade transparan ke bawah, daftar riwayat bersih tanpa border kaku atau persentase, judul ellipsis dengan spasi 7px ke tombol titik tiga SVG yang membuka popover Share, Pin, Rename, dan Delete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: interactiveOptionsScript }} />
    </div>
  ),
  mobile: (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "#F7F4EB",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        color: "#1E293B",
      }}
    >
      {/* Top Header Mobile */}
      <header
        style={{
          height: "56px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
          background: "#F7F4EB",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconSliders size={18} color="#1E293B" />
          <span style={{ fontSize: "15px", fontWeight: "700", color: "#1E293B" }}>
            Opsi Masukan &amp; Ambang Batas
          </span>
        </div>
        <span
          style={{
            fontSize: "11px",
            color: "#1E293B",
            background: "#C0CEE8",
            padding: "3px 8px",
            borderRadius: "999px",
            fontWeight: "600",
          }}
        >
          V2.1
        </span>
      </header>

      {/* Main Content: Opsi & Ambang Batas */}
      <main
        style={{
          flex: 1,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {/* Card 1: File Dokumen */}
        <div
          style={{
            background: "#E9DFCA",
            borderRadius: "14px",
            padding: "16px",
            border: "1px solid rgba(30, 41, 59, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <IconFileUp size={18} color="#1E293B" />
            <strong style={{ fontSize: "14px", color: "#1E293B" }}>
              Unggah File Dokumen (.md, .txt, .docx)
            </strong>
          </div>
          <div
            style={{
              border: "2px dashed #C0D5E5",
              borderRadius: "10px",
              padding: "16px",
              textAlign: "center",
              background: "#F7F4EB",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#1E293B" }}>
              Pilih berkas dokumen draf
            </div>
            <div style={{ fontSize: "11px", color: "rgba(30, 41, 59, 0.65)", marginTop: "2px" }}>
              Maksimal ukuran file 2MB
            </div>
          </div>
        </div>

        {/* Card 2: Kueri Target */}
        <div
          style={{
            background: "#E9DFCA",
            borderRadius: "14px",
            padding: "16px",
            border: "1px solid rgba(30, 41, 59, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <IconSearch size={18} color="#1E293B" />
            <strong style={{ fontSize: "14px", color: "#1E293B" }}>
              Kueri Target Pencarian SERP
            </strong>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              defaultValue="resep kopi tubruk tradisional"
              style={{
                flex: 1,
                padding: "10px 12px",
                border: "1px solid #C0D5E5",
                borderRadius: "8px",
                fontSize: "13px",
                color: "#1E293B",
                background: "#F7F4EB",
              }}
            />
            <button
              type="button"
              style={{
                background: "#C0CEE8",
                color: "#1E293B",
                border: "none",
                borderRadius: "8px",
                padding: "0 14px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Card 3: Ambang Batas 4 Sliders */}
        <div
          style={{
            background: "#E9DFCA",
            borderRadius: "14px",
            padding: "16px",
            border: "1px solid rgba(30, 41, 59, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconSliders size={18} color="#1E293B" />
              <strong style={{ fontSize: "14px", color: "#1E293B" }}>
                Ambang Batas Kelayakan
              </strong>
            </div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#1E293B",
                background: "#C0CEE8",
                padding: "2px 8px",
                borderRadius: "999px",
              }}
            >
              Baku
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid rgba(30, 41, 59, 0.08)" }}>
              <span>VSM Cosine Similarity</span>
              <strong style={{ fontFamily: "monospace", color: "#1E293B" }}>0.60</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid rgba(30, 41, 59, 0.08)" }}>
              <span>MATTR (Kekayaan Leksikal)</span>
              <strong style={{ fontFamily: "monospace", color: "#1E293B" }}>0.55</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid rgba(30, 41, 59, 0.08)" }}>
              <span>HKO Overlap (Sub-judul)</span>
              <strong style={{ fontFamily: "monospace", color: "#1E293B" }}>40%</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Skor Lolos Standar (CDS)</span>
              <strong style={{ fontFamily: "monospace", color: "#1E293B" }}>75%</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
  relatedDocs: [],
});
