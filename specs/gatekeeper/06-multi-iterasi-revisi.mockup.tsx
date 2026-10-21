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

// 100% Inline Lucide SVG Icons (Zero Emoji)
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
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="16" y2="18" />
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
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconCopy: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconDownload: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconFileText: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
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
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
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
    <line x1="12" y1="17" x2="12" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17z" />
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
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const IconExternalLink: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = "currentColor" }) => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconAlertCircle: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconCheckCircle2: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconCheck: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Semi-Circle Radial Gauge Component
const SemiCircleGauge: React.FC<{ score: number; threshold: number; color?: string }> = ({
  score,
  threshold,
  color = "#D97706",
}) => {
  const radius = 68;
  const strokeWidth = 10;
  const cx = 90;
  const cy = 80;
  const circumference = Math.PI * radius;
  const progressRatio = Math.max(0, Math.min(100, score)) / 100;
  const strokeDashoffset = circumference * (1 - progressRatio);

  const thresholdAngle = Math.PI * (1 - threshold / 100);
  const dotX = cx + (radius - 1) * Math.cos(thresholdAngle);
  const dotY = cy - (radius - 1) * Math.sin(thresholdAngle);

  return (
    <div style={{ position: "relative", width: 180, height: 96, margin: "0 auto" }}>
      <svg width={180} height={96} viewBox="0 0 180 96">
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke="rgba(30, 41, 59, 0.12)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <circle cx={dotX} cy={dotY} r={3.5} fill="#EF4444" stroke="#FFFFFF" strokeWidth={1.5} />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 2,
          left: 0,
          right: 0,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "28px", fontWeight: 800, color: "#1E293B", lineHeight: 1 }}>
          {score}%
        </span>
        <span style={{ fontSize: "11px", fontWeight: 600, color: "#64748B", marginTop: 2 }}>
          Target Ambang: {threshold}%
        </span>
      </div>
    </div>
  );
};

