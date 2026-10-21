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


const IconClipboardCopy: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M11 14h6" />
    <path d="M11 18h6" />
    <path d="M7 14h.01" />
    <path d="M7 18h.01" />
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
    <line x1="12" x2="12" y1="15" y2="3" />
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
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <line x1="10" x2="14" y1="13" y2="13" />
    <line x1="10" x2="14" y1="17" y2="17" />
  </svg>
);

const IconAlertTriangle: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const IconCheckCircle: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconSparkles: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

const IconLightbulb: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = "currentColor" }) => (
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
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
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
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const interactiveScript = `
  (function() {
    function initWaskitaAudit() {
      const moreBtn = document.getElementById("wsk-header-more-btn");
      const moreMenu = document.getElementById("wsk-header-menu-popover");
      if (moreBtn && moreMenu) {
        moreBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          const isShown = moreMenu.style.display === "flex";
          moreMenu.style.display = isShown ? "none" : "flex";
        });
        document.addEventListener("click", function(e) {
          if (!moreMenu.contains(e.target) && e.target !== moreBtn) {
            moreMenu.style.display = "none";
          }
        });
      }

      const openSidebarBtn = document.getElementById("wsk-open-sidebar");
      const closeSidebarBtn = document.getElementById("wsk-close-sidebar");
      const sidebarOverlay = document.getElementById("wsk-sidebar-overlay");
      if (openSidebarBtn && sidebarOverlay) {
        openSidebarBtn.addEventListener("click", function() {
          sidebarOverlay.style.display = "block";
        });
      }
      if (closeSidebarBtn && sidebarOverlay) {
        closeSidebarBtn.addEventListener("click", function() {
          sidebarOverlay.style.display = "none";
        });
      }

      const openSheetBtn = document.getElementById("wsk-open-sheet-btn");
      const sheetBackdrop = document.getElementById("wsk-sheet-backdrop");
      const closeSheetBtn = document.getElementById("wsk-close-sheet-btn");
      const bottomSheet = document.getElementById("wsk-bottom-sheet");
      const sheetDragHandle = document.getElementById("wsk-sheet-drag-handle");
      let isSheetExpanded = false;

      if (openSheetBtn && sheetBackdrop && bottomSheet) {
        openSheetBtn.addEventListener("click", function() {
          sheetBackdrop.style.display = "flex";
          setTimeout(function() {
            bottomSheet.style.height = "50%";
          }, 10);
        });
      }
      if (closeSheetBtn && sheetBackdrop && bottomSheet) {
        closeSheetBtn.addEventListener("click", function() {
          bottomSheet.style.height = "0%";
          setTimeout(function() {
            sheetBackdrop.style.display = "none";
            isSheetExpanded = false;
          }, 300);
        });
      }
      if (sheetDragHandle && bottomSheet) {
        sheetDragHandle.addEventListener("click", function() {
          isSheetExpanded = !isSheetExpanded;
          bottomSheet.style.height = isSheetExpanded ? "88%" : "50%";
        });
      }

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

      const copyBtn = document.getElementById("wsk-copy-prompt-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", function() {
          const originalText = copyBtn.innerHTML;
          copyBtn.style.background = "#10B981";
          copyBtn.innerHTML = "<span>Tersalin ke Clipboard!</span>";
          setTimeout(function() {
            copyBtn.style.background = "#C0CEE8";
            copyBtn.innerHTML = originalText;
          }, 2000);
        });
      }

      const sendBtn = document.getElementById("wsk-send-btn");
      const inputArea = document.getElementById("wsk-draft-textarea");
      if (sendBtn && inputArea) {
        sendBtn.addEventListener("click", function() {
          if (!inputArea.value.trim()) return;
          const loadingPopup = document.getElementById("wsk-loading-popup");
          if (loadingPopup) {
            loadingPopup.style.display = "flex";
            loadingPopup.style.opacity = "1";
            setTimeout(function() {
              loadingPopup.style.opacity = "0";
              setTimeout(function() {
                loadingPopup.style.display = "none";
                alert("Analisis revisi selesai! Skor CDS meningkat ke 85% (Siap Terbit).");
              }, 400);
            }, 1200);
          }
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initWaskitaAudit);
    } else {
      initWaskitaAudit();
    }
  })();
`;

export default defineScreen({
  title: "3. Hasil Audit White-Box: Status Perlu Revisi (CDS 70%)",
  description:
    "Visualisasi hasil evaluasi white-box editorial draf naskah dengan vonis Perlu Revisi (CDS 70%), rincian stilometri VSM/MATTR/HKO, defisit topik, anotasi 4-warna, dan terminal prompt bantuan berstandar Waskita V2.1.",
  desktop: (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "#F7F4EB",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "40px",
          maxWidth: "1040px",
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
            boxShadow: "0 25px 60px -15px rgba(30, 41, 59, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Top Notch Simulation */}
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

          {/* Top Header Waskita */}
          <header
            style={{
              height: "56px",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
              background: "#F7F4EB",
              flexShrink: 0,
              zIndex: 15,
            }}
          >
            <button
              id="wsk-open-sidebar"
              type="button"
              aria-label="Buka Navigasi Menu"
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

            {/* Official Waskita SVG Logo */}
            <WaskitaLogo width={124} height={26} />

            {/* More Menu Action Button */}
            <button
              id="wsk-header-more-btn"
              type="button"
              aria-label="Menu Opsi Audit"
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
              <IconMoreVertical size={20} color="#1E293B" />
            </button>
          </header>

          {/* Popover Menu Titik Tiga (7 Aksi SVG) */}
          <div
            id="wsk-header-menu-popover"
            style={{
              display: "none",
              position: "absolute",
              top: "76px",
              right: "16px",
              width: "230px",
              background: "#C0D5E5",
              borderRadius: "16px",
              boxShadow: "0 12px 30px -4px rgba(30, 41, 59, 0.2)",
              border: "1px solid rgba(30, 41, 59, 0.12)",
              padding: "8px",
              zIndex: 50,
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#1E293B",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconClipboardCopy size={16} color="#1E293B" />
              <span>Salin Ringkasan Hasil</span>
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#1E293B",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconDownload size={16} color="#1E293B" />
              <span>Unduh Laporan</span>
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#1E293B",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconFileText size={16} color="#1E293B" />
              <span>Salin Teks Artikel</span>
            </button>
            <div style={{ height: "1px", background: "rgba(30, 41, 59, 0.12)", margin: "4px 0" }} />
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#1E293B",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconShare2 size={16} color="#1E293B" />
              <span>Share Analisis</span>
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#1E293B",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconPin size={16} color="#1E293B" />
              <span>Pin</span>
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#1E293B",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconPencil size={16} color="#1E293B" />
              <span>Rename</span>
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#DC2626",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconTrash2 size={16} color="#DC2626" />
              <span>Delete</span>
            </button>
          </div>

          {/* Fade-out Pipeline Loading Indicator Popup */}
          <div
            id="wsk-loading-popup"
            style={{
              display: "none",
              position: "absolute",
              top: "70px",
              left: "16px",
              right: "16px",
              background: "#E9DFCA",
              borderRadius: "16px",
              padding: "12px 14px",
              boxShadow: "0 10px 25px -4px rgba(30, 41, 59, 0.2)",
              border: "1px solid rgba(30, 41, 59, 0.12)",
              zIndex: 40,
              alignItems: "center",
              gap: "12px",
              transition: "opacity 0.4s ease",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                border: "3px solid #C0CEE8",
                borderTopColor: "#1E293B",
                animation: "spin 1s linear infinite",
              }}
            />
            <div style={{ flex: 1, fontSize: "12px", color: "#1E293B", fontWeight: "600" }}>
              Memproses kalkulasi VSM, MATTR, &amp; Top 3 SERP...
            </div>
          </div>

          {/* Scrollable Audit Feed Content */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px 90px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              background: "#F7F4EB",
            }}
          >
            {/* User Bubble Turn: Naskah Awal (Versi 1) */}
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "92%",
                background: "#E9DFCA",
                color: "#1E293B",
                borderRadius: "20px 20px 4px 20px",
                padding: "12px 14px",
                boxShadow: "0 4px 12px rgba(30, 41, 59, 0.06)",
                border: "1px solid rgba(30, 41, 59, 0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#64748B",
                  fontWeight: "700",
                  marginBottom: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <span>Draf Diuji · Versi 1</span>
                <span>342 kata</span>
              </div>
              <p
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "13px",
                  fontWeight: "700",
                  lineHeight: 1.4,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#1E293B",
                }}
              >
                <IconSearch size={14} color="#1E293B" />
                <span>&ldquo;resep kopi tubruk tradisional&rdquo;</span>
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#334155",
                  lineHeight: 1.4,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                Kopi tubruk adalah metode seduh paling otentik di Nusantara. Menggunakan bubuk Robusta Dampit
                dan pemanis aren alami...
              </p>
            </div>

            {/* SATU Kontainer Background Utuh: Hasil Analisis 1 (#D4E5F2, border-radius: 24px) */}
            <div
              style={{
                background: "#D4E5F2",
                borderRadius: "24px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                border: "1px solid rgba(30, 41, 59, 0.08)",
                boxShadow: "0 4px 20px -2px rgba(30, 41, 59, 0.06)",
              }}
            >
              {/* Header Label Analisis 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "8px",
                  borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    color: "#1E293B",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  Hasil Analisis 1 · Versi Awal
                </span>
                <span
                  style={{
                    background: "#C0CEE8",
                    color: "#1E293B",
                    fontSize: "11px",
                    fontWeight: "700",
                    padding: "2px 8px",
                    borderRadius: "12px",
                  }}
                >
                  Waskita v2.1
                </span>
              </div>

              {/* Seksi 1 — Status Kelayakan */}
              <div
                style={{
                  background: "#F7F4EB",
                  borderRadius: "18px",
                  padding: "18px 16px",
                  border: "1px solid rgba(30, 41, 59, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1E293B",
                        display: "block",
                      }}
                    >
                      Status Kelayakan
                    </span>
                    <span
                      style={{
                        fontSize: "11.5px",
                        color: "#64748B",
                      }}
                    >
                      Content Differentiation Score (CDS)
                    </span>
                  </div>
                  <span
                    style={{
                      background: "#FEF3C7",
                      color: "#B45309",
                      border: "1px solid #FDE68A",
                      fontSize: "11.5px",
                      fontWeight: "700",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#F59E0B",
                      }}
                    />
                    Perlu Revisi
                  </span>
                </div>

                {/* Semi-Circle Radial Gauge (SVG) */}
                <div
                  style={{
                    width: "220px",
                    height: "124px",
                    position: "relative",
                    margin: "8px 0 2px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 220 124"
                    width="220"
                    height="124"
                    style={{ overflow: "visible" }}
                    aria-label="Gauge Skor CDS 70 persen, ambang batas 75 persen"
                    role="img"
                  >
                    <path
                      d="M 30 110 A 80 80 0 0 1 190 110"
                      fill="none"
                      stroke="#C0D5E5"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 30 110 A 80 80 0 0 1 190 110"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray="251.33"
                      strokeDashoffset="75.40"
                    />
                    <line
                      x1="159.50"
                      y1="60.50"
                      x2="173.64"
                      y2="46.36"
                      stroke="#1E293B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <text
                      x="180"
                      y="42"
                      fontSize="9.5"
                      fontWeight="700"
                      fill="#1E293B"
                      textAnchor="start"
                    >
                      75% Lolos
                    </text>
                    <text
                      x="110"
                      y="102"
                      textAnchor="middle"
                      fontSize="38"
                      fontWeight="800"
                      fill="#1E293B"
                      fontFamily="'Inter', sans-serif"
                    >
                      70%
                    </text>
                  </svg>
                </div>

                {/* Kalimat Diagnosis Kausal */}
                <div
                  style={{
                    width: "100%",
                    background: "#FFFBEB",
                    border: "1px solid #FEF3C7",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    marginTop: "6px",
                    fontSize: "12px",
                    color: "#92400E",
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <IconAlertTriangle size={16} color="#B45309" />
                  <div>
                    <strong>5 poin di bawah ambang lolos (75%)</strong>. Penyebab utama:{" "}
                    <strong>3 topik penting</strong> belum dibahas.
                  </div>
                </div>
              </div>

              {/* Seksi 2 — Metrik Stilometri & Leksikal */}
              <div
                style={{
                  background: "#F7F4EB",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(30, 41, 59, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#1E293B",
                    marginBottom: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Metrik Stilometri &amp; Leksikal</span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#64748B",
                      fontWeight: "500",
                    }}
                  >
                    FR-07 &amp; FR-09
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                        fontSize: "12px",
                      }}
                    >
                      <span style={{ color: "#334155", fontWeight: "600" }}>
                        VSM Cosine Similarity
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontWeight: "700", color: "#1E293B" }}>0.48</span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            background: "#ECFDF5",
                            color: "#047857",
                            padding: "1px 6px",
                            borderRadius: "4px",
                          }}
                        >
                          Aman
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        background: "#E9DFCA",
                        borderRadius: "4px",
                        position: "relative",
                        overflow: "visible",
                      }}
                    >
                      <div
                        style={{
                          width: "48%",
                          height: "100%",
                          background: "#10B981",
                          borderRadius: "4px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "60%",
                          top: "-3px",
                          bottom: "-3px",
                          width: "2px",
                          background: "#EF4444",
                          zIndex: 2,
                        }}
                        title="Batas toleransi &le; 0.60"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3px",
                        fontSize: "10px",
                        color: "#64748B",
                      }}
                    >
                      <span>Skor Max draf vs Top 3 SERP</span>
                      <span>Batas toleransi &le; 0.60</span>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                        fontSize: "12px",
                      }}
                    >
                      <span style={{ color: "#334155", fontWeight: "600" }}>
                        MATTR (Kekayaan Kata)
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontWeight: "700", color: "#1E293B" }}>0.61</span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            background: "#ECFDF5",
                            color: "#047857",
                            padding: "1px 6px",
                            borderRadius: "4px",
                          }}
                        >
                          Kaya
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        background: "#E9DFCA",
                        borderRadius: "4px",
                        position: "relative",
                        overflow: "visible",
                      }}
                    >
                      <div
                        style={{
                          width: "61%",
                          height: "100%",
                          background: "#3B82F6",
                          borderRadius: "4px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "55%",
                          top: "-3px",
                          bottom: "-3px",
                          width: "2px",
                          background: "#10B981",
                          zIndex: 2,
                        }}
                        title="Batas standar &ge; 0.55"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3px",
                        fontSize: "10px",
                        color: "#64748B",
                      }}
                    >
                      <span>Moving-Avg TTR window 50 token</span>
                      <span>Batas standar &ge; 0.55</span>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                        fontSize: "12px",
                      }}
                    >
                      <span style={{ color: "#334155", fontWeight: "600" }}>
                        HKO Overlap (Sub-judul)
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontWeight: "700", color: "#1E293B" }}>25%</span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            background: "#ECFDF5",
                            color: "#047857",
                            padding: "1px 6px",
                            borderRadius: "4px",
                          }}
                        >
                          Wajar
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        background: "#E9DFCA",
                        borderRadius: "4px",
                        position: "relative",
                        overflow: "visible",
                      }}
                    >
                      <div
                        style={{
                          width: "25%",
                          height: "100%",
                          background: "#10B981",
                          borderRadius: "4px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "40%",
                          top: "-3px",
                          bottom: "-3px",
                          width: "2px",
                          background: "#F59E0B",
                          zIndex: 2,
                        }}
                        title="Batas wajar &le; 40%"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "3px",
                        fontSize: "10px",
                        color: "#64748B",
                      }}
                    >
                      <span>Repetisi kueri pada H1-H3</span>
                      <span>Batas wajar &le; 40%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seksi 3 — Celah Topik */}
              <div
                style={{
                  background: "#F7F4EB",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(30, 41, 59, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#1E293B",
                    marginBottom: "4px",
                  }}
                >
                  Celah Topik · Information Gain
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#64748B",
                    marginBottom: "12px",
                  }}
                >
                  Komparasi himpunan entitas draf vs korpus Top 3 SERP
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#C2410C",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <IconAlertTriangle size={14} color="#C2410C" />
                    <span>Defisit Topik Kompetitor (3 istilah)</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span
                      style={{
                        background: "#FFF7ED",
                        color: "#C2410C",
                        border: "1px solid #FED7AA",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        fontSize: "11.5px",
                        fontWeight: "600",
                      }}
                    >
                      + Takaran Suhu 90&deg;C
                    </span>
                    <span
                      style={{
                        background: "#FFF7ED",
                        color: "#C2410C",
                        border: "1px solid #FED7AA",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        fontSize: "11.5px",
                        fontWeight: "600",
                      }}
                    >
                      + Rasio Seduh 1:15
                    </span>
                    <span
                      style={{
                        background: "#FFF7ED",
                        color: "#C2410C",
                        border: "1px solid #FED7AA",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        fontSize: "11.5px",
                        fontWeight: "600",
                      }}
                    >
                      + Tingkat Gilingan Bubuk
                    </span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#047857",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <IconSparkles size={14} color="#047857" />
                    <span>Poin Kebaruan Unik (2 istilah)</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span
                      style={{
                        background: "#ECFDF5",
                        color: "#047857",
                        border: "1px solid #A7F3D0",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        fontSize: "11.5px",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <IconCheckCircle size={12} color="#047857" />
                      <span>Robusta Dampit</span>
                    </span>
                    <span
                      style={{
                        background: "#ECFDF5",
                        color: "#047857",
                        border: "1px solid #A7F3D0",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        fontSize: "11.5px",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <IconCheckCircle size={12} color="#047857" />
                      <span>Pemanis Aren Alami</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Seksi 4 — Naskah Terkurasi & Anotasi 4-Warna */}
              <div
                style={{
                  background: "#F7F4EB",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(30, 41, 59, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#1E293B",
                    marginBottom: "4px",
                  }}
                >
                  Naskah Terkurasi &amp; Anotasi 4-Warna
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#64748B",
                    marginBottom: "12px",
                  }}
                >
                  Penanda visual in-place proof berbasis indeks kalimat
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6px",
                    marginBottom: "12px",
                  }}
                >
                  <button
                    type="button"
                    style={{
                      background: "#FEF3C7",
                      border: "1px solid #FBBF24",
                      borderRadius: "6px",
                      padding: "6px 8px",
                      fontSize: "11px",
                      color: "#92400E",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: "#F59E0B",
                        display: "inline-block",
                      }}
                    />
                    <span>HKO Overlap (Kuning)</span>
                  </button>
                  <button
                    type="button"
                    style={{
                      background: "#FFE4E6",
                      border: "1px solid #FB7185",
                      borderRadius: "6px",
                      padding: "6px 8px",
                      fontSize: "11px",
                      color: "#9F1239",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: "#EF4444",
                        display: "inline-block",
                      }}
                    />
                    <span>Mirip SERP (Merah)</span>
                  </button>
                  <button
                    type="button"
                    style={{
                      background: "#E0F2FE",
                      border: "1px solid #38BDF8",
                      borderRadius: "6px",
                      padding: "6px 8px",
                      fontSize: "11px",
                      color: "#075985",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: "#0284C7",
                        display: "inline-block",
                      }}
                    />
                    <span>Saran Sisipan (Biru)</span>
                  </button>
                  <button
                    type="button"
                    style={{
                      background: "#D1FAE5",
                      border: "1px solid #34D399",
                      borderRadius: "6px",
                      padding: "6px 8px",
                      fontSize: "11px",
                      color: "#065F46",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: "#10B981",
                        display: "inline-block",
                      }}
                    />
                    <span>Poin Unik (Hijau)</span>
                  </button>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(30, 41, 59, 0.1)",
                    borderRadius: "12px",
                    padding: "16px 14px",
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "#1E293B",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#1E293B",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <mark
                      style={{
                        background: "#FEF3C7",
                        color: "#92400E",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Resep Kopi Tubruk Tradisional
                    </mark>{" "}
                    yang Nikmat
                  </h3>

                  <p style={{ margin: "0 0 12px 0" }}>
                    Kopi tubruk merupakan warisan seduh paling merakyat di Nusantara. Dalam racikan ini,
                    digunakan biji{" "}
                    <mark
                      style={{
                        background: "#D1FAE5",
                        color: "#065F46",
                        padding: "1px 5px",
                        borderRadius: "3px",
                        fontWeight: "600",
                      }}
                    >
                      Robusta Dampit
                    </mark>{" "}
                    yang dipadu dengan legitnya{" "}
                    <mark
                      style={{
                        background: "#D1FAE5",
                        color: "#065F46",
                        padding: "1px 5px",
                        borderRadius: "3px",
                        fontWeight: "600",
                      }}
                    >
                      pemanis aren alami
                    </mark>
                    .
                  </p>

                  <p style={{ margin: "0 0 12px 0" }}>
                    <mark
                      style={{
                        background: "#FFE4E6",
                        color: "#9F1239",
                        padding: "2px 4px",
                        borderRadius: "3px",
                      }}
                    >
                      Cara membuatnya cukup menuangkan air panas mendidih langsung ke dalam cangkir berisi
                      bubuk kopi lalu diaduk rata sampai larut.
                    </mark>
                  </p>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      margin: "4px 0 10px 0",
                      background: "#E0F2FE",
                      border: "1px dashed #0284C7",
                      color: "#0369A1",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "11.5px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    <IconLightbulb size={14} color="#0369A1" />
                    <span>Saran Sisipan: + suhu air 90&deg;C · rasio 1:15 · tingkat gilingan bubuk medium-fine</span>
                  </div>

                  <p style={{ margin: 0 }}>
                    Diamkan selama 3 menit agar ampas mengendap sempurna di dasar cangkir sebelum disajikan
                    hangat bersama camilan tradisional.
                  </p>
                </div>

                <div
                  id="wsk-diagnostic-note"
                  style={{
                    background: "#FFF1F2",
                    border: "1px solid #FECDD3",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    marginTop: "10px",
                    fontSize: "11.5px",
                    color: "#9F1239",
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ fontWeight: "700", marginBottom: "2px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <IconSearch size={14} color="#9F1239" />
                    <span>Catatan Diagnostik Kalimat #2 (Kemiripan Tinggi 0.76):</span>
                  </div>
                  Kalimat memiliki struktur sintaksis yang sangat mirip dengan artikel kompetitor #1
                  (seduhkopi.example). Disarankan mengubah formulasi kalimat dan menyisipkan variabel teknis
                  suhu seduh 90&deg;C.
                </div>
              </div>

              {/* Seksi 5 — Overview & Prompt Bantuan */}
              <div
                style={{
                  background: "#F7F4EB",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid rgba(30, 41, 59, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#1E293B",
                    marginBottom: "4px",
                  }}
                >
                  Rekomendasi Revisi Editorial
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "#64748B",
                    marginBottom: "12px",
                  }}
                >
                  4 langkah terarah untuk menaikkan skor kelayakan CDS &gt; 75%
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "12px",
                    color: "#334155",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#C0CEE8",
                        color: "#1E293B",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      1
                    </span>
                    <span>
                      Sisipkan instruksi <strong>suhu seduh optimal (90&deg;C)</strong> dan{" "}
                      <strong>rasio seduh air-kopi (1:15)</strong> pada paragraf pembuatan.
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#C0CEE8",
                        color: "#1E293B",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      2
                    </span>
                    <span>
                      Jelaskan <strong>tingkat gilingan bubuk (medium-fine)</strong> agar ampas cepat
                      mengendap.
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#C0CEE8",
                        color: "#1E293B",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      3
                    </span>
                    <span>
                      Parafrasa kalimat cara penyeduhan yang bersorot merah untuk menekan VSM Cosine similarity.
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#C0CEE8",
                        color: "#1E293B",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      4
                    </span>
                    <span>
                      Pertahankan poin diferensiasi <em>Robusta Dampit</em> dan <em>Pemanis Aren Alami</em>.
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background: "#1E293B",
                    borderRadius: "12px",
                    padding: "12px",
                    color: "#F7F4EB",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #334155",
                      paddingBottom: "6px",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ color: "#94A3B8", fontWeight: "600" }}>
                      terminal · prompt-bantuan.txt
                    </span>
                    <span style={{ color: "#C0CEE8" }}>UTF-8</span>
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      lineHeight: 1.5,
                      color: "#E2E8F0",
                      maxHeight: "130px",
                      overflowY: "auto",
                    }}
                  >
{`[DRAF NASKAH ASLI]
Kopi tubruk adalah metode seduh paling otentik di Nusantara...

[INSTRUKSI PERBAIKAN BERDASARKAN HASIL AUDIT]
Tolong revisi naskah di atas dengan memenuhi kriteria:
1. Sisipkan topik defisit: takaran suhu 90°C, rasio seduh 1:15, tingkat gilingan bubuk.
2. Parafrasa kalimat cara seduh agar tidak serupa dengan kompetitor.
3. Pertahankan entitas orisinal: Robusta Dampit & pemanis aren alami.`}
                  </pre>
                </div>

                <button
                  id="wsk-copy-prompt-btn"
                  type="button"
                  style={{
                    width: "100%",
                    height: "40px",
                    background: "#C0CEE8",
                    color: "#1E293B",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "700",
                    fontSize: "12.5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 2px 8px rgba(30, 41, 59, 0.08)",
                  }}
                >
                  <IconClipboardCopy size={16} color="#1E293B" />
                  <span>Salin Prompt Remediasi</span>
                </button>
              </div>
            </div>
          </div>

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
                }}
              >
                <IconPlus size={20} color="#1E293B" />
              </button>

              <textarea
                id="wsk-draft-textarea"
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

              <button
                id="wsk-send-btn"
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
                }}
              >
                <IconArrowRight size={20} color="#1E293B" />
              </button>
            </div>
          </div>

          {/* Bottom Sheet Backdrop Modal */}
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
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div
              id="wsk-bottom-sheet"
              style={{
                width: "100%",
                height: "0%",
                background: "#F7F4EB",
                borderRadius: "28px 28px 0 0",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 -10px 40px rgba(15, 23, 42, 0.2)",
                transition: "height 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 0 4px 0",
                  cursor: "grab",
                  flexShrink: 0,
                }}
              >
                <div
                  id="wsk-sheet-drag-handle"
                  title="Klik untuk ekspansi 88%"
                  style={{
                    width: "48px",
                    height: "5px",
                    borderRadius: "9999px",
                    background: "#C0D5E5",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "8px 18px 12px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
                  flexShrink: 0,
                }}
              >
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
                <button
                  id="wsk-close-sheet-btn"
                  type="button"
                  aria-label="Tutup Opsi Masukan"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#1E293B",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <IconX size={18} color="#1E293B" />
                </button>
              </div>

              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "16px 18px 28px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(30, 41, 59, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "#C0D5E5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1E293B",
                      flexShrink: 0,
                    }}
                  >
                    <IconFileUp size={20} color="#1E293B" />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#1E293B" }}>
                      Unggah File Dokumen
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748B" }}>
                      Mendukung format .md, .txt, .docx
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(30, 41, 59, 0.06)",
                  }}
                >
                  <label
                    htmlFor="wsk-target-query"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#1E293B",
                      marginBottom: "6px",
                    }}
                  >
                    <IconSearch size={14} color="#1E293B" />
                    <span>Kueri Target SERP</span>
                  </label>
                  <input
                    id="wsk-target-query"
                    type="text"
                    defaultValue="resep kopi tubruk tradisional"
                    placeholder="Contoh: resep kopi tubruk enak"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid rgba(30, 41, 59, 0.15)",
                      background: "#F7F4EB",
                      fontSize: "12px",
                      color: "#1E293B",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div
                  style={{
                    background: "#E9DFCA",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(30, 41, 59, 0.06)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#1E293B",
                      marginBottom: "12px",
                    }}
                  >
                    <IconSliders size={16} color="#1E293B" />
                    <span>Ambang Batas Evaluasi (Live Sliders)</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "11.5px",
                          marginBottom: "4px",
                        }}
                      >
                        <span style={{ color: "#1E293B", fontWeight: "600" }}>VSM Cosine Similarity</span>
                        <span id="wsk-val-vsm" style={{ fontWeight: "700", color: "#1E293B" }}>
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
                        style={{ width: "100%", accentColor: "#C0CEE8", cursor: "pointer" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "11.5px",
                          marginBottom: "4px",
                        }}
                      >
                        <span style={{ color: "#1E293B", fontWeight: "600" }}>MATTR (Kekayaan Leksikal)</span>
                        <span id="wsk-val-mattr" style={{ fontWeight: "700", color: "#1E293B" }}>
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
                        style={{ width: "100%", accentColor: "#C0CEE8", cursor: "pointer" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "11.5px",
                          marginBottom: "4px",
                        }}
                      >
                        <span style={{ color: "#1E293B", fontWeight: "600" }}>HKO Overlap (Sub-judul)</span>
                        <span id="wsk-val-hko" style={{ fontWeight: "700", color: "#1E293B" }}>
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
                        style={{ width: "100%", accentColor: "#C0CEE8", cursor: "pointer" }}
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "11.5px",
                          marginBottom: "4px",
                        }}
                      >
                        <span style={{ color: "#1E293B", fontWeight: "600" }}>Skor Lolos Standar (CDS)</span>
                        <span id="wsk-val-cds" style={{ fontWeight: "700", color: "#1E293B" }}>
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
                        style={{ width: "100%", accentColor: "#C0CEE8", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fullscreen Mobile Sidebar Modal */}
          <div
            id="wsk-sidebar-overlay"
            style={{
              display: "none",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#F7F4EB",
              zIndex: 60,
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "56px",
                padding: "0 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(30, 41, 59, 0.08)",
                background: "#F7F4EB",
                flexShrink: 0,
              }}
            >
              <WaskitaLogo width={124} height={26} />
              <button
                id="wsk-close-sidebar"
                type="button"
                aria-label="Tutup Sidebar"
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
                <IconX size={20} color="#1E293B" />
              </button>
            </div>

            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "24px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#C0D5E5",
                  border: "none",
                  borderRadius: "14px",
                  padding: "12px 14px",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#1E293B",
                  cursor: "pointer",
                }}
              >
                <IconSquarePen size={18} color="#1E293B" />
                <span>Analisis Baru</span>
              </button>

              <div
                style={{
                  background: "#E9DFCA",
                  borderRadius: "14px",
                  padding: "14px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  border: "1px solid rgba(30, 41, 59, 0.08)",
                }}
              >
                <IconInfo size={18} color="#1E293B" />
                <div style={{ fontSize: "12px", color: "#1E293B", lineHeight: 1.5 }}>
                  Masuk untuk menyimpan riwayat analisis Anda.
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "14px 18px",
                borderTop: "1px solid rgba(30, 41, 59, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#F7F4EB",
              }}
            >
              <button
                type="button"
                style={{
                  background: "#C0CEE8",
                  color: "#1E293B",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "8px 20px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Sign in
              </button>
              <button
                type="button"
                aria-label="Pengaturan"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#1E293B",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconSettings size={18} color="#1E293B" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Side Explanation Panel */}
        <div
          style={{
            flex: 1,
            background: "#FFFFFF",
            borderRadius: "24px",
            padding: "28px 24px",
            border: "1px solid #CBD5E1",
            boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#FFFBEB",
              color: "#B45309",
              border: "1px solid #FDE68A",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            <IconAlertTriangle size={14} color="#B45309" />
            <span>White-Box Audit Diagnostic State</span>
          </div>

          <h2
            style={{
              margin: "0 0 10px 0",
              fontSize: "22px",
              fontWeight: "800",
              color: "#1E293B",
              letterSpacing: "-0.02em",
            }}
          >
            Layar 3: Audit Perlu Revisi (CDS 70%) · Waskita V2.1
          </h2>

          <p
            style={{
              margin: "0 0 20px 0",
              fontSize: "14px",
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            Menampilkan implementasi visual <strong>5-Layer Scannability</strong> ketika naskah pengguna
            berada di bawah ambang batas standar (75%). Dilengkapi instrumen diagnosa kausal, visualisasi
            semi-circle radial gauge, defisit entitas YAKE, dan prompt remediasi otomatis di dalam kontainer
            tunggal terpadu <code>#D4E5F2</code>.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                borderLeft: "4px solid #F59E0B",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#1E293B" }}>
                1. SVG Semi-Circle Radial Gauge (FR-10)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Skor agregat CDS 70% dengan garis penanda ambang kelulusan standar 75% serta kartu
                penjelas penyebab kausal selisih skor.
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #10B981",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#1E293B" }}>
                2. Guardrails Matematis VSM, MATTR &amp; HKO (FR-07 &amp; FR-09)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Progress bar bergaris ambang toleransi: Cosine 0.48 (aman), MATTR 0.61 (kaya), dan HKO 25%
                (wajar).
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #F97316",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#1E293B" }}>
                3. Celah Topik &amp; Set Calculator (FR-08)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Diferensiasi himpunan entitas: 3 defisit kompetitor (oranye) dan 2 poin kebaruan unik draf
                (hijau).
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #38BDF8",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#1E293B" }}>
                4. Naskah Terkurasi Anotasi 4-Warna (FR-11)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Permukaan baca kertas serif dengan 4 sorotan stabilo pastel (kuning, merah,
                biru, hijau) serta kartu catatan diagnostik aktif.
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #C0CEE8",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#1E293B" }}>
                5. Terminal Remediasi AI &amp; Floating Input Capsule
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Kotak kode gelap (#1E293B) berisi prompt terstruktur, serta input capsule tetap di bawah
                untuk pengiriman revisi artikel lanjutan.
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
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Top Header */}
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
          zIndex: 20,
        }}
      >
        <button
          type="button"
          aria-label="Buka Navigasi Menu"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#1E293B",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconMenu size={22} color="#1E293B" />
        </button>
        <WaskitaLogo width={124} height={26} />
        <button
          type="button"
          aria-label="Menu Opsi Audit"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#1E293B",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconMoreVertical size={20} color="#1E293B" />
        </button>
      </header>

      {/* Main Content Feed */}
      <main
        style={{
          flex: 1,
          padding: "16px 14px 90px 14px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* User Bubble Turn */}
        <div
          style={{
            alignSelf: "flex-end",
            maxWidth: "92%",
            background: "#E9DFCA",
            color: "#1E293B",
            borderRadius: "20px 20px 4px 20px",
            padding: "12px 14px",
            boxShadow: "0 4px 12px rgba(30, 41, 59, 0.06)",
            border: "1px solid rgba(30, 41, 59, 0.08)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#64748B",
              fontWeight: "700",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <span>Draf Diuji · Versi 1</span>
            <span>342 kata</span>
          </div>
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: "13px",
              fontWeight: "700",
              lineHeight: 1.4,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1E293B",
            }}
          >
            <IconSearch size={14} color="#1E293B" />
            <span>&ldquo;resep kopi tubruk tradisional&rdquo;</span>
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#334155",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            Kopi tubruk adalah metode seduh paling otentik di Nusantara. Menggunakan bubuk Robusta Dampit
            dan pemanis aren alami...
          </p>
        </div>

        {/* SATU Kontainer Background Utuh: Hasil Analisis 1 (#D4E5F2, border-radius: 24px) */}
        <div
          style={{
            background: "#D4E5F2",
            borderRadius: "24px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            border: "1px solid rgba(30, 41, 59, 0.08)",
            boxShadow: "0 4px 20px -2px rgba(30, 41, 59, 0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "8px",
              borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "800",
                color: "#1E293B",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Hasil Analisis 1 · Versi Awal
            </span>
            <span
              style={{
                background: "#C0CEE8",
                color: "#1E293B",
                fontSize: "11px",
                fontWeight: "700",
                padding: "2px 8px",
                borderRadius: "12px",
              }}
            >
              Waskita v2.1
            </span>
          </div>

          {/* Seksi 1 — Status Kelayakan */}
          <div
            style={{
              background: "#F7F4EB",
              borderRadius: "18px",
              padding: "18px 16px",
              border: "1px solid rgba(30, 41, 59, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#1E293B",
                    display: "block",
                  }}
                >
                  Status Kelayakan
                </span>
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#64748B",
                  }}
                >
                  Content Differentiation Score (CDS)
                </span>
              </div>
              <span
                style={{
                  background: "#FEF3C7",
                  color: "#B45309",
                  border: "1px solid #FDE68A",
                  fontSize: "11.5px",
                  fontWeight: "700",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#F59E0B",
                  }}
                />
                Perlu Revisi
              </span>
            </div>

            <div
              style={{
                width: "220px",
                height: "124px",
                position: "relative",
                margin: "8px 0 2px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 220 124"
                width="220"
                height="124"
                style={{ overflow: "visible" }}
                aria-label="Gauge Skor CDS 70 persen, ambang batas 75 persen"
                role="img"
              >
                <path
                  d="M 30 110 A 80 80 0 0 1 190 110"
                  fill="none"
                  stroke="#C0D5E5"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <path
                  d="M 30 110 A 80 80 0 0 1 190 110"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeDasharray="251.33"
                  strokeDashoffset="75.40"
                />
                <line
                  x1="159.50"
                  y1="60.50"
                  x2="173.64"
                  y2="46.36"
                  stroke="#1E293B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <text
                  x="180"
                  y="42"
                  fontSize="9.5"
                  fontWeight="700"
                  fill="#1E293B"
                  textAnchor="start"
                >
                  75% Lolos
                </text>
                <text
                  x="110"
                  y="102"
                  textAnchor="middle"
                  fontSize="38"
                  fontWeight="800"
                  fill="#1E293B"
                  fontFamily="'Inter', sans-serif"
                >
                  70%
                </text>
              </svg>
            </div>

            <div
              style={{
                width: "100%",
                background: "#FFFBEB",
                border: "1px solid #FEF3C7",
                borderRadius: "10px",
                padding: "10px 12px",
                marginTop: "6px",
                fontSize: "12px",
                color: "#92400E",
                lineHeight: 1.5,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <IconAlertTriangle size={16} color="#B45309" />
              <div>
                <strong>5 poin di bawah ambang lolos (75%)</strong>. Penyebab utama:{" "}
                <strong>3 topik penting</strong> belum dibahas.
              </div>
            </div>
          </div>

          {/* Seksi 2 — Metrik Stilometri & Leksikal */}
          <div
            style={{
              background: "#F7F4EB",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(30, 41, 59, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#1E293B",
                marginBottom: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Metrik Stilometri &amp; Leksikal</span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  fontWeight: "500",
                }}
              >
                FR-07 &amp; FR-09
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ color: "#334155", fontWeight: "600" }}>
                    VSM Cosine Similarity
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontWeight: "700", color: "#1E293B" }}>0.48</span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                        background: "#ECFDF5",
                        color: "#047857",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Aman
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "#E9DFCA",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <div
                    style={{
                      width: "48%",
                      height: "100%",
                      background: "#10B981",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "60%",
                      top: "-3px",
                      bottom: "-3px",
                      width: "2px",
                      background: "#EF4444",
                      zIndex: 2,
                    }}
                    title="Batas toleransi &le; 0.60"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3px",
                    fontSize: "10px",
                    color: "#64748B",
                  }}
                >
                  <span>Skor Max draf vs Top 3 SERP</span>
                  <span>Batas toleransi &le; 0.60</span>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ color: "#334155", fontWeight: "600" }}>
                    MATTR (Kekayaan Kata)
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontWeight: "700", color: "#1E293B" }}>0.61</span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                        background: "#ECFDF5",
                        color: "#047857",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Kaya
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "#E9DFCA",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <div
                    style={{
                      width: "61%",
                      height: "100%",
                      background: "#3B82F6",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "55%",
                      top: "-3px",
                      bottom: "-3px",
                      width: "2px",
                      background: "#10B981",
                      zIndex: 2,
                    }}
                    title="Batas standar &ge; 0.55"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3px",
                    fontSize: "10px",
                    color: "#64748B",
                  }}
                >
                  <span>Moving-Avg TTR window 50 token</span>
                  <span>Batas standar &ge; 0.55</span>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ color: "#334155", fontWeight: "600" }}>
                    HKO Overlap (Sub-judul)
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontWeight: "700", color: "#1E293B" }}>25%</span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                        background: "#ECFDF5",
                        color: "#047857",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Wajar
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "#E9DFCA",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <div
                    style={{
                      width: "25%",
                      height: "100%",
                      background: "#10B981",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "40%",
                      top: "-3px",
                      bottom: "-3px",
                      width: "2px",
                      background: "#F59E0B",
                      zIndex: 2,
                    }}
                    title="Batas wajar &le; 40%"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3px",
                    fontSize: "10px",
                    color: "#64748B",
                  }}
                >
                  <span>Repetisi kueri pada H1-H3</span>
                  <span>Batas wajar &le; 40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seksi 3 — Celah Topik */}
          <div
            style={{
              background: "#F7F4EB",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(30, 41, 59, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#1E293B",
                marginBottom: "4px",
              }}
            >
              Celah Topik · Information Gain
            </div>
            <div
              style={{
                fontSize: "11.5px",
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              Komparasi himpunan entitas draf vs korpus Top 3 SERP
            </div>

            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#C2410C",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <IconAlertTriangle size={14} color="#C2410C" />
                <span>Defisit Topik Kompetitor (3 istilah)</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span
                  style={{
                    background: "#FFF7ED",
                    color: "#C2410C",
                    border: "1px solid #FED7AA",
                    padding: "4px 9px",
                    borderRadius: "6px",
                    fontSize: "11.5px",
                    fontWeight: "600",
                  }}
                >
                  + Takaran Suhu 90&deg;C
                </span>
                <span
                  style={{
                    background: "#FFF7ED",
                    color: "#C2410C",
                    border: "1px solid #FED7AA",
                    padding: "4px 9px",
                    borderRadius: "6px",
                    fontSize: "11.5px",
                    fontWeight: "600",
                  }}
                >
                  + Rasio Seduh 1:15
                </span>
                <span
                  style={{
                    background: "#FFF7ED",
                    color: "#C2410C",
                    border: "1px solid #FED7AA",
                    padding: "4px 9px",
                    borderRadius: "6px",
                    fontSize: "11.5px",
                    fontWeight: "600",
                  }}
                >
                  + Tingkat Gilingan Bubuk
                </span>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#047857",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <IconSparkles size={14} color="#047857" />
                <span>Poin Kebaruan Unik (2 istilah)</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span
                  style={{
                    background: "#ECFDF5",
                    color: "#047857",
                    border: "1px solid #A7F3D0",
                    padding: "4px 9px",
                    borderRadius: "6px",
                    fontSize: "11.5px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <IconCheckCircle size={12} color="#047857" />
                  <span>Robusta Dampit</span>
                </span>
                <span
                  style={{
                    background: "#ECFDF5",
                    color: "#047857",
                    border: "1px solid #A7F3D0",
                    padding: "4px 9px",
                    borderRadius: "6px",
                    fontSize: "11.5px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <IconCheckCircle size={12} color="#047857" />
                  <span>Pemanis Aren Alami</span>
                </span>
              </div>
            </div>
          </div>

          {/* Seksi 4 — Naskah Terkurasi & Anotasi 4-Warna */}
          <div
            style={{
              background: "#F7F4EB",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(30, 41, 59, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#1E293B",
                marginBottom: "4px",
              }}
            >
              Naskah Terkurasi &amp; Anotasi 4-Warna
            </div>
            <div
              style={{
                fontSize: "11.5px",
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              Penanda visual in-place proof berbasis indeks kalimat
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(30, 41, 59, 0.1)",
                borderRadius: "12px",
                padding: "16px 14px",
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "#1E293B",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#1E293B",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <mark
                  style={{
                    background: "#FEF3C7",
                    color: "#92400E",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  Resep Kopi Tubruk Tradisional
                </mark>{" "}
                yang Nikmat
              </h3>

              <p style={{ margin: "0 0 12px 0" }}>
                Kopi tubruk merupakan warisan seduh paling merakyat di Nusantara. Dalam racikan ini,
                digunakan biji{" "}
                <mark
                  style={{
                    background: "#D1FAE5",
                    color: "#065F46",
                    padding: "1px 5px",
                    borderRadius: "3px",
                    fontWeight: "600",
                  }}
                >
                  Robusta Dampit
                </mark>{" "}
                yang dipadu dengan legitnya{" "}
                <mark
                  style={{
                    background: "#D1FAE5",
                    color: "#065F46",
                    padding: "1px 5px",
                    borderRadius: "3px",
                    fontWeight: "600",
                  }}
                >
                  pemanis aren alami
                </mark>
                .
              </p>

              <p style={{ margin: "0 0 12px 0" }}>
                <mark
                  style={{
                    background: "#FFE4E6",
                    color: "#9F1239",
                    padding: "2px 4px",
                    borderRadius: "3px",
                  }}
                >
                  Cara membuatnya cukup menuangkan air panas mendidih langsung ke dalam cangkir berisi
                  bubuk kopi lalu diaduk rata sampai larut.
                </mark>
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  margin: "4px 0 10px 0",
                  background: "#E0F2FE",
                  border: "1px dashed #0284C7",
                  color: "#0369A1",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  fontSize: "11.5px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "600",
                }}
              >
                <IconLightbulb size={14} color="#0369A1" />
                <span>Saran Sisipan: + suhu air 90&deg;C · rasio 1:15 · tingkat gilingan bubuk medium-fine</span>
              </div>

              <p style={{ margin: 0 }}>
                Diamkan selama 3 menit agar ampas mengendap sempurna di dasar cangkir sebelum disajikan
                hangat bersama camilan tradisional.
              </p>
            </div>
          </div>

          {/* Seksi 5 — Overview & Prompt Bantuan */}
          <div
            style={{
              background: "#F7F4EB",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid rgba(30, 41, 59, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#1E293B",
                marginBottom: "4px",
              }}
            >
              Rekomendasi Revisi Editorial
            </div>
            <div
              style={{
                fontSize: "11.5px",
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              4 langkah terarah untuk menaikkan skor kelayakan CDS &gt; 75%
            </div>

            <div
              style={{
                background: "#1E293B",
                borderRadius: "12px",
                padding: "12px",
                color: "#F7F4EB",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #334155",
                  paddingBottom: "6px",
                  marginBottom: "8px",
                }}
              >
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>
                  terminal · prompt-bantuan.txt
                </span>
                <span style={{ color: "#C0CEE8" }}>UTF-8</span>
              </div>
              <pre
                style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  lineHeight: 1.5,
                  color: "#E2E8F0",
                  maxHeight: "130px",
                  overflowY: "auto",
                }}
              >
{`[DRAF NASKAH ASLI]
Kopi tubruk adalah metode seduh paling otentik di Nusantara...

[INSTRUKSI PERBAIKAN BERDASARKAN HASIL AUDIT]
Tolong revisi naskah di atas dengan memenuhi kriteria:
1. Sisipkan topik defisit: takaran suhu 90°C, rasio seduh 1:15, tingkat gilingan bubuk.
2. Parafrasa kalimat cara seduh agar tidak serupa dengan kompetitor.
3. Pertahankan entitas orisinal: Robusta Dampit & pemanis aren alami.`}
              </pre>
            </div>

            <button
              type="button"
              style={{
                width: "100%",
                height: "40px",
                background: "#C0CEE8",
                color: "#1E293B",
                border: "none",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "12.5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 2px 8px rgba(30, 41, 59, 0.08)",
              }}
            >
              <IconClipboardCopy size={16} color="#1E293B" />
              <span>Salin Prompt Remediasi</span>
            </button>
          </div>
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
          zIndex: 30,
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
              fontSize: "13px",
              lineHeight: "1.4",
              padding: "9px 4px",
              fontFamily: "inherit",
              color: "#1E293B",
              background: "transparent",
              maxHeight: "80px",
            }}
          />

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
            }}
          >
            <IconArrowRight size={20} color="#1E293B" />
          </button>
        </div>
      </div>
    </div>
  ),
  relatedDocs: [],
});
