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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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

// Interactive Client Script for DOM interactions
const interactiveScript = `
  (function() {
    function initWaskitaLanding() {
      // Toggle Auth state (Guest vs Authenticated)
      let isAuthenticated = false;

      // DOM Elements
      const authToggleBtn = document.getElementById("wsk-toggle-auth-btn");
      const authStateLabel = document.getElementById("wsk-auth-state-label");
      const headerAuthBtn = document.getElementById("wsk-header-auth-btn");
      const headerMenuBtn = document.getElementById("wsk-header-more-btn");
      
      const sidebarOverlay = document.getElementById("wsk-sidebar-overlay");
      const sidebarOpenBtn = document.getElementById("wsk-open-sidebar");
      const sidebarCloseBtn = document.getElementById("wsk-close-sidebar");
      const sidebarGuestView = document.getElementById("wsk-sidebar-guest");
      const sidebarAuthView = document.getElementById("wsk-sidebar-auth");

      const sheetBackdrop = document.getElementById("wsk-sheet-backdrop");
      const bottomSheet = document.getElementById("wsk-bottom-sheet");
      const openSheetBtn = document.getElementById("wsk-open-sheet-btn");
      const sheetDragHandle = document.getElementById("wsk-sheet-drag-handle");
      const closeSheetBtn = document.getElementById("wsk-close-sheet-btn");

      let isSheetExpanded = false;

      function updateAuthUI() {
        if (authStateLabel) {
          authStateLabel.textContent = isAuthenticated ? "Status: Terautentikasi (Ahmad Saif)" : "Status: Tamu (Belum Login)";
        }
        if (headerAuthBtn && headerMenuBtn) {
          if (isAuthenticated) {
            headerAuthBtn.style.display = "none";
            headerMenuBtn.style.display = "flex";
          } else {
            headerAuthBtn.style.display = "inline-flex";
            headerMenuBtn.style.display = "none";
          }
        }
        if (sidebarGuestView && sidebarAuthView) {
          if (isAuthenticated) {
            sidebarGuestView.style.display = "none";
            sidebarAuthView.style.display = "flex";
          } else {
            sidebarGuestView.style.display = "flex";
            sidebarAuthView.style.display = "none";
          }
        }
      }

      if (authToggleBtn) {
        authToggleBtn.addEventListener("click", function() {
          isAuthenticated = !isAuthenticated;
          updateAuthUI();
        });
      }

      if (headerAuthBtn) {
        headerAuthBtn.addEventListener("click", function() {
          isAuthenticated = true;
          updateAuthUI();
        });
      }

      const sidebarSignInBtn = document.getElementById("wsk-sidebar-signin-btn");
      if (sidebarSignInBtn) {
        sidebarSignInBtn.addEventListener("click", function() {
          isAuthenticated = true;
          updateAuthUI();
        });
      }

      // Sidebar Open / Close
      if (sidebarOpenBtn && sidebarOverlay) {
        sidebarOpenBtn.addEventListener("click", function() {
          sidebarOverlay.style.display = "block";
        });
      }

      if (sidebarCloseBtn && sidebarOverlay) {
        sidebarCloseBtn.addEventListener("click", function() {
          sidebarOverlay.style.display = "none";
        });
      }

      // Bottom Sheet Open / Close / Expand
      function openSheet() {
        if (sheetBackdrop && bottomSheet) {
          sheetBackdrop.style.display = "block";
          bottomSheet.style.height = "50%";
          isSheetExpanded = false;
        }
      }

      function closeSheet() {
        if (sheetBackdrop) {
          sheetBackdrop.style.display = "none";
        }
      }

      if (openSheetBtn) {
        openSheetBtn.addEventListener("click", openSheet);
      }

      if (closeSheetBtn) {
        closeSheetBtn.addEventListener("click", closeSheet);
      }

      if (sheetBackdrop) {
        sheetBackdrop.addEventListener("click", function(e) {
          if (e.target === sheetBackdrop) {
            closeSheet();
          }
        });
      }

      if (sheetDragHandle && bottomSheet) {
        sheetDragHandle.addEventListener("click", function() {
          if (!isSheetExpanded) {
            bottomSheet.style.height = "88%";
            isSheetExpanded = true;
          } else {
            bottomSheet.style.height = "50%";
            isSheetExpanded = false;
          }
        });
      }

      // Sliders Live Update
      const vsmSlider = document.getElementById("wsk-slider-vsm");
      const vsmVal = document.getElementById("wsk-val-vsm");
      if (vsmSlider && vsmVal) {
        vsmSlider.addEventListener("input", function(e) {
          vsmVal.textContent = parseFloat(e.target.value).toFixed(2);
        });
      }

      const mattrSlider = document.getElementById("wsk-slider-mattr");
      const mattrVal = document.getElementById("wsk-val-mattr");
      if (mattrSlider && mattrVal) {
        mattrSlider.addEventListener("input", function(e) {
          mattrVal.textContent = parseFloat(e.target.value).toFixed(2);
        });
      }

      const hkoSlider = document.getElementById("wsk-slider-hko");
      const hkoVal = document.getElementById("wsk-val-hko");
      if (hkoSlider && hkoVal) {
        hkoSlider.addEventListener("input", function(e) {
          hkoVal.textContent = e.target.value + "%";
        });
      }

      const cdsSlider = document.getElementById("wsk-slider-cds");
      const cdsVal = document.getElementById("wsk-val-cds");
      if (cdsSlider && cdsVal) {
        cdsSlider.addEventListener("input", function(e) {
          cdsVal.textContent = e.target.value + "%";
        });
      }

      // Popover More Menu in Sidebar
      window.toggleSidebarItemMenu = function(menuId) {
        const popover = document.getElementById(menuId);
        if (popover) {
          const isShown = popover.style.display === "block";
          document.querySelectorAll(".wsk-item-popover").forEach(el => el.style.display = "none");
          popover.style.display = isShown ? "none" : "block";
        }
      };

      updateAuthUI();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initWaskitaLanding);
    } else {
      initWaskitaLanding();
    }
  })();
`;

