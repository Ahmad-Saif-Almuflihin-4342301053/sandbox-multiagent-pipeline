import React from "react";
import { defineScreen } from "@mokly/mokly";

export default defineScreen({
  title: "2. Opsi Masukan, Ambang Batas & Riwayat Sesi",
  description: "Modal Bottom Sheet untuk opsi masukan (file, kueri target, sampel demo, ambang batas UC-06) dan Sidebar Drawer Riwayat Sesi Audit SQLite (FR-12).",
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
          gap: "36px",
          maxWidth: "1120px",
          width: "100%",
        }}
      >
        {/* Device Frame 1: View A - Bottom Sheet Modal Opsi Masukan & Ambang Batas */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#475569",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            View A: Bottom Sheet Modal (UC-01 &amp; UC-06)
          </div>
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
            {/* Backdrop Dimming Effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(15, 23, 42, 0.5)",
                zIndex: 10,
              }}
            />

            {/* Bottom Sheet Container */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                maxHeight: "90%",
                background: "#FFFFFF",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                boxShadow: "0 -10px 40px rgba(0,0,0,0.2)",
                zIndex: 20,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Sheet Handle */}
              <div
                style={{
                  padding: "10px 0 6px 0",
                  display: "flex",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "4px",
                    background: "#CBD5E1",
                    borderRadius: "999px",
                  }}
                />
              </div>

              {/* Sheet Header */}
              <div
                style={{
                  padding: "6px 20px 14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #F1F5F9",
                  flexShrink: 0,
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#0F172A",
                    }}
                  >
                    Opsi Masukan &amp; Parameter
                  </h3>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748B" }}>
                    Atur sumber naskah, kueri SERP, dan ambang batas
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#F1F5F9",
                    border: "none",
                    color: "#64748B",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Sheet Content (4 Cards) */}
              <div
                style={{
                  padding: "16px 20px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  maxHeight: "680px",
                }}
              >
                {/* Card 1: File Dokumen (.md, .txt, .docx) */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "14px",
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
                    <span style={{ fontSize: "16px" }}>📄</span>
                    <strong style={{ fontSize: "13px", color: "#0F172A" }}>
                      Unggah File Dokumen
                    </strong>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: "11px",
                        color: "#64748B",
                        background: "#E2E8F0",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Maks. 2MB
                    </span>
                  </div>
                  <div
                    style={{
                      border: "2px dashed #CBD5E1",
                      borderRadius: "10px",
                      padding: "16px",
                      textAlign: "center",
                      background: "#FFFFFF",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "20px", marginBottom: "4px" }}>📥</div>
                    <div style={{ fontSize: "12px", fontWeight: "600", color: "#4F46E5" }}>
                      Pilih berkas .md, .txt, atau .docx
                    </div>
                    <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>
                      Teks naskah akan diekstrak otomatis ke kapsul input
                    </div>
                  </div>
                </div>

                {/* Card 2: Kueri Target */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "14px",
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
                    <span style={{ fontSize: "16px" }}>🔍</span>
                    <strong style={{ fontSize: "13px", color: "#0F172A" }}>
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
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#0F172A",
                        outline: "none",
                        background: "#FFFFFF",
                      }}
                    />
                    <button
                      type="button"
                      style={{
                        background: "#4F46E5",
                        color: "#FFFFFF",
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
                  <div style={{ fontSize: "11px", color: "#64748B", marginTop: "6px" }}>
                    Digunakan untuk scraping otomatis <strong>Top 3 Google SERP Indonesia</strong> (gl=id, hl=id).
                  </div>
                </div>

                {/* Card 3: Sampel Demo */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "14px",
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
                    <span style={{ fontSize: "16px" }}>⚡</span>
                    <strong style={{ fontSize: "13px", color: "#0F172A" }}>
                      Muat Sampel Demo Cepat
                    </strong>
                  </div>
                  <p style={{ margin: "0 0 10px 0", fontSize: "12px", color: "#64748B" }}>
                    Uji coba kapabilitas audit instan dengan dataset draf uji &gt; 300 kata yang telah terverifikasi.
                  </p>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      background: "#FFFFFF",
                      border: "1px solid #C7D2FE",
                      color: "#4338CA",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      cursor: "pointer",
                    }}
                  >
                    <span>☕</span>
                    <span>Muat Draf &quot;Resep Kopi Tubruk Tradisional&quot; (340 kata)</span>
                  </button>
                </div>

                {/* Card 4: Konfigurasi Ambang Batas (UC-06) */}
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #CBD5E1",
                    borderRadius: "14px",
                    padding: "14px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "16px" }}>⚙️</span>
                      <strong style={{ fontSize: "13px", color: "#0F172A" }}>
                        Konfigurasi Ambang Batas (UC-06)
                      </strong>
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#047857",
                        background: "#ECFDF5",
                        padding: "2px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      Baku / Standar
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "8px",
                        borderBottom: "1px solid #F1F5F9",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "600", color: "#0F172A" }}>VSM Cosine Similarity</div>
                        <div style={{ fontSize: "11px", color: "#64748B" }}>Kemiripan TF-IDF thd SERP</div>
                      </div>
                      <span
                        style={{
                          background: "#EEF2FF",
                          color: "#4338CA",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          fontFamily: "monospace",
                        }}
                      >
                        ≤ 0.60
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "8px",
                        borderBottom: "1px solid #F1F5F9",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "600", color: "#0F172A" }}>MATTR (Kekayaan Leksikal)</div>
                        <div style={{ fontSize: "11px", color: "#64748B" }}>Moving-Average TTR (50 token)</div>
                      </div>
                      <span
                        style={{
                          background: "#EEF2FF",
                          color: "#4338CA",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          fontFamily: "monospace",
                        }}
                      >
                        ≥ 0.55
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "8px",
                        borderBottom: "1px solid #F1F5F9",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "600", color: "#0F172A" }}>HKO Overlap (Sub-judul)</div>
                        <div style={{ fontSize: "11px", color: "#64748B" }}>Heading-Keyword Overlap H1–H3</div>
                      </div>
                      <span
                        style={{
                          background: "#EEF2FF",
                          color: "#4338CA",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          fontFamily: "monospace",
                        }}
                      >
                        ≤ 40%
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "600", color: "#0F172A" }}>Skor Lolos Standar (CDS)</div>
                        <div style={{ fontSize: "11px", color: "#64748B" }}>Ambang kelulusan Siap Terbit</div>
                      </div>
                      <span
                        style={{
                          background: "#ECFDF5",
                          color: "#047857",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          fontFamily: "monospace",
                        }}
                      >
                        ≥ 75%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Frame 2: View B - Left Drawer Riwayat Sesi Audit SQLite (FR-12) */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#475569",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            View B: Left Drawer Riwayat Sesi (FR-12)
          </div>
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
            {/* Top Bar inside Drawer */}
            <header
              style={{
                height: "56px",
                padding: "0 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #F1F5F9",
                background: "#0F172A",
                color: "#FFFFFF",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "18px" }}>🗄️</span>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>Riwayat Sesi Audit</span>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  background: "#1E293B",
                  color: "#94A3B8",
                  padding: "3px 8px",
                  borderRadius: "6px",
                }}
              >
                SQLite Local
              </span>
            </header>

            {/* Drawer Body */}
            <div
              style={{
                flex: 1,
                padding: "16px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                boxSizing: "border-box",
                background: "#F8FAFC",
              }}
            >
              {/* Button: [+ Sesi Audit Baru] */}
              <button
                type="button"
                style={{
                  width: "100%",
                  background: "#4F46E5",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(79, 70, 229, 0.25)",
                }}
              >
                <span>+</span>
                <span>Sesi Audit Baru</span>
              </button>

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#64748B",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginTop: "6px",
                }}
              >
                Snapshot Audit Tersimpan (FR-12)
              </div>

              {/* Session Card 1: Siap Terbit (85%) */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #A7F3D0",
                  borderRadius: "12px",
                  padding: "14px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: "#10B981",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                  <h4 style={{ margin: 0, fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>
                    Kopi Tubruk Tradisional
                  </h4>
                  <span
                    style={{
                      background: "#ECFDF5",
                      color: "#047857",
                      fontSize: "11px",
                      fontWeight: "700",
                      padding: "2px 8px",
                      borderRadius: "999px",
                    }}
                  >
                    CDS 85%
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "8px" }}>
                  Versi 2 • 412 kata • Baru saja
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#ECFDF5",
                      color: "#059669",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontWeight: "600",
                    }}
                  >
                    ✓ Lolos Ambang (Siap Terbit)
                  </span>
                  <span style={{ fontSize: "10px", color: "#94A3B8" }}>Δdeficit: 0</span>
                </div>
              </div>

              {/* Session Card 2: Perlu Revisi (70%) */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #FDE68A",
                  borderRadius: "12px",
                  padding: "14px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: "#F59E0B",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                  <h4 style={{ margin: 0, fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>
                    Panduan Kopi Tubruk
                  </h4>
                  <span
                    style={{
                      background: "#FFFBEB",
                      color: "#B45309",
                      fontSize: "11px",
                      fontWeight: "700",
                      padding: "2px 8px",
                      borderRadius: "999px",
                    }}
                  >
                    CDS 70%
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "8px" }}>
                  Versi 1 • 342 kata • 18 menit lalu
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#FFFBEB",
                      color: "#B45309",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontWeight: "600",
                    }}
                  >
                    ⚠ Perlu Revisi
                  </span>
                  <span style={{ fontSize: "10px", color: "#C2410C", fontWeight: "600" }}>
                    3 Defisit Topik
                  </span>
                </div>
              </div>

              {/* Session Card 3: Kritis (62%) */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #FECDD3",
                  borderRadius: "12px",
                  padding: "14px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: "#EF4444",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                  <h4 style={{ margin: 0, fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>
                    Manfaat Kopi Hitam
                  </h4>
                  <span
                    style={{
                      background: "#FFF1F2",
                      color: "#BE123C",
                      fontSize: "11px",
                      fontWeight: "700",
                      padding: "2px 8px",
                      borderRadius: "999px",
                    }}
                  >
                    CDS 62%
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "8px" }}>
                  Versi 1 • 310 kata • Kemarin, 14:22
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      background: "#FFF1F2",
                      color: "#BE123C",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontWeight: "600",
                    }}
                  >
                    ✕ Kritis (Jauh di Bawah)
                  </span>
                  <span style={{ fontSize: "10px", color: "#BE123C", fontWeight: "600" }}>
                    5 Defisit Topik
                  </span>
                </div>
              </div>

              {/* SQLite Storage Status Footer */}
              <div
                style={{
                  marginTop: "auto",
                  padding: "12px",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  fontSize: "11px",
                  color: "#64748B",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>💾</span>
                <span>
                  Tersimpan di <code>gatekeeper_audit.db</code>. Mendukung ekspor snapshot JSON (UC-05).
                </span>
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
                background: "#F1F5F9",
                color: "#0F172A",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "12px",
              }}
            >
              Layer 0 &amp; Manajemen Sesi
            </div>
            <h2
              style={{
                margin: "0 0 10px 0",
                fontSize: "20px",
                fontWeight: "800",
                color: "#0F172A",
              }}
            >
              2. Opsi Masukan &amp; Riwayat Sesi
            </h2>
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
              Layar ini mendemonstrasikan 2 overlay fungsional utama yang mendukung alur kerja audit pra-publikasi:
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
                <strong style={{ fontSize: "13px", color: "#0F172A" }}>
                  1. Bottom Sheet Opsi Masukan (UC-01 &amp; UC-06)
                </strong>
                <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#64748B", lineHeight: "1.5" }}>
                  Dipicu melalui tombol bulat <code>(+)</code> pada kapsul input. Menyediakan kontrol unggah berkas, pengaturan kueri target SERP, pintasan sampel demo, dan transparansi ambang batas kelulusan.
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "13px", color: "#0F172A" }}>
                  2. Left Drawer Riwayat Audit SQLite (FR-12)
                </strong>
                <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#64748B", lineHeight: "1.5" }}>
                  Dipicu melalui ikon hamburger <code>☰</code>. Menyimpan rekam jejak iterasi naskah (Versi 1 vs Versi 2) dengan diferensiasi skor CDS untuk melacak kemajuan revisi editorial.
                </p>
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
              Traceability Kebutuhan:
            </div>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li><strong>UC-01:</strong> Input naskah dan parameter target SERP.</li>
              <li><strong>UC-06:</strong> Konfigurasi ambang batas matematis (VSM, MATTR, HKO, CDS).</li>
              <li><strong>FR-12:</strong> Persistensi riwayat audit lokal berbasis SQLite dan ekspor snapshot.</li>
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
        background: "#F8FAFC",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
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
          borderBottom: "1px solid #E2E8F0",
          background: "#FFFFFF",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "18px" }}>⚙️</span>
          <span style={{ fontSize: "15px", fontWeight: "700", color: "#0F172A" }}>
            Opsi Masukan &amp; Ambang Batas
          </span>
        </div>
        <span
          style={{
            fontSize: "11px",
            color: "#4F46E5",
            background: "#EEF2FF",
            padding: "3px 8px",
            borderRadius: "999px",
            fontWeight: "600",
          }}
        >
          UC-06 / FR-12
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
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "14px",
            padding: "16px",
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
            <span style={{ fontSize: "16px" }}>📄</span>
            <strong style={{ fontSize: "14px", color: "#0F172A" }}>
              Unggah File Dokumen (.md, .txt, .docx)
            </strong>
          </div>
          <div
            style={{
              border: "2px dashed #CBD5E1",
              borderRadius: "10px",
              padding: "16px",
              textAlign: "center",
              background: "#F8FAFC",
            }}
          >
            <div style={{ fontSize: "20px", marginBottom: "4px" }}>📥</div>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#4F46E5" }}>
              Pilih berkas dokumen draf
            </div>
            <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>
              Maksimal ukuran file 2MB
            </div>
          </div>
        </div>

        {/* Card 2: Kueri Target */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "14px",
            padding: "16px",
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
            <span style={{ fontSize: "16px" }}>🔍</span>
            <strong style={{ fontSize: "14px", color: "#0F172A" }}>
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
                border: "1px solid #CBD5E1",
                borderRadius: "8px",
                fontSize: "13px",
                color: "#0F172A",
              }}
            />
            <button
              type="button"
              style={{
                background: "#4F46E5",
                color: "#FFFFFF",
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

        {/* Card 3: Konfigurasi Ambang Batas (UC-06) */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #CBD5E1",
            borderRadius: "14px",
            padding: "16px",
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
              <span style={{ fontSize: "16px" }}>⚙️</span>
              <strong style={{ fontSize: "14px", color: "#0F172A" }}>
                Ambang Batas Kelayakan (UC-06)
              </strong>
            </div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#047857",
                background: "#ECFDF5",
                padding: "2px 8px",
                borderRadius: "999px",
              }}
            >
              Baku
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #F1F5F9" }}>
              <span>VSM Cosine Similarity</span>
              <strong style={{ fontFamily: "monospace", color: "#4338CA" }}>≤ 0.60</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #F1F5F9" }}>
              <span>MATTR (Kekayaan Leksikal)</span>
              <strong style={{ fontFamily: "monospace", color: "#4338CA" }}>≥ 0.55</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #F1F5F9" }}>
              <span>HKO Overlap (Sub-judul)</span>
              <strong style={{ fontFamily: "monospace", color: "#4338CA" }}>≤ 40%</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Skor Lolos Standar (CDS)</span>
              <strong style={{ fontFamily: "monospace", color: "#047857" }}>≥ 75%</strong>
            </div>
          </div>
        </div>

        {/* Section: Riwayat Sesi Audit SQLite (FR-12) */}
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#64748B",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "10px",
            }}
          >
            Riwayat Sesi Audit SQLite (FR-12)
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Riwayat 1 */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #A7F3D0",
                borderRadius: "12px",
                padding: "12px 14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong style={{ fontSize: "13px", color: "#0F172A" }}>Kopi Tubruk Tradisional</strong>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#047857", background: "#ECFDF5", padding: "2px 6px", borderRadius: "4px" }}>
                  CDS 85%
                </span>
              </div>
              <div style={{ fontSize: "11px", color: "#64748B" }}>Versi 2 • Siap Terbit • Lolos Ambang</div>
            </div>

            {/* Riwayat 2 */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #FDE68A",
                borderRadius: "12px",
                padding: "12px 14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong style={{ fontSize: "13px", color: "#0F172A" }}>Panduan Kopi Tubruk</strong>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#B45309", background: "#FFFBEB", padding: "2px 6px", borderRadius: "4px" }}>
                  CDS 70%
                </span>
              </div>
              <div style={{ fontSize: "11px", color: "#64748B" }}>Versi 1 • Perlu Revisi • 3 Defisit</div>
            </div>

            {/* Riwayat 3 */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #FECDD3",
                borderRadius: "12px",
                padding: "12px 14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong style={{ fontSize: "13px", color: "#0F172A" }}>Manfaat Kopi Hitam</strong>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#BE123C", background: "#FFF1F2", padding: "2px 6px", borderRadius: "4px" }}>
                  CDS 62%
                </span>
              </div>
              <div style={{ fontSize: "11px", color: "#64748B" }}>Versi 1 • Kritis • 5 Defisit</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
  relatedDocs: [],
});
