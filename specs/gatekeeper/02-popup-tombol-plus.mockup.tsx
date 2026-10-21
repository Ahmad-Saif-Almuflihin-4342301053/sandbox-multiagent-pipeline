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

const IconFileUp: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = "currentColor" }) => (
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
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PopupTombolPlusScreen: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F7F4EB",
        color: "#1E293B",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        position: "relative",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .range-slider-custom {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 6px;
            background: #C0D5E5;
            border-radius: 9999px;
            outline: none;
            margin: 6px 0;
            accent-color: #C0CEE8;
          }
          .range-slider-custom::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #7B8BA6;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            border: 2px solid #FFFFFF;
          }
          .range-slider-custom::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #7B8BA6;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            border: 2px solid #FFFFFF;
          }
        `}
      </style>

      {/* Layer 1: Background Landing Screen (Underlay) */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Header */}
        <header
          style={{
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            borderBottom: "1px solid rgba(30, 41, 59, 0.06)",
            flexShrink: 0,
          }}
        >
          <div style={{ padding: 8, display: "flex", alignItems: "center" }}>
            <IconMenu size={22} color="#1E293B" />
          </div>
          <WaskitaLogo width={120} height={26} />
          <div
            style={{
              background: "#C0CEE8",
              borderRadius: "9999px",
              padding: "8px 18px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#1E293B",
            }}
          >
            Sign in
          </div>
        </header>

        {/* Hero */}
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px 80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <WaskitaLogo width={170} height={36} />
          </div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#1E293B",
              margin: 0,
            }}
          >
            Segera Periksa, ARTIKELMU!
          </h1>
        </main>

        {/* Input Capsule Underlay */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            right: "16px",
            background: "#E9DFCA",
            borderRadius: "28px",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#C0D5E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconPlus size={20} color="#1E293B" />
          </div>
          <div style={{ flex: 1, fontSize: "14px", color: "rgba(30, 41, 59, 0.4)" }}>
            Ketik atau tempel naskah...
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#C0CEE8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconArrowRight size={20} color="#1E293B" />
          </div>
        </div>
      </div>

      {/* Layer 2: Backdrop Gelap Transparan (50% Atas) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.42)",
          zIndex: 10,
        }}
      />

      {/* Layer 3: Popup Bottom Sheet 52% (Muncul dari Bawah ala Gemini) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "52%",
          background: "#F7F4EB",
          borderRadius: "28px 28px 0 0",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 -8px 24px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
        }}
      >
        {/* Drag Handle Pill */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0 6px 0",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "5px",
              borderRadius: "9999px",
              background: "#94A3B8",
            }}
          />
        </div>

        {/* Scrollable Content inside Sheet */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "6px 16px 24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* 1. Unggah File Dokumen */}
          <div
            style={{
              background: "#E9DFCA",
              borderRadius: "16px",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#F7F4EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1E293B",
                }}
              >
                <IconFileUp size={20} color="#1E293B" />
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
                  Unggah File Dokumen
                </div>
                <div style={{ fontSize: "11px", color: "rgba(30, 41, 59, 0.7)" }}>
                  Mendukung .md, .txt, .docx
                </div>
              </div>
            </div>
            <button
              type="button"
              style={{
                background: "#C0CEE8",
                border: "none",
                borderRadius: "9999px",
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#1E293B",
                cursor: "pointer",
              }}
            >
              Pilih File
            </button>
          </div>

          {/* 2. Kueri Target */}
          <div
            style={{
              background: "#E9DFCA",
              borderRadius: "16px",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconSearch size={16} color="#1E293B" />
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
                Kueri Target Analisis
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                defaultValue="resep kopi tubruk tradisional"
                style={{
                  flex: 1,
                  background: "#F7F4EB",
                  border: "1px solid rgba(30, 41, 59, 0.15)",
                  borderRadius: "10px",
                  padding: "8px 12px",
                  fontSize: "13px",
                  color: "#1E293B",
                  outline: "none",
                }}
              />
              <button
                type="button"
                style={{
                  background: "#C0CEE8",
                  border: "none",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1E293B",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                Simpan
              </button>
            </div>
          </div>

          {/* 3. Ambang Batas (4 Native <input type="range"> Sliders) */}
          <div
            style={{
              background: "#E9DFCA",
              borderRadius: "16px",
              padding: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
              Ambang Batas Kualitas (Kustomisasi)
            </div>

            {/* Slider 1: VSM Cosine Similarity */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                <span>VSM Cosine Similarity</span>
                <span style={{ color: "#3B82F6" }}>≤ 0.60</span>
              </div>
              <input
                type="range"
                className="range-slider-custom"
                min="0.10"
                max="1.00"
                step="0.05"
                defaultValue="0.60"
              />
            </div>

            {/* Slider 2: MATTR (Kekayaan Leksikal) */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                <span>MATTR (Kekayaan Leksikal)</span>
                <span style={{ color: "#10B981" }}>≥ 0.55</span>
              </div>
              <input
                type="range"
                className="range-slider-custom"
                min="0.10"
                max="1.00"
                step="0.05"
                defaultValue="0.55"
              />
            </div>

            {/* Slider 3: HKO Overlap (Sub-judul) */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                <span>HKO Overlap (Sub-judul)</span>
                <span style={{ color: "#F59E0B" }}>≤ 40%</span>
              </div>
              <input
                type="range"
                className="range-slider-custom"
                min="0"
                max="100"
                step="5"
                defaultValue="40"
              />
            </div>

            {/* Slider 4: Skor Lolos Standar (CDS) */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                <span>Skor Lolos Standar (CDS)</span>
                <span style={{ color: "#10B981" }}>≥ 75%</span>
              </div>
              <input
                type="range"
                className="range-slider-custom"
                min="50"
                max="100"
                step="5"
                defaultValue="75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default defineScreen({
  title: "2. Popup Tombol Plus: Opsi Audit & Masukan (Setengah Halaman)",
  description:
    "Antarmuka Popup Bottom Sheet 52% Waskita V2.2: Backdrop gelap 50% atas, kartu unggah file, target kueri, dan 4 slider range ambang batas.",
  relatedDocs: [],
  mobile: <PopupTombolPlusScreen />,
  desktop: <PopupTombolPlusScreen />,
});