// Multi-Iteration Revision Flow Component (Analisis 1 vs Analisis 2)
const MultiIterasiRevisiScreen: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#F7F4EB",
        color: "#1E293B",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Pure CSS Toggles for Dropdown Menu */}
      <input type="checkbox" id="toggle-menu-multi" style={{ display: "none" }} />

      <style>{`
        #toggle-menu-multi:checked ~ .menu-backdrop {
          display: block !important;
        }
        #toggle-menu-multi:checked ~ .menu-popover {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
          pointer-events: auto !important;
        }
      `}</style>

      {/* Menu Backdrop */}
      <label
        htmlFor="toggle-menu-multi"
        className="menu-backdrop"
        style={{
          display: "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
        }}
      />

      {/* Header (56px) */}
      <header
        style={{
          height: 56,
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
          background: "#F7F4EB",
          zIndex: 30,
          flexShrink: 0,
        }}
      >
        <button
          aria-label="Menu"
          style={{
            background: "transparent",
            border: "none",
            padding: 8,
            cursor: "pointer",
            color: "#1E293B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <IconMenu size={22} color="#1E293B" />
        </button>

        <div style={{ display: "flex", alignItems: "center" }}>
          <WaskitaLogo width={124} height={26} />
        </div>

        <label
          htmlFor="toggle-menu-multi"
          aria-label="Opsi Lainnya"
          style={{
            padding: 8,
            cursor: "pointer",
            color: "#1E293B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <IconMoreVertical size={20} color="#1E293B" />
        </label>
      </header>

      {/* Dropdown Menu Popover */}
      <div
        className="menu-popover"
        style={{
          position: "absolute",
          top: 54,
          right: 14,
          width: 220,
          background: "#FFFFFF",
          borderRadius: 14,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E9DFCA",
          padding: "6px 0",
          zIndex: 50,
          opacity: 0,
          transform: "translateY(-6px) scale(0.96)",
          pointerEvents: "none",
          transition: "all 0.15s ease-out",
        }}
      >
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#1E293B",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconCopy size={15} color="#64748B" /> Salin Ringkasan Hasil
        </button>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#1E293B",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconDownload size={15} color="#64748B" /> Unduh Laporan (.md)
        </button>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#1E293B",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconFileText size={15} color="#64748B" /> Salin Teks Artikel
        </button>
        <div style={{ height: 1, background: "#E9DFCA", margin: "4px 0" }} />
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#1E293B",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconShare2 size={15} color="#64748B" /> Share Analisis
        </button>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#1E293B",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconPin size={15} color="#64748B" /> Pin Analisis
        </button>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#1E293B",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconPencil size={15} color="#64748B" /> Ganti Judul (Rename)
        </button>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 14px",
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#EF4444",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <IconTrash2 size={15} color="#EF4444" /> Hapus Riwayat
        </button>
      </div>

      {/* Main Scrollable Stream: Iteration 1 -> User Bubble Revision -> Iteration 2 */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 14px 100px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* User Input Bubble 1 */}
        <div
          style={{
            alignSelf: "flex-end",
            maxWidth: "88%",
            background: "#E9DFCA",
            color: "#1E293B",
            borderRadius: "18px 18px 4px 18px",
            padding: "10px 14px",
            fontSize: "13px",
            lineHeight: 1.45,
          }}
        >
          <span style={{ fontWeight: 600 }}>Draf Masukan #1:</span> Resep Kopi Tubruk Tradisional Khas Nusantara
        </div>

        {/* ============================================================== */}
        {/* BLOK HASIL ANALISIS 1 (CDS 70% - Perlu Revisi)                 */}
        {/* SATU BACKGROUND UTUH (ANTI-DOUBLE-BACKGROUND!)                 */}
        {/* ============================================================== */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 24,
            border: "1px solid #E9DFCA",
            padding: "20px 18px",
            boxShadow: "0 4px 12px rgba(30, 41, 59, 0.04)",
          }}
        >
          {/* Label Tag Analisis 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              paddingBottom: 10,
              borderBottom: "1px dashed #E9DFCA",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "#64748B",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Hasil Analisis #1
            </span>
            <span style={{ fontSize: "11px", color: "#94A3B8" }}>10:15 WIB</span>
          </div>

          {/* Seksi 1: Status Kelayakan */}
          <section
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 0,
              padding: "0 0 16px 0",
              borderBottom: "1px solid #E9DFCA",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: "#1E293B" }}>
                  Status Kelayakan
                </h3>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "2px 0 0 0" }}>
                  CDS: 70% (Ambang 75%)
                </p>
              </div>
              <span
                style={{
                  background: "#FEF3C7",
                  color: "#B45309",
                  padding: "4px 12px",
                  borderRadius: 9999,
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Perlu Revisi
              </span>
            </div>

            <div style={{ margin: "10px 0" }}>
              <SemiCircleGauge score={70} threshold={75} color="#D97706" />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                color: "#92400E",
                fontSize: "12px",
                lineHeight: 1.5,
              }}
            >
              <div style={{ flexShrink: 0, marginTop: 1 }}>
                <IconAlertCircle size={15} color="#D97706" />
              </div>
              <div>
                Defisit pada parameter teknis suhu seduh dan rasio air. Disarankan menyalin prompt bantuan untuk revisi.
              </div>
            </div>
          </section>

          {/* Seksi 2: Metrik Stilometri & Celah Topik Ringkas */}
          <section
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 0,
              padding: "16px 0 0 0",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                fontSize: "12px",
                marginBottom: 12,
              }}
            >
              <div>
                <span style={{ color: "#64748B", display: "block" }}>Cosine Similarity</span>
                <strong style={{ color: "#1E293B", fontSize: "13px" }}>0.48 (Maks 0.60)</strong>
              </div>
              <div>
                <span style={{ color: "#64748B", display: "block" }}>MATTR Kosakata</span>
                <strong style={{ color: "#1E293B", fontSize: "13px" }}>0.61 (Min 0.55)</strong>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <span
                style={{
                  background: "#FEE2E2",
                  color: "#991B1B",
                  padding: "3px 8px",
                  borderRadius: 9999,
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                - Takaran Suhu 90°C
              </span>
              <span
                style={{
                  background: "#FEE2E2",
                  color: "#991B1B",
                  padding: "3px 8px",
                  borderRadius: 9999,
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                - Rasio Seduh 1:15
              </span>
              <span
                style={{
                  background: "#D1FAE5",
                  color: "#065F46",
                  padding: "3px 8px",
                  borderRadius: 9999,
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                + Robusta Dampit
              </span>
            </div>
          </section>
        </div>

        {/* ============================================================== */}
        {/* PEMISAH ANTAR-ANALISIS + BUBBLE REVISI PENGGUNA (#E9DFCA)       */}
        {/* ============================================================== */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "4px 0",
          }}
        >
          <div style={{ height: 1, background: "#E9DFCA", flex: 1 }} />
          <span
            style={{
              padding: "0 12px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Iterasi Revisi
          </span>
          <div style={{ height: 1, background: "#E9DFCA", flex: 1 }} />
        </div>

        {/* User Input Bubble 2 (Naskah Hasil Perbaikan) */}
        <div
          style={{
            alignSelf: "flex-end",
            maxWidth: "88%",
            background: "#E9DFCA",
            color: "#1E293B",
            borderRadius: "18px 18px 4px 18px",
            padding: "12px 14px",
            fontSize: "12.5px",
            lineHeight: 1.5,
            border: "1px solid rgba(30, 41, 59, 0.08)",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 4, color: "#1E293B" }}>
            Revisi Draf Baru (Menutup Celah Defisit):
          </div>
          <p style={{ margin: 0 }}>
            "Menyeduh kopi tubruk Robusta Dampit dengan presisi memerlukan air bertemperatur 92°C serta rasio 1:15 (10g bubuk medium untuk 150ml air). Manisnya gula aren cair mengikat ketegasan body tanpa ampas berlebih..."
          </p>
        </div>

        {/* ============================================================== */}
        {/* BLOK HASIL ANALISIS 2 (CDS 85% - Siap Terbit)                  */}
        {/* 1 PERMUKAAN BACKGROUND UTUH BARU TERPISAH DARI ANALISIS 1       */}
        {/* ============================================================== */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 24,
            border: "1px solid #10B981",
            padding: "20px 18px",
            boxShadow: "0 4px 16px rgba(16, 185, 129, 0.08)",
          }}
        >
          {/* Label Tag Analisis 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              paddingBottom: 10,
              borderBottom: "1px dashed #E9DFCA",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "#059669",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Hasil Analisis #2 (Terbaru)
            </span>
            <span style={{ fontSize: "11px", color: "#94A3B8" }}>10:22 WIB</span>
          </div>

          {/* Seksi 1: Status Kelayakan (Lolos Standar) */}
          <section
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 0,
              padding: "0 0 16px 0",
              borderBottom: "1px solid #E9DFCA",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: "#1E293B" }}>
                  Status Kelayakan
                </h3>
                <p style={{ fontSize: "12px", color: "#64748B", margin: "2px 0 0 0" }}>
                  CDS: 85% (Ambang 75%)
                </p>
              </div>
              <span
                style={{
                  background: "#D1FAE5",
                  color: "#065F46",
                  padding: "4px 12px",
                  borderRadius: 9999,
                  fontSize: "12px",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <IconCheckCircle2 size={13} color="#059669" /> Siap Terbit
              </span>
            </div>

            <div style={{ margin: "10px 0" }}>
              <SemiCircleGauge score={85} threshold={75} color="#10B981" />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                color: "#065F46",
                fontSize: "12px",
                lineHeight: 1.5,
              }}
            >
              <div style={{ flexShrink: 0, marginTop: 1 }}>
                <IconCheckCircle2 size={15} color="#059669" />
              </div>
              <div>
                Selamat! Skor <strong>85%</strong> berhasil melampaui standar <strong>75%</strong>.
                Seluruh defisit topik teratasi dan artikel memiliki nilai Information Gain yang sangat kompetitif di SERP Google.
              </div>
            </div>
          </section>

          {/* Seksi 2: Metrik Stilometri & Celah Topik Teratasi */}
          <section
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 0,
              padding: "16px 0",
              borderBottom: "1px solid #E9DFCA",
            }}
          >
            <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 10px 0", color: "#1E293B" }}>
              Peningkatan Metrik & Topik Gain
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ color: "#1E293B" }}>VSM Cosine Similarity</span>
                  <span style={{ color: "#059669" }}>0.36 (Optimal &lt; 0.60)</span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "rgba(30, 41, 59, 0.08)",
                    borderRadius: 9999,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "36%", height: "100%", background: "#10B981", borderRadius: 9999 }} />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ color: "#1E293B" }}>MATTR (Kekayaan Leksikal)</span>
                  <span style={{ color: "#059669" }}>0.74 (Sangat Kaya &gt; 0.55)</span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "rgba(30, 41, 59, 0.08)",
                    borderRadius: 9999,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "74%", height: "100%", background: "#10B981", borderRadius: 9999 }} />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#059669", display: "block", marginBottom: 6 }}>
                Δ gain Terpenuhi:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Suhu 92°C Presisi", "Rasio 1:15", "Robusta Dampit", "Pemanis Aren Alami"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#D1FAE5",
                      color: "#065F46",
                      padding: "3px 8px",
                      borderRadius: 9999,
                      fontSize: "11px",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <IconCheck size={12} color="#065F46" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Seksi 3: Naskah Terkurasi Hijau Penuh */}
          <section
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 0,
              padding: "16px 0 0 0",
            }}
          >
            <h4 style={{ fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", color: "#1E293B" }}>
              Kualitas Naskah Akhir
            </h4>
            <div
              style={{
                fontSize: "12.5px",
                lineHeight: 1.6,
                color: "#334155",
                background: "transparent",
              }}
            >
              <mark
                style={{
                  background: "#BBF7D0",
                  color: "#1E293B",
                  padding: "2px 4px",
                  borderRadius: 3,
                }}
              >
                Menyeduh kopi tubruk Robusta Dampit dengan presisi memerlukan air bertemperatur 92°C serta rasio 1:15 (10g bubuk medium untuk 150ml air).
              </mark>{" "}
              <mark
                style={{
                  background: "#BBF7D0",
                  color: "#1E293B",
                  padding: "2px 4px",
                  borderRadius: 3,
                }}
              >
                Manisnya gula aren cair mengikat ketegasan body tanpa ampas berlebih.
              </mark>
            </div>
          </section>
        </div>
      </main>

      {/* Persistent Floating Input Capsule at Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 14,
          right: 14,
          background: "#E9DFCA",
          borderRadius: 28,
          padding: "6px 8px 6px 12px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          boxShadow: "0 6px 20px rgba(30, 41, 59, 0.12)",
          zIndex: 35,
        }}
      >
        <button
          aria-label="Tambah Opsi"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#C0D5E5",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            color: "#1E293B",
          }}
        >
          <IconPlus size={20} color="#1E293B" />
        </button>

        <textarea
          rows={1}
          placeholder="Ketik atau tempel naskah..."
          defaultValue=""
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            fontSize: "13.5px",
            color: "#1E293B",
            resize: "none",
            outline: "none",
            padding: "8px 0",
            fontFamily: "inherit",
          }}
        />

        <button
          aria-label="Kirim Revisi"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#C0CEE8",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            color: "#1E293B",
          }}
        >
          <IconArrowRight size={20} color="#1E293B" />
        </button>
      </div>
    </div>
  );
};

export default defineScreen({
  title: "6. Alur Revisi Berkelanjutan (Analisis 1 vs Analisis 2 Terpisah)",
  description:
    "Multi-iterasi revisi berkelanjutan Waskita V2.2: Blok Analisis 1 (CDS 70%) dan Blok Analisis 2 (CDS 85%) terpisah dengan bubble revisi #E9DFCA.",
  relatedDocs: [],
  mobile: <MultiIterasiRevisiScreen />,
  desktop: <MultiIterasiRevisiScreen />,
});
