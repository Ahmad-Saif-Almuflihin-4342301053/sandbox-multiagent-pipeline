import React from "react";
import {
  COLORS,
  WaskitaLogo,
  IconX,
  IconSquarePen,
  IconInfo,
  IconSettings,
} from "./shared-ui";

export interface GuestSidebarProps {
  isDesktop?: boolean;
  sidebarToggleId: string;
}

export const GuestSidebar: React.FC<GuestSidebarProps> = ({
  isDesktop = false,
  sidebarToggleId,
}) => {
  return (
    <aside
      className={isDesktop ? "guest-sidebar-desktop" : "guest-sidebar-mobile"}
      style={{
        width: isDesktop ? "280px" : "100%",
        height: "100vh",
        backgroundColor: COLORS.warmCream,
        color: COLORS.deepSlate,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        display: "flex",
        flexDirection: "column",
        position: isDesktop ? "relative" : "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: isDesktop ? "auto" : 0,
        zIndex: isDesktop ? 30 : 60,
        borderRight: isDesktop ? `1px solid ${COLORS.warmSand}` : "none",
        boxSizing: "border-box",
        overflow: "hidden",
        flexShrink: 0,
        transition: isDesktop ? "none" : "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isDesktop ? "none" : "translateX(-100%)",
      }}
    >
      {/* Header: Logo Waskita, tombol tutup X (label htmlFor=sidebarToggleId) */}
      <header
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          borderBottom: "1px solid rgba(30, 41, 59, 0.06)",
          flexShrink: 0,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <WaskitaLogo width={120} height={26} />
        </div>

        <label
          htmlFor={sidebarToggleId}
          aria-label="Tutup Sidebar"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.deepSlate,
            borderRadius: "8px",
          }}
          title="Tutup Sidebar"
        >
          <IconX size={22} color={COLORS.deepSlate} />
        </label>
      </header>

      {/* Konten Tengah: Jarak 30px ke tombol 'Analisis Baru', lalu kartu info */}
      <main
        style={{
          flex: 1,
          padding: "30px 18px 20px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        {/* Tombol Analisis Baru (IconSquarePen) */}
        <label
          htmlFor={sidebarToggleId}
          style={{
            width: "100%",
            background: COLORS.warmSand,
            border: "none",
            borderRadius: "14px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            fontWeight: 700,
            color: COLORS.deepSlate,
            cursor: "pointer",
            textAlign: "left",
            boxSizing: "border-box",
          }}
        >
          <IconSquarePen size={18} color={COLORS.deepSlate} />
          <span>Analisis Baru</span>
        </label>

        {/* Kartu Info 'Masuk untuk menyimpan riwayat analisis Anda' */}
        <div
          style={{
            background: COLORS.warmSand,
            borderRadius: "16px",
            padding: "14px 16px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flexShrink: 0, marginTop: "2px" }}>
            <IconInfo size={20} color={COLORS.deepSlate} />
          </div>
          <div
            style={{
              fontSize: "13px",
              lineHeight: "18px",
              color: COLORS.deepSlate,
              fontWeight: 500,
            }}
          >
            Masuk untuk menyimpan riwayat analisis Anda
          </div>
        </div>
      </main>

      {/* Footer: Kiri tombol 'Sign In' kapsul (#C0CEE8), Kanan tombol 'Settings' (IconSettings) */}
      <footer
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 18px",
          borderTop: "1px solid rgba(30, 41, 59, 0.06)",
          flexShrink: 0,
          boxSizing: "border-box",
        }}
      >
        <button
          type="button"
          style={{
            background: COLORS.softPeriwinkle,
            border: "none",
            borderRadius: "9999px",
            padding: "10px 24px",
            fontSize: "13px",
            fontWeight: 700,
            color: COLORS.deepSlate,
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.deepSlate,
            borderRadius: "8px",
          }}
          title="Pengaturan"
        >
          <IconSettings size={22} color={COLORS.deepSlate} />
        </button>
      </footer>
    </aside>
  );
};
