import React from "react";
import { COLORS, WaskitaLogo, IconMenu, IconPlus, IconArrowRight } from "./shared-ui";

export interface GuestWorkspaceProps {
  isDesktop?: boolean;
  plusToggleId: string;
  sidebarToggleId: string;
}

export const GuestWorkspace: React.FC<GuestWorkspaceProps> = ({
  isDesktop = false,
  plusToggleId,
  sidebarToggleId,
}) => {
  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background: COLORS.warmCream,
        color: COLORS.deepSlate,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header (56px) */}
      <header
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isDesktop ? "0 28px" : "0 16px",
          borderBottom: "1px solid rgba(30, 41, 59, 0.06)",
          flexShrink: 0,
          background: COLORS.warmCream,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <label
            htmlFor={sidebarToggleId}
            style={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: "8px",
              color: COLORS.deepSlate,
            }}
            title="Buka Menu"
          >
            <IconMenu size={22} color={COLORS.deepSlate} />
          </label>
          <WaskitaLogo width={isDesktop ? 136 : 120} height={isDesktop ? 29 : 26} />
        </div>

        <div>
          <button
            type="button"
            style={{
              background: COLORS.softPeriwinkle,
              border: "none",
              borderRadius: "9999px",
              padding: "8px 20px",
              fontSize: "13px",
              fontWeight: 600,
              color: COLORS.deepSlate,
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        </div>
      </header>

      {/* Hero Tengah: HANYA judul CTA 'Segera Periksa, ARTIKELMU!' (DILARANG duplikasi logo di atasnya!) */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isDesktop ? "0 32px 120px 32px" : "0 24px 96px 24px",
          textAlign: "center",
          maxWidth: isDesktop ? "840px" : "100%",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: isDesktop ? "36px" : "24px",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: COLORS.deepSlate,
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          Segera Periksa, ARTIKELMU!
        </h1>
        <p
          style={{
            fontSize: isDesktop ? "15px" : "13px",
            color: "rgba(30, 41, 59, 0.65)",
            marginTop: "10px",
            marginBottom: 0,
            maxWidth: "520px",
          }}
        >
          Pemeriksaan kualitas naskah pra-terbit berbasis CDS, semantik VSM, leksikal MATTR, dan analisis SERP terpercaya.
        </p>
      </main>

      {/* Floating Input Capsule Bawah */}
      <div
        style={{
          position: "absolute",
          bottom: isDesktop ? "24px" : "16px",
          left: isDesktop ? "50%" : "16px",
          right: isDesktop ? "auto" : "16px",
          transform: isDesktop ? "translateX(-50%)" : "none",
          width: isDesktop ? "100%" : "auto",
          maxWidth: isDesktop ? "780px" : "none",
          boxSizing: "border-box",
          zIndex: 20,
        }}
      >
        <div
          style={{
            background: COLORS.warmSand,
            borderRadius: "28px",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 8px 24px rgba(30, 41, 59, 0.08)",
          }}
        >
          {/* Tombol Bulat Plus (+) */}
          <label
            htmlFor={plusToggleId}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: COLORS.mutedSkyBlue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              color: COLORS.deepSlate,
            }}
            title="Opsi Audit & Berkas"
          >
            <IconPlus size={20} color={COLORS.deepSlate} />
          </label>

          {/* Input / Textarea 'Ketik atau tempel naskah...' */}
          <textarea
            rows={1}
            placeholder="Ketik atau tempel naskah..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              resize: "none",
              fontSize: "14px",
              fontFamily: "inherit",
              color: COLORS.deepSlate,
              lineHeight: "22px",
              padding: "9px 4px",
              boxSizing: "border-box",
            }}
          />

          {/* Tombol Bulat Panah Kanan (ArrowRight) */}
          <button
            type="button"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: COLORS.softPeriwinkle,
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              color: COLORS.deepSlate,
            }}
            title="Kirim Analisis"
          >
            <IconArrowRight size={20} color={COLORS.deepSlate} />
          </button>
        </div>
      </div>
    </div>
  );
};
