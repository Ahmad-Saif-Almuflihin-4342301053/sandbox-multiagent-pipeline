import React from "react";
import { defineScreen } from "@mokly/mokly";
import { AuditOptionsOverlay, COLORS } from "./partials/shared-ui";
import { GuestSidebar } from "./partials/guest-sidebar";
import { GuestWorkspace } from "./partials/guest-workspace";

const SIDEBAR_TOGGLE_ID = "guest-sidebar-toggle";
const PLUS_TOGGLE_ID = "guest-audit-options-toggle";

const MobileGuestView: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: COLORS.warmCream,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Pure CSS State Machine Checkboxes */}
      <input
        type="checkbox"
        id={SIDEBAR_TOGGLE_ID}
        style={{ display: "none" }}
      />
      <input
        type="checkbox"
        id={PLUS_TOGGLE_ID}
        style={{ display: "none" }}
      />

      <style>
        {`
          #${SIDEBAR_TOGGLE_ID}:checked ~ .guest-sidebar-mobile {
            transform: translateX(0) !important;
          }
          #${SIDEBAR_TOGGLE_ID}:checked ~ .guest-sidebar-backdrop {
            display: block !important;
          }
        `}
      </style>

      {/* Main Workspace (100% vh terkunci) */}
      <GuestWorkspace
        isDesktop={false}
        plusToggleId={PLUS_TOGGLE_ID}
        sidebarToggleId={SIDEBAR_TOGGLE_ID}
      />

      {/* Mobile Drawer Backdrop */}
      <label
        htmlFor={SIDEBAR_TOGGLE_ID}
        className="guest-sidebar-backdrop"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.4)",
          backdropFilter: "blur(2px)",
          zIndex: 55,
          cursor: "pointer",
        }}
        title="Tutup Menu"
      />

      {/* Mobile Off-canvas Drawer (100% fullscreen width/height) */}
      <GuestSidebar
        isDesktop={false}
        sidebarToggleId={SIDEBAR_TOGGLE_ID}
      />

      {/* Popup Opsi Audit & Masukan (Bottom Sheet 58vh) */}
      <AuditOptionsOverlay
        toggleId={PLUS_TOGGLE_ID}
        isDesktop={false}
      />
    </div>
  );
};

const DesktopGuestView: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: COLORS.warmCream,
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      {/* Pure CSS State Machine Checkbox for Plus Overlay */}
      <input
        type="checkbox"
        id={PLUS_TOGGLE_ID}
        style={{ display: "none" }}
      />

      {/* Kolom 1: Persistent Left Sidebar 280px */}
      <GuestSidebar
        isDesktop={true}
        sidebarToggleId={SIDEBAR_TOGGLE_ID}
      />

      {/* Kolom 2: Workspace Kanan Terpusat */}
      <div
        style={{
          flex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <GuestWorkspace
          isDesktop={true}
          plusToggleId={PLUS_TOGGLE_ID}
          sidebarToggleId={SIDEBAR_TOGGLE_ID}
        />
      </div>

      {/* Centered Modal / Popover Opsi Audit */}
      <AuditOptionsOverlay
        toggleId={PLUS_TOGGLE_ID}
        isDesktop={true}
      />
    </div>
  );
};

export default defineScreen({
  title: "01. Waskita - Mode Tamu (Belum Login)",
  description:
    "Antarmuka Waskita Mode Tamu (Belum Login) interaktif hidup. Mobile dengan off-canvas drawer & bottom sheet 58vh. Desktop widescreen 2 kolom sejati dengan persistent sidebar 280px dan floating input capsule.",
  relatedDocs: [],
  mobile: <MobileGuestView />,
  desktop: <DesktopGuestView />,
});
