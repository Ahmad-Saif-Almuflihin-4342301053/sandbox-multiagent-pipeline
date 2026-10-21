import React from "react";
import { defineScreen } from "@mokly/mokly";

export default defineScreen({
  title: "1. Gatekeeper Landing (Zero-Login & Quick Start)",
  description: "Antarmuka audit editorial pra-publikasi tanpa login (Zero-Friction), dilengkapi quick start dan floating input capsule.",
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
            background: "#FFFFFF",
            borderRadius: "44px",
            border: "8px solid #0F172A",
            boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Top Notch / Dynamic Island Simulation */}
          <div
            style={{
              height: "28px",
              background: "#FFFFFF",
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
                background: "#0F172A",
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
              borderBottom: "1px solid #F1F5F9",
              background: "#FFFFFF",
              flexShrink: 0,
              zIndex: 5,
            }}
          >
            <button
              type="button"
              aria-label="Buka Riwayat Audit"
              style={{
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#334155",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              ☰
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(79, 70, 229, 0.3)",
                }}
              >
                <span style={{ fontSize: "14px", lineHeight: 1 }}>🛡️</span>
              </div>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#0F172A",
                  letterSpacing: "-0.01em",
                }}
              >
                Gatekeeper Audit
              </span>
            </div>
            <button
              type="button"
              aria-label="Menu Opsi"
              style={{
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#64748B",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              ⋮
            </button>
          </header>

          {/* Scrollable Main Workspace */}
          <main
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px 20px 140px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            {/* Central Hero Section */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              {/* 3D Shield Icon Container (80x80px) */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 30px rgba(99, 102, 241, 0.35)",
                  marginBottom: "20px",
                  transform: "perspective(400px) rotateX(4deg)",
                }}
              >
                <span style={{ fontSize: "40px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" }}>
                  🛡️
                </span>
              </div>

              {/* Hero Title */}
              <h1
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "26px",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  color: "#0F172A",
                  letterSpacing: "-0.02em",
                }}
              >
                Segera Periksa,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ARTIKELMU!
                </span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  margin: "0 0 28px 0",
                  fontSize: "13px",
                  lineHeight: "1.55",
                  color: "#64748B",
                  maxWidth: "290px",
                }}
              >
                Evaluasi diferensiasi topik &amp; stilometri draf terhadap Top 3 Google SERP Indonesia.
              </p>

              {/* Quick-Start Action Chips */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <button
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      background: "#EEF2FF",
                      color: "#4F46E5",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    ⚡
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#0F172A",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Muat Sampel Kopi Tubruk
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748B" }}>
                      Resep Kopi Tubruk Tradisional (340 kata)
                    </div>
                  </div>
                  <span style={{ fontSize: "14px", color: "#94A3B8" }}>→</span>
                </button>

                <button
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      background: "#F0FDF4",
                      color: "#16A34A",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    📄
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#0F172A",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Unggah Dokumen Draf
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748B" }}>
                      Mendukung format .md, .txt, .docx (maks 2MB)
                    </div>
                  </div>
                  <span style={{ fontSize: "14px", color: "#94A3B8" }}>→</span>
                </button>
              </div>

              {/* Informational Guidance Tagline */}
              <div
                style={{
                  marginTop: "32px",
                  padding: "12px 14px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px dashed #CBD5E1",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  textAlign: "left",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <span style={{ fontSize: "14px" }}>💡</span>
                <span style={{ fontSize: "11px", color: "#475569", lineHeight: "1.4" }}>
                  <strong>Zero-Friction Engine:</strong> Draf diproses langsung di memori audit peramban secara deterministik tanpa registrasi akun.
                </span>
              </div>
            </div>
          </main>

          {/* Persistent Floating Input Capsule Bar (Fixed Bottom in Frame) */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "12px 16px 20px 16px",
              background: "linear-gradient(to top, #FFFFFF 85%, rgba(255,255,255,0.7) 95%, transparent 100%)",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {/* Context Micro-Bar (Pill Kueri & Word Counter FR-02) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#EEF2FF",
                  border: "1px solid #C7D2FE",
                  color: "#4338CA",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: "600",
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <span>🔍</span>
                <span>resep kopi tubruk tradisional</span>
              </div>

              {/* Word Counter Pill with FR-02 Validation (0 / min. 300 kata) */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "#FFFBEB",
                  border: "1px solid #FDE68A",
                  color: "#B45309",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                <span>0</span>
                <span style={{ color: "#92400E", fontWeight: "400" }}>/ min. 300 kata</span>
              </div>
            </div>

            {/* Main Capsule Container (border-radius: 28px) */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "8px",
                background: "#FFFFFF",
                border: "1px solid #CBD5E1",
                borderRadius: "28px",
                padding: "6px 8px 6px 6px",
                boxShadow: "0 8px 24px -4px rgba(15, 23, 42, 0.12)",
              }}
            >
              {/* Trigger Button (+) for Bottom Sheet Modal */}
              <button
                type="button"
                aria-label="Buka Opsi Audit dan Masukan"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#F1F5F9",
                  border: "1px solid #E2E8F0",
                  color: "#334155",
                  fontSize: "20px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background 0.15s ease",
                }}
              >
                +
              </button>

              {/* Textarea Auto-Grow */}
              <textarea
                rows={1}
                placeholder="Ketik atau tempel naskah (min. 300 kata)..."
                defaultValue=""
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  resize: "none",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  padding: "10px 4px",
                  fontFamily: "inherit",
                  color: "#0F172A",
                  background: "transparent",
                  maxHeight: "80px",
                }}
              />

              {/* Main Submit Button [🛡️ Audit] with Disabled State (FR-02) */}
              <button
                type="button"
                disabled
                style={{
                  height: "40px",
                  padding: "0 14px",
                  borderRadius: "20px",
                  background: "#0F172A",
                  color: "#94A3B8",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "not-allowed",
                  opacity: 0.6,
                  flexShrink: 0,
                }}
              >
                <span>🛡️</span>
                <span>Audit</span>
              </button>
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
                background: "#EEF2FF",
                color: "#4F46E5",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px",
              }}
            >
              Layer 0: Zero-Friction Entry
            </div>
            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "20px",
                fontWeight: "800",
                color: "#0F172A",
              }}
            >
              1. Gatekeeper Landing Mockup
            </h2>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
              Desain ini mengadopsi ergonomi hybrid <strong>Gemini + ChatGPT</strong> dengan prinsip mutlak tanpa form kaku ala ZeroGPT dan tanpa autentikasi wajib.
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
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px", color: "#4F46E5" }}>⚡</span>
                <div>
                  <strong style={{ fontSize: "13px", color: "#0F172A" }}>Quick-Start Action Chips</strong>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                    Mencegah <em>blank-canvas paralysis</em> dengan 1-klik muat sampel uji dan pintasan unggah berkas.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px", color: "#4F46E5" }}>🛡️</span>
                <div>
                  <strong style={{ fontSize: "13px", color: "#0F172A" }}>Floating Input Capsule &amp; Guardrail</strong>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                    Penghitung kata terintegrasi validasi <strong>FR-02</strong> (minimal 300 kata) sebelum tombol eksekusi aktif.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px", color: "#4F46E5" }}>📱</span>
                <div>
                  <strong style={{ fontSize: "13px", color: "#0F172A" }}>Mobile-First Canvas</strong>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                    Dirancang presisi pada rasio 390x844px untuk kenyamanan jempol web editor di perangkat mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#0F172A",
              color: "#E2E8F0",
              borderRadius: "16px",
              padding: "20px",
              fontSize: "12px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ fontWeight: "700", color: "#38BDF8", marginBottom: "6px" }}>
              Spesifikasi Kebutuhan Terhubung:
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li><strong>UC-01 / FR-01:</strong> Input naskah via textarea &amp; unggah dokumen (.md, .txt, .docx).</li>
              <li><strong>FR-02:</strong> Validasi panjang draf minimal 300 kata pada pill counter.</li>
              <li><strong>FR-12:</strong> Tombol navigasi riwayat audit (☰) pada top bar.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  mobile: (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "#FFFFFF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
          borderBottom: "1px solid #F1F5F9",
          background: "#FFFFFF",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          type="button"
          aria-label="Buka Riwayat Audit"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#334155",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          ☰
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(79, 70, 229, 0.3)",
            }}
          >
            <span style={{ fontSize: "14px", lineHeight: 1 }}>🛡️</span>
          </div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#0F172A",
              letterSpacing: "-0.01em",
            }}
          >
            Gatekeeper Audit
          </span>
        </div>
        <button
          type="button"
          aria-label="Menu Opsi"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#64748B",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          ⋮
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
          boxSizing: "border-box",
        }}
      >
        {/* Central Hero Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {/* 3D Shield Icon Container (80x80px) */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 30px rgba(99, 102, 241, 0.35)",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "40px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" }}>
              🛡️
            </span>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              margin: "0 0 10px 0",
              fontSize: "28px",
              fontWeight: "800",
              lineHeight: "1.2",
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Segera Periksa,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ARTIKELMU!
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              margin: "0 0 28px 0",
              fontSize: "14px",
              lineHeight: "1.55",
              color: "#64748B",
              maxWidth: "320px",
            }}
          >
            Evaluasi diferensiasi topik &amp; stilometri draf terhadap Top 3 Google SERP Indonesia.
          </p>

          {/* Quick-Start Action Chips */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                padding: "14px 16px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#EEF2FF",
                  color: "#4F46E5",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                ⚡
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#0F172A",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Muat Sampel Kopi Tubruk
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Resep Kopi Tubruk Tradisional (340 kata)
                </div>
              </div>
              <span style={{ fontSize: "16px", color: "#94A3B8" }}>→</span>
            </button>

            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                padding: "14px 16px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#F0FDF4",
                  color: "#16A34A",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                📄
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#0F172A",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Unggah Dokumen Draf
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Mendukung format .md, .txt, .docx (maks 2MB)
                </div>
              </div>
              <span style={{ fontSize: "16px", color: "#94A3B8" }}>→</span>
            </button>
          </div>
        </div>
      </main>

      {/* Persistent Floating Input Capsule (Fixed Bottom) */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 16px 20px 16px",
          background: "linear-gradient(to top, #FFFFFF 85%, rgba(255,255,255,0.7) 95%, transparent 100%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Context Micro-Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            padding: "0 4px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#EEF2FF",
              border: "1px solid #C7D2FE",
              color: "#4338CA",
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: "600",
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <span>🔍</span>
            <span>resep kopi tubruk tradisional</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              background: "#FFFBEB",
              border: "1px solid #FDE68A",
              color: "#B45309",
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: "600",
              whiteSpace: "nowrap",
            }}
          >
            <span>0</span>
            <span style={{ color: "#92400E", fontWeight: "400" }}>/ min. 300 kata</span>
          </div>
        </div>

        {/* Main Capsule Container */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "8px",
            background: "#FFFFFF",
            border: "1px solid #CBD5E1",
            borderRadius: "28px",
            padding: "6px 8px 6px 6px",
            boxShadow: "0 8px 24px -4px rgba(15, 23, 42, 0.12)",
          }}
        >
          <button
            type="button"
            aria-label="Buka Opsi Audit dan Masukan"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#F1F5F9",
              border: "1px solid #E2E8F0",
              color: "#334155",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            +
          </button>

          <textarea
            rows={1}
            placeholder="Ketik atau tempel naskah (min. 300 kata)..."
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
              color: "#0F172A",
              background: "transparent",
              maxHeight: "80px",
            }}
          />

          <button
            type="button"
            disabled
            style={{
              height: "40px",
              padding: "0 14px",
              borderRadius: "20px",
              background: "#0F172A",
              color: "#94A3B8",
              border: "none",
              fontSize: "13px",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "not-allowed",
              opacity: 0.6,
              flexShrink: 0,
            }}
          >
            <span>🛡️</span>
            <span>Audit</span>
          </button>
        </div>
      </div>
    </div>
  ),
  relatedDocs: [],
});