export default defineScreen({
  title: "1. Waskita Landing (Zero-Login & Mobile Ergonomics)",
  description:
    "Antarmuka Waskita V2.1: Palet pastel resmi, zero emoji (Inline Lucide SVG), logo SVG resmi tanpa teks ekstra, floating input capsule #E9DFCA dengan +, auto-grow textarea, panah ArrowRight, 50% bottom sheet dengan 4 sliders, dan fullscreen sidebar Gemini.",
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
          gap: "40px",
          maxWidth: "960px",
          width: "100%",
        }}
      >
        {/* Mobile Device Frame */}
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
          {/* Top Notch / Dynamic Island */}
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

          {/* Top Header Minimalis (56px) */}
          <header
            style={{
              height: "56px",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#F7F4EB",
              borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
              flexShrink: 0,
              zIndex: 15,
            }}
          >
            {/* Burger Sidebar Button */}
            <button
              id="wsk-open-sidebar"
              type="button"
              aria-label="Buka Navigasi Sidebar"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#1E293B",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <IconMenu size={22} color="#1E293B" />
            </button>

            {/* Logo Waskita (Logotype Murni tanpa teks ekstra di samping) */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <WaskitaLogo width={124} height={26} />
            </div>

            {/* Right Action: Sign In Pill (Guest) or MoreVertical (Auth) */}
            <div>
              <button
                id="wsk-header-auth-btn"
                type="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#C0CEE8",
                  color: "#1E293B",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "opacity 0.15s ease",
                }}
              >
                Sign in
              </button>

              <button
                id="wsk-header-more-btn"
                type="button"
                aria-label="Menu Opsi"
                style={{
                  display: "none",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#1E293B",
                  padding: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
              >
                <IconMoreVertical size={20} color="#1E293B" />
              </button>
            </div>
          </header>

          {/* Scrollable Main Workspace - Clean Hero */}
          <main
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px 20px 140px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              background: "#F7F4EB",
            }}
          >
            {/* Clean Hero Area: ONLY Logo + CTA (No long descriptions, no sample chips) */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  background: "#E9DFCA",
                  borderRadius: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 18px rgba(30, 41, 59, 0.05)",
                }}
              >
                <WaskitaLogo width={160} height={34} />
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "1.25",
                  color: "#1E293B",
                  letterSpacing: "-0.02em",
                }}
              >
                Segera Periksa, ARTIKELMU!
              </h1>
            </div>
          </main>

          {/* Persistent Floating Input Capsule (Fixed Bottom) */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "14px 16px 20px 16px",
              background: "linear-gradient(to top, #F7F4EB 88%, rgba(247, 244, 235, 0.8) 96%, transparent 100%)",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {/* Main Capsule Container (background: #E9DFCA, border-radius: 28px) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#E9DFCA",
                borderRadius: "28px",
                padding: "6px 8px 6px 6px",
                boxShadow: "0 8px 24px -4px rgba(30, 41, 59, 0.12)",
                border: "1px solid rgba(30, 41, 59, 0.08)",
              }}
            >
              {/* Trigger Button (+) for Bottom Sheet Modal */}
              <button
                id="wsk-open-sheet-btn"
                type="button"
                aria-label="Buka Opsi Audit dan Masukan"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#C0D5E5",
                  border: "none",
                  color: "#1E293B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "transform 0.15s ease",
                }}
              >
                <IconPlus size={20} color="#1E293B" />
              </button>

              {/* Textarea Auto-Grow */}
              <textarea
                rows={1}
                placeholder="Ketik atau tempel naskah..."
                defaultValue=""
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  resize: "none",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  padding: "9px 4px",
                  fontFamily: "inherit",
                  color: "#1E293B",
                  background: "transparent",
                  maxHeight: "80px",
                }}
              />

              {/* Submit Button: ONLY ArrowRight */}
              <button
                type="button"
                aria-label="Kirim Naskah Audit"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#C0CEE8",
                  color: "#1E293B",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background 0.15s ease",
                }}
              >
                <IconArrowRight size={20} color="#1E293B" />
              </button>
            </div>
          </div>

          {/* Bottom Sheet Backdrop Modal (50% to 88% height with Low Opacity Dark Dim) */}
          <div
            id="wsk-sheet-backdrop"
            style={{
              display: "none",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15, 23, 42, 0.32)",
              backdropFilter: "blur(2px)",
              zIndex: 30,
            }}
          >
            {/* Bottom Sheet Modal Container */}
            <div
              id="wsk-bottom-sheet"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "#F7F4EB",
                borderRadius: "28px 28px 0 0",
                boxShadow: "0 -10px 40px rgba(15, 23, 42, 0.18)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "height 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Drag Handle Pill */}
              <div
                id="wsk-sheet-drag-handle"
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
                  padding: "6px 18px 12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconSliders size={18} color="#1E293B" />
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
                </div>
                <button
                  id="wsk-close-sheet-btn"
                  type="button"
                  aria-label="Tutup Lembar Opsi"
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
                  <IconX size={18} color="#1E293B" />
                </button>
              </div>

              {/* Scrollable Content inside Sheet */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "16px 18px 24px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
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
                      marginBottom: "8px",
                    }}
                  >
                    <IconFileUp size={18} color="#1E293B" />
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1E293B" }}>
                      File Dokumen
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: "11px",
                        background: "#C0CEE8",
                        color: "#1E293B",
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
                      padding: "14px",
                      textAlign: "center",
                      background: "#F7F4EB",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "12px", fontWeight: "600", color: "#1E293B" }}>
                      Unggah berkas draf (.md, .txt, .docx)
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(30, 41, 59, 0.65)", marginTop: "2px" }}>
                      Teks diekstrak otomatis ke kapsul input
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
                      marginBottom: "8px",
                    }}
                  >
                    <IconSearch size={18} color="#1E293B" />
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1E293B" }}>
                      Kueri Target
                    </span>
                  </div>
                  <input
                    type="text"
                    defaultValue="resep kopi tubruk tradisional"
                    placeholder="Masukkan kueri pencarian Google..."
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "9px 12px",
                      border: "1px solid #C0D5E5",
                      borderRadius: "10px",
                      fontSize: "12px",
                      color: "#1E293B",
                      background: "#F7F4EB",
                      outline: "none",
                    }}
                  />
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
                      <span style={{ fontSize: "13px", fontWeight: "700", color: "#1E293B" }}>
                        Ambang Batas Audit
                      </span>
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
                      <span id="wsk-val-vsm" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        0.60
                      </span>
                    </div>
                    <input
                      id="wsk-slider-vsm"
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
                      <span id="wsk-val-mattr" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        0.55
                      </span>
                    </div>
                    <input
                      id="wsk-slider-mattr"
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
                      <span id="wsk-val-hko" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        40%
                      </span>
                    </div>
                    <input
                      id="wsk-slider-hko"
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
                      <span id="wsk-val-cds" style={{ fontWeight: "700", fontFamily: "monospace" }}>
                        75%
                      </span>
                    </div>
                    <input
                      id="wsk-slider-cds"
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

          {/* Fullscreen Mobile Sidebar (100% Layar ala Gemini, 2 Kondisi) */}
          <div
            id="wsk-sidebar-overlay"
            style={{
              display: "none",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              background: "#F7F4EB",
              zIndex: 40,
            }}
          >
            {/* Kondisi 1: Guest State Sidebar */}
            <div
              id="wsk-sidebar-guest"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Sticky Header Guest */}
              <div
                style={{
                  height: "56px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#F7F4EB",
                  borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
                  flexShrink: 0,
                }}
              >
                <WaskitaLogo width={120} height={26} />
                <button
                  id="wsk-close-sidebar"
                  type="button"
                  aria-label="Tutup Sidebar"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px",
                    color: "#1E293B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconX size={20} color="#1E293B" />
                </button>
              </div>

              {/* Body Guest (30px gap below header) */}
              <div
                style={{
                  flex: 1,
                  padding: "30px 18px 20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Analisis Baru */}
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
                  }}
                >
                  <IconSquarePen size={18} color="#1E293B" />
                  <span>Analisis Baru</span>
                </button>

                {/* Info Card Guest */}
                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "14px",
                    padding: "14px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <IconInfo size={20} color="#1E293B" />
                  <span style={{ fontSize: "13px", color: "#1E293B", lineHeight: "1.4" }}>
                    Masuk untuk menyimpan riwayat analisis Anda
                  </span>
                </div>
              </div>

              {/* Fixed Footer Guest */}
              <div
                style={{
                  height: "64px",
                  padding: "0 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#F7F4EB",
                  borderTop: "1px solid rgba(30, 41, 59, 0.08)",
                  flexShrink: 0,
                }}
              >
                <button
                  id="wsk-sidebar-signin-btn"
                  type="button"
                  style={{
                    background: "#C0CEE8",
                    color: "#1E293B",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "8px 18px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Sign In
                </button>

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

            {/* Kondisi 2: Authenticated State Sidebar */}
            <div
              id="wsk-sidebar-auth"
              style={{
                width: "100%",
                height: "100%",
                display: "none",
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
                    onClick={() => {
                      const overlay = document.getElementById("wsk-sidebar-overlay");
                      if (overlay) overlay.style.display = "none";
                    }}
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
                  { id: "h1", title: "Resep Kopi Tubruk Tradisional Enak dan Gurih" },
                  { id: "h2", title: "Panduan Seduh Kopi Tubruk Nusantara" },
                  { id: "h3", title: "Manfaat Kopi Hitam Tanpa Gula untuk Kesehatan" },
                  { id: "h4", title: "Sejarah Budaya Ngopi di Warung Tradisional" },
                  { id: "h5", title: "Perbedaan Arabika dan Robusta dalam Cita Rasa" },
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
                        if (typeof window !== "undefined" && window.toggleSidebarItemMenu) {
                          // @ts-ignore
                          window.toggleSidebarItemMenu(`popover-${item.id}`);
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
                      className="wsk-item-popover"
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

        {/* Desktop Side Panel: Architectural & UX Overview */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingTop: "12px",
          }}
        >
          {/* Controls Sandbox */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid #CBD5E1",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", marginBottom: "8px" }}>
              SIMULASI INTERAKTIF (STATE TOGGLE)
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <button
                id="wsk-toggle-auth-btn"
                type="button"
                style={{
                  background: "#1E293B",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Ganti Status (Guest / Auth)
              </button>
              <span id="wsk-auth-state-label" style={{ fontSize: "12px", fontWeight: "600", color: "#0F172A" }}>
                Status: Tamu (Belum Login)
              </span>
            </div>
            <p style={{ margin: 0, fontSize: "11px", color: "#64748B" }}>
              Klik tombol hamburger di header untuk menguji Fullscreen Sidebar (100% Layar). Klik tombol <code>(+)</code> pada kapsul input bawah untuk menguji Bottom Sheet Opsi &amp; Ambang Batas (50% hingga 88%).
            </p>
          </div>

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
              Waskita V2.1: Zero-Emoji &amp; Pastel Palette
            </div>
            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "20px",
                fontWeight: "800",
                color: "#1E293B",
              }}
            >
              1. Waskita Landing &amp; Mobile Ergonomics
            </h2>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
              Mematuhi spesifikasi desain resmi Waskita V2.1 dengan 5 palet warna pastel, zero emoji Unicode, logo SVG resmi, dan navigasi sidebar ala Gemini.
            </p>

            <div
              style={{
                borderTop: "1px solid #F1F5F9",
                paddingTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div>
                <strong style={{ fontSize: "13px", color: "#1E293B" }}>A. 5 Palet Warna Pastel Waskita</strong>
                <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                  #F7F4EB (Warm Cream), #E9DFCA (Warm Sand), #D4E5F2 (Soft Ice Blue), #C0D5E5 (Muted Sky Blue), dan #C0CEE8 (Soft Periwinkle).
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "13px", color: "#1E293B" }}>B. Clean Hero &amp; Persistent Capsule</strong>
                <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                  Area hero hanya memuat Logo SVG dan teks &quot;Segera Periksa, ARTIKELMU!&quot;. Kapsul input bawah #E9DFCA dilengkapi tombol (+) dan panah ArrowRight.
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "13px", color: "#1E293B" }}>C. 50% Bottom Sheet &amp; 4 Sliders</strong>
                <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                  Muncul separuh layar dengan backdrop gelap opacity rendah, rounded top 28px, drag handle untuk ekspansi ke 88%, serta 4 range slider interaktif.
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "13px", color: "#1E293B" }}>D. Fullscreen Sidebar (Guest vs Auth)</strong>
                <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                  Navigasi 100% layar ala Gemini dengan riwayat bersih (judul ellipsis + 7px + popover SVG Share, Pin, Rename, Delete).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Script Injection */}
      <script dangerouslySetInnerHTML={{ __html: interactiveScript }} />
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
        position: "relative",
        color: "#1E293B",
      }}
    >
      {/* Top Header Minimalis (56px) */}
      <header
        style={{
          height: "56px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#F7F4EB",
          borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
          position: "sticky",
          top: 0,
          zIndex: 15,
        }}
      >
        <button
          onClick={() => {
            const overlay = document.getElementById("wsk-mob-sidebar-overlay");
            if (overlay) overlay.style.display = "block";
          }}
          type="button"
          aria-label="Buka Riwayat Audit"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#1E293B",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <IconMenu size={22} color="#1E293B" />
        </button>

        <div style={{ display: "flex", alignItems: "center" }}>
          <WaskitaLogo width={124} height={26} />
        </div>

        <button
          type="button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#C0CEE8",
            color: "#1E293B",
            border: "none",
            borderRadius: "9999px",
            padding: "6px 14px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </header>

      {/* Main Workspace */}
      <main
        style={{
          flex: 1,
          padding: "24px 20px 140px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              background: "#E9DFCA",
              borderRadius: "24px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 18px rgba(30, 41, 59, 0.05)",
            }}
          >
            <WaskitaLogo width={160} height={34} />
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: "800",
              lineHeight: "1.25",
              color: "#1E293B",
              letterSpacing: "-0.02em",
            }}
          >
            Segera Periksa, ARTIKELMU!
          </h1>
        </div>
      </main>

      {/* Persistent Floating Input Capsule */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "14px 16px 20px 16px",
          background: "linear-gradient(to top, #F7F4EB 88%, rgba(247, 244, 235, 0.8) 96%, transparent 100%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#E9DFCA",
            borderRadius: "28px",
            padding: "6px 8px 6px 6px",
            boxShadow: "0 8px 24px -4px rgba(30, 41, 59, 0.12)",
            border: "1px solid rgba(30, 41, 59, 0.08)",
          }}
        >
          <button
            onClick={() => {
              const sheet = document.getElementById("wsk-mob-sheet-backdrop");
              if (sheet) sheet.style.display = "block";
            }}
            type="button"
            aria-label="Buka Opsi Audit dan Masukan"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#C0D5E5",
              border: "none",
              color: "#1E293B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
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
              outline: "none",
              resize: "none",
              fontSize: "14px",
              lineHeight: "1.4",
              padding: "10px 4px",
              fontFamily: "inherit",
              color: "#1E293B",
              background: "transparent",
              maxHeight: "80px",
            }}
          />

          <button
            type="button"
            aria-label="Kirim Naskah"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#C0CEE8",
              color: "#1E293B",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <IconArrowRight size={20} color="#1E293B" />
          </button>
        </div>
      </div>

      {/* Bottom Sheet Mobile */}
      <div
        id="wsk-mob-sheet-backdrop"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.32)",
          backdropFilter: "blur(2px)",
          zIndex: 30,
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.currentTarget.style.display = "none";
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "#F7F4EB",
            borderRadius: "28px 28px 0 0",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "10px 0 6px 0", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "48px", height: "5px", background: "#C0D5E5", borderRadius: "9999px" }} />
          </div>
          <div
            style={{
              padding: "6px 18px 12px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: "700" }}>Opsi Audit &amp; Masukan</span>
            <button
              onClick={() => {
                const sheet = document.getElementById("wsk-mob-sheet-backdrop");
                if (sheet) sheet.style.display = "none";
              }}
              type="button"
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <IconX size={18} color="#1E293B" />
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ background: "#E9DFCA", borderRadius: "14px", padding: "12px" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "6px" }}>File Dokumen</div>
              <div style={{ border: "2px dashed #C0D5E5", borderRadius: "10px", padding: "12px", textAlign: "center", background: "#F7F4EB" }}>
                Pilih berkas draf (.md, .txt, .docx)
              </div>
            </div>
            <div style={{ background: "#E9DFCA", borderRadius: "14px", padding: "12px" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "6px" }}>Kueri Target</div>
              <input
                type="text"
                defaultValue="resep kopi tubruk tradisional"
                style={{ width: "100%", boxSizing: "border-box", padding: "8px", borderRadius: "8px", border: "1px solid #C0D5E5", background: "#F7F4EB" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Sidebar Mobile */}
      <div
        id="wsk-mob-sidebar-overlay"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          background: "#F7F4EB",
          zIndex: 40,
        }}
      >
        <div style={{ height: "56px", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(30, 41, 59, 0.08)" }}>
          <WaskitaLogo width={120} height={26} />
          <button
            onClick={() => {
              const overlay = document.getElementById("wsk-mob-sidebar-overlay");
              if (overlay) overlay.style.display = "none";
            }}
            type="button"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}
          >
            <IconX size={20} color="#1E293B" />
          </button>
        </div>
        <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
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
            }}
          >
            <IconSquarePen size={18} color="#1E293B" />
            <span>Analisis Baru</span>
          </button>
          <div style={{ background: "#E9DFCA", borderRadius: "14px", padding: "14px", display: "flex", gap: "10px" }}>
            <IconInfo size={20} color="#1E293B" />
            <span style={{ fontSize: "13px" }}>Masuk untuk menyimpan riwayat analisis Anda</span>
          </div>
        </div>
        <div style={{ marginTop: "auto", height: "64px", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(30, 41, 59, 0.08)" }}>
          <button
            type="button"
            style={{ background: "#C0CEE8", color: "#1E293B", border: "none", borderRadius: "9999px", padding: "8px 18px", fontSize: "13px", fontWeight: "600" }}
          >
            Sign In
          </button>
          <IconSettings size={20} color="#1E293B" />
        </div>
      </div>
    </div>
  ),
  relatedDocs: [],
});
