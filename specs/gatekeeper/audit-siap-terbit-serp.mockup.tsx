import React from "react";
import { defineScreen } from "@mokly/mokly";

export default defineScreen({
  title: "4. Iterasi Revisi Lolos (CDS 85%), Top 3 SERP & Ekspor",
  description:
    "Visualisasi hasil iterasi revisi naskah yang berhasil lolos ambang batas (CDS 85% Siap Terbit), 3 kartu referensi artikel Top 3 SERP, indikator graceful degradation, dan overlay menu ekspor/snapshot.",
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
          maxWidth: "1040px",
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
          {/* Top Notch Simulation */}
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

          {/* Top Header */}
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
              aria-label="Kembali ke Daftar Riwayat"
              style={{
                background: "transparent",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: "#334155",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              ←
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
                  background: "linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "bold",
                  boxShadow: "0 2px 6px rgba(16, 185, 129, 0.3)",
                }}
              >
                ✓
              </div>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0F172A",
                  letterSpacing: "-0.01em",
                }}
              >
                Gatekeeper · Siap Terbit
              </span>
            </div>
            <button
              type="button"
              aria-label="Menu Opsi Audit Aktif"
              style={{
                background: "#F1F5F9",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: "#0F172A",
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

          {/* Scrollable Audit Feed Content */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px 28px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              background: "#F8FAFC",
              position: "relative",
            }}
          >
            {/* Divider Iterasi */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                margin: "4px 0",
              }}
            >
              <div style={{ height: "1px", background: "#CBD5E1", flex: 1 }} />
              <span
                style={{
                  background: "#ECFDF5",
                  color: "#047857",
                  border: "1px solid #A7F3D0",
                  fontSize: "11px",
                  fontWeight: "700",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  letterSpacing: "0.02em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>✓</span>
                <span>Iterasi Revisi Naskah · Versi 2</span>
              </span>
              <div style={{ height: "1px", background: "#CBD5E1", flex: 1 }} />
            </div>

            {/* User Bubble Turn Versi 2 */}
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "92%",
                background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
                color: "#FFFFFF",
                borderRadius: "18px 18px 4px 18px",
                padding: "12px 14px",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  opacity: 0.9,
                  fontWeight: "600",
                  marginBottom: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <span>Draf Revisi · Versi 2</span>
                <span>410 kata</span>
              </div>
              <p
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "13px",
                  fontWeight: "600",
                  lineHeight: 1.4,
                }}
              >
                🔍 &ldquo;resep kopi tubruk tradisional&rdquo;
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  opacity: 0.95,
                  lineHeight: 1.4,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                Resep kopi tubruk sempurna: rasio seduh 1:15, air bersuhu 90°C, tingkat gilingan
                medium-fine Robusta Dampit dengan pemanis aren alami...
              </p>
            </div>

            {/* Seksi 1 — Status Kelayakan Lolos (CDS 85%) */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "18px 16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Header Kartu */}
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
                      color: "#0F172A",
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
                    background: "#ECFDF5",
                    color: "#047857",
                    border: "1px solid #A7F3D0",
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
                      background: "#10B981",
                    }}
                  />
                  Siap Terbit
                </span>
              </div>

              {/* Semi-Circle Radial Gauge 85% (Emerald #10B981) */}
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
                  aria-label="Gauge Skor CDS 85 persen, status lolos di atas ambang batas 75 persen"
                  role="img"
                >
                  {/* Track Abu-abu Netral */}
                  <path
                    d="M 30 110 A 80 80 0 0 1 190 110"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Busur Progres 85% (Emerald #10B981) */}
                  <path
                    d="M 30 110 A 80 80 0 0 1 190 110"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="251.33"
                    strokeDashoffset="37.70"
                  />
                  {/* Garis Penanda Ambang Lolos 75% (Tick 45 deg) */}
                  <line
                    x1="159.50"
                    y1="60.50"
                    x2="173.64"
                    y2="46.36"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Label Teks Ambang Batas 75 */}
                  <text
                    x="180"
                    y="42"
                    fontSize="9.5"
                    fontWeight="700"
                    fill="#0F172A"
                    textAnchor="start"
                  >
                    75% Lolos
                  </text>
                  {/* Angka Skor CDS Utama */}
                  <text
                    x="110"
                    y="102"
                    textAnchor="middle"
                    fontSize="38"
                    fontWeight="800"
                    fill="#0F172A"
                    fontFamily="'Inter', sans-serif"
                  >
                    85%
                  </text>
                </svg>
              </div>

              {/* Keterangan Sukses Kausal */}
              <div
                style={{
                  width: "100%",
                  background: "#ECFDF5",
                  border: "1px solid #A7F3D0",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "#065F46",
                  lineHeight: 1.5,
                  textAlign: "center",
                }}
              >
                🎉 <strong>10 poin di atas ambang lolos (75%)</strong>. Draf berhasil melengkapi
                seluruh entitas kompetitor dan mempertahankan diferensiasi unik.
              </div>
            </div>

            {/* Seksi Ringkasan Celah Topik Terpenuhi (FR-08) */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#0F172A",
                  marginBottom: "4px",
                }}
              >
                Celah Topik · Information Gain Terpenuhi
              </div>
              <div
                style={{
                  fontSize: "11.5px",
                  color: "#64748B",
                  marginBottom: "12px",
                }}
              >
                Status integrasi entitas draf vs korpus Top 3 SERP
              </div>

              {/* Defisit Topik 0 istilah */}
              <div style={{ marginBottom: "12px" }}>
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
                  <span>✓ Defisit Topik Kompetitor (0 istilah)</span>
                </div>
                <div
                  style={{
                    background: "#F0FDF4",
                    border: "1px dashed #86EFAC",
                    borderRadius: "8px",
                    padding: "8px 10px",
                    fontSize: "11.5px",
                    color: "#166534",
                    fontWeight: "600",
                  }}
                >
                  ✓ Seluruh entitas penting kompetitor telah dibahas secara proporsional.
                </div>
              </div>

              {/* Poin Kebaruan Unik (4 istilah) */}
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
                  <span>✨ Poin Kebaruan Unik (4 istilah)</span>
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
                    }}
                  >
                    ✓ Robusta Dampit
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
                    }}
                  >
                    ✓ Pemanis Aren Alami
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
                    }}
                  >
                    ✓ Endapan 3 Menit
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
                    }}
                  >
                    ✓ Aroma Karamel Sangrai
                  </span>
                </div>
              </div>
            </div>

            {/* Seksi 6 — Referensi SERP Top 3 Google (FR-03, FR-04, FR-05) */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#0F172A",
                  marginBottom: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Referensi Top 3 Google SERP</span>
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: "600",
                    background: "#F1F5F9",
                    color: "#475569",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  gl=id · hl=id
                </span>
              </div>

              {/* Info Filter FR-04 */}
              <div
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  background: "#F8FAFC",
                  padding: "6px 8px",
                  borderRadius: "6px",
                  marginBottom: "12px",
                  lineHeight: 1.4,
                  border: "1px solid #F1F5F9",
                }}
              >
                ℹ️ Menampilkan 3 artikel informasional organik (URL non-artikel/marketplace/video
                disaring otomatis).
              </div>

              {/* Daftar Kartu SERP */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* Kartu Kompetitor #1 */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#0F172A",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        1
                      </span>
                      <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>
                        seduhkopi.example
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "10.5px",
                        background: "#ECFDF5",
                        color: "#047857",
                        fontWeight: "700",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Cosine 0.48
                    </span>
                  </div>
                  <h4
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#0F172A",
                      lineHeight: 1.35,
                    }}
                  >
                    Cara Membuat Kopi Tubruk Nikmat ala Warung Kopi
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "10.5px",
                      color: "#64748B",
                    }}
                  >
                    <span>1.180 kata · Trafilatura XML</span>
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#4F46E5",
                        fontWeight: "600",
                        cursor: "pointer",
                        padding: 0,
                        fontSize: "11px",
                      }}
                    >
                      Buka Tautan ↗
                    </button>
                  </div>
                </div>

                {/* Kartu Kompetitor #2 */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#0F172A",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        2
                      </span>
                      <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>
                        resepnusantara.example
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "10.5px",
                        background: "#ECFDF5",
                        color: "#047857",
                        fontWeight: "700",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Cosine 0.41
                    </span>
                  </div>
                  <h4
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#0F172A",
                      lineHeight: 1.35,
                    }}
                  >
                    Resep Kopi Tubruk Tradisional: Bahan, Takaran, dan Langkah
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "10.5px",
                      color: "#64748B",
                    }}
                  >
                    <span>940 kata · Trafilatura XML</span>
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#4F46E5",
                        fontWeight: "600",
                        cursor: "pointer",
                        padding: 0,
                        fontSize: "11px",
                      }}
                    >
                      Buka Tautan ↗
                    </button>
                  </div>
                </div>

                {/* Kartu Kompetitor #3 */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#0F172A",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        3
                      </span>
                      <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>
                        ngopidulu.example
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "10.5px",
                        background: "#ECFDF5",
                        color: "#047857",
                        fontWeight: "700",
                        padding: "1px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      Cosine 0.33
                    </span>
                  </div>
                  <h4
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#0F172A",
                      lineHeight: 1.35,
                    }}
                  >
                    Kopi Tubruk: Sejarah, Cara Seduh, dan Tips Anti Ampas
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "10.5px",
                      color: "#64748B",
                    }}
                  >
                    <span>1.420 kata · Trafilatura XML</span>
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#4F46E5",
                        fontWeight: "600",
                        cursor: "pointer",
                        padding: 0,
                        fontSize: "11px",
                      }}
                    >
                      Buka Tautan ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Visualisasi State Degradasi Parsial (FR-13 Graceful Degradation) */}
            <div
              style={{
                background: "#FFFBEB",
                border: "1px solid #FDE68A",
                borderRadius: "14px",
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#B45309",
                  marginBottom: "4px",
                }}
              >
                <span>⚠️ Preview Status Degradasi Parsial (FR-13)</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "11.5px",
                  color: "#92400E",
                  lineHeight: 1.5,
                }}
              >
                1 URL kompetitor terproteksi anti-bot dan diabaikan. Audit dieksekusi secara
                proporsional menggunakan 2 korpus kompetitor valid (FR-13).
              </p>
            </div>
          </div>

          {/* Overlay Menu Titik Tiga (UC-05 / FR-12) */}
          <div
            style={{
              position: "absolute",
              top: "70px",
              right: "16px",
              width: "240px",
              background: "#FFFFFF",
              borderRadius: "14px",
              boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 0 0 1px rgba(0,0,0,0.05)",
              border: "1px solid #E2E8F0",
              padding: "6px",
              zIndex: 30,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "6px 10px 4px 10px",
              }}
            >
              Manajemen Sesi &amp; Ekspor
            </div>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#334155",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📋</span>
              <span>Salin Ringkasan Hasil</span>
            </button>
            <button
              type="button"
              style={{
                background: "#EEF2FF",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#4F46E5",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>💾</span>
              <span>Unduh Snapshot Laporan (JSON)</span>
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
                color: "#334155",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📄</span>
              <span>Salin Teks Artikel Bersih</span>
            </button>
            <div style={{ height: "1px", background: "#F1F5F9", margin: "4px 0" }} />
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "8px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                color: "#EF4444",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>🗑️</span>
              <span>Hapus Sesi Ini</span>
            </button>
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
              background: "#ECFDF5",
              color: "#047857",
              border: "1px solid #A7F3D0",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            <span>✓ Siap Terbit &amp; Export State</span>
          </div>

          <h2
            style={{
              margin: "0 0 10px 0",
              fontSize: "22px",
              fontWeight: "800",
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Layar 4: Iterasi Revisi Lolos (CDS 85%) &amp; Top 3 SERP
          </h2>

          <p
            style={{
              margin: "0 0 20px 0",
              fontSize: "14px",
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            Mendokumentasikan siklus penyelesaian revisi draf hingga lolos ambang batas kelayakan
            (CDS 85%), transparansi perbandingan terhadap korpus Top 3 Google SERP, pengujian degradasi
            parsial, dan mekanisme ekspor data JSON.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                borderLeft: "4px solid #10B981",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
                1. Vonis Siap Terbit (CDS 85%)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                SVG Radial Gauge melampaui ambang batas lolos (75%), defisit entitas berkurang menjadi 0,
                dan poin kebaruan unik bertambah menjadi 4 istilah.
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #3B82F6",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
                2. Kartu Referensi Top 3 SERP (FR-03, FR-04, FR-05)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                3 artikel kompetitor organik hasil filter URL non-artikel, lengkap dengan pairwise
                Cosine score dan jumlah kata bersih Trafilatura XML.
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #F59E0B",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
                3. Pencegahan Kegagalan / Degradasi Parsial (FR-13)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Visualisasi banner tenang saat 1 URL gagal diakses bot, memastikan sistem tetap
                beroperasi proporsional tanpa crash.
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #6366F1",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
                4. Menu Utilitas Titik Tiga (UC-05 / FR-12)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Opsi ekspor snapshot laporan JSON, salin ringkasan hasil audit, salin naskah bersih,
                serta pembersihan sesi SQLite.
              </div>
            </div>
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
          borderBottom: "1px solid #F1F5F9",
          background: "#FFFFFF",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <button
          type="button"
          aria-label="Kembali ke Daftar Riwayat"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            color: "#334155",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
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
              background: "linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            ✓
          </div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#0F172A",
            }}
          >
            Gatekeeper · Siap Terbit
          </span>
        </div>
        <button
          type="button"
          aria-label="Menu Opsi Audit Aktif"
          style={{
            background: "#F1F5F9",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            color: "#0F172A",
            padding: "8px",
          }}
        >
          ⋮
        </button>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "16px 14px 28px 14px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* Divider Iterasi */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            margin: "4px 0",
          }}
        >
          <div style={{ height: "1px", background: "#CBD5E1", flex: 1 }} />
          <span
            style={{
              background: "#ECFDF5",
              color: "#047857",
              border: "1px solid #A7F3D0",
              fontSize: "11px",
              fontWeight: "700",
              padding: "4px 10px",
              borderRadius: "20px",
              letterSpacing: "0.02em",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span>✓</span>
            <span>Iterasi Revisi Naskah · Versi 2</span>
          </span>
          <div style={{ height: "1px", background: "#CBD5E1", flex: 1 }} />
        </div>

        {/* User Bubble Turn Versi 2 */}
        <div
          style={{
            alignSelf: "flex-end",
            maxWidth: "92%",
            background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
            color: "#FFFFFF",
            borderRadius: "18px 18px 4px 18px",
            padding: "12px 14px",
            boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              opacity: 0.9,
              fontWeight: "600",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <span>Draf Revisi · Versi 2</span>
            <span>410 kata</span>
          </div>
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: "13px",
              fontWeight: "600",
              lineHeight: 1.4,
            }}
          >
            🔍 &ldquo;resep kopi tubruk tradisional&rdquo;
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              opacity: 0.95,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            Resep kopi tubruk sempurna: rasio seduh 1:15, air bersuhu 90°C, tingkat gilingan
            medium-fine Robusta Dampit dengan pemanis aren alami...
          </p>
        </div>

        {/* Seksi 1 — Status Kelayakan */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "18px",
            padding: "18px 16px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
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
                  color: "#0F172A",
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
                background: "#ECFDF5",
                color: "#047857",
                border: "1px solid #A7F3D0",
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
                  background: "#10B981",
                }}
              />
              Siap Terbit
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
              aria-label="Gauge Skor CDS 85 persen, status lolos di atas ambang batas 75 persen"
              role="img"
            >
              <path
                d="M 30 110 A 80 80 0 0 1 190 110"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M 30 110 A 80 80 0 0 1 190 110"
                fill="none"
                stroke="#10B981"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="251.33"
                strokeDashoffset="37.70"
              />
              <line
                x1="159.50"
                y1="60.50"
                x2="173.64"
                y2="46.36"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <text
                x="180"
                y="42"
                fontSize="9.5"
                fontWeight="700"
                fill="#0F172A"
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
                fill="#0F172A"
                fontFamily="'Inter', sans-serif"
              >
                85%
              </text>
            </svg>
          </div>

          <div
            style={{
              width: "100%",
              background: "#ECFDF5",
              border: "1px solid #A7F3D0",
              borderRadius: "10px",
              padding: "10px 12px",
              marginTop: "6px",
              fontSize: "12px",
              color: "#065F46",
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            🎉 <strong>10 poin di atas ambang lolos (75%)</strong>. Draf berhasil melengkapi
            seluruh entitas kompetitor dan mempertahankan diferensiasi unik.
          </div>
        </div>

        {/* Seksi Celah Topik Terpenuhi */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "18px",
            padding: "16px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "4px",
            }}
          >
            Celah Topik · Information Gain Terpenuhi
          </div>
          <div
            style={{
              fontSize: "11.5px",
              color: "#64748B",
              marginBottom: "12px",
            }}
          >
            Status integrasi entitas draf vs korpus Top 3 SERP
          </div>

          <div style={{ marginBottom: "12px" }}>
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
              <span>✓ Defisit Topik Kompetitor (0 istilah)</span>
            </div>
            <div
              style={{
                background: "#F0FDF4",
                border: "1px dashed #86EFAC",
                borderRadius: "8px",
                padding: "8px 10px",
                fontSize: "11.5px",
                color: "#166534",
                fontWeight: "600",
              }}
            >
              ✓ Seluruh entitas penting kompetitor telah dibahas secara proporsional.
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
              <span>✨ Poin Kebaruan Unik (4 istilah)</span>
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
                }}
              >
                ✓ Robusta Dampit
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
                }}
              >
                ✓ Pemanis Aren Alami
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
                }}
              >
                ✓ Endapan 3 Menit
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
                }}
              >
                ✓ Aroma Karamel Sangrai
              </span>
            </div>
          </div>
        </div>

        {/* Seksi 6 — Referensi SERP Top 3 Google */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "18px",
            padding: "16px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Referensi Top 3 Google SERP</span>
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: "600",
                background: "#F1F5F9",
                color: "#475569",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              gl=id · hl=id
            </span>
          </div>

          <div
            style={{
              fontSize: "11px",
              color: "#64748B",
              background: "#F8FAFC",
              padding: "6px 8px",
              borderRadius: "6px",
              marginBottom: "12px",
              lineHeight: 1.4,
              border: "1px solid #F1F5F9",
            }}
          >
            ℹ️ Menampilkan 3 artikel informasional organik (URL non-artikel/marketplace/video
            disaring otomatis).
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#0F172A",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    1
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>
                    seduhkopi.example
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "10.5px",
                    background: "#ECFDF5",
                    color: "#047857",
                    fontWeight: "700",
                    padding: "1px 6px",
                    borderRadius: "4px",
                  }}
                >
                  Cosine 0.48
                </span>
              </div>
              <h4
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#0F172A",
                  lineHeight: 1.35,
                }}
              >
                Cara Membuat Kopi Tubruk Nikmat ala Warung Kopi
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "10.5px",
                  color: "#64748B",
                }}
              >
                <span>1.180 kata · Trafilatura XML</span>
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#4F46E5",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "11px",
                  }}
                >
                  Buka Tautan ↗
                </button>
              </div>
            </div>

            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#0F172A",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    2
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>
                    resepnusantara.example
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "10.5px",
                    background: "#ECFDF5",
                    color: "#047857",
                    fontWeight: "700",
                    padding: "1px 6px",
                    borderRadius: "4px",
                  }}
                >
                  Cosine 0.41
                </span>
              </div>
              <h4
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#0F172A",
                  lineHeight: 1.35,
                }}
              >
                Resep Kopi Tubruk Tradisional: Bahan, Takaran, dan Langkah
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "10.5px",
                  color: "#64748B",
                }}
              >
                <span>940 kata · Trafilatura XML</span>
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#4F46E5",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "11px",
                  }}
                >
                  Buka Tautan ↗
                </button>
              </div>
            </div>

            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#0F172A",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    3
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>
                    ngopidulu.example
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "10.5px",
                    background: "#ECFDF5",
                    color: "#047857",
                    fontWeight: "700",
                    padding: "1px 6px",
                    borderRadius: "4px",
                  }}
                >
                  Cosine 0.33
                </span>
              </div>
              <h4
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#0F172A",
                  lineHeight: 1.35,
                }}
              >
                Kopi Tubruk: Sejarah, Cara Seduh, dan Tips Anti Ampas
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "10.5px",
                  color: "#64748B",
                }}
              >
                <span>1.420 kata · Trafilatura XML</span>
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#4F46E5",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "11px",
                  }}
                >
                  Buka Tautan ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visualisasi State Degradasi Parsial */}
        <div
          style={{
            background: "#FFFBEB",
            border: "1px solid #FDE68A",
            borderRadius: "14px",
            padding: "12px 14px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: "700",
              color: "#B45309",
              marginBottom: "4px",
            }}
          >
            <span>⚠️ Preview Status Degradasi Parsial (FR-13)</span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "11.5px",
              color: "#92400E",
              lineHeight: 1.5,
            }}
          >
            1 URL kompetitor terproteksi anti-bot dan diabaikan. Audit dieksekusi secara proporsional
            menggunakan 2 korpus kompetitor valid (FR-13).
          </p>
        </div>
      </main>

      {/* Overlay Menu Titik Tiga (UC-05 / FR-12) */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "14px",
          width: "230px",
          background: "#FFFFFF",
          borderRadius: "14px",
          boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.2), 0 0 0 1px rgba(0,0,0,0.05)",
          border: "1px solid #E2E8F0",
          padding: "6px",
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            fontWeight: "700",
            color: "#94A3B8",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "6px 10px 4px 10px",
          }}
        >
          Manajemen Sesi &amp; Ekspor
        </div>
        <button
          type="button"
          style={{
            background: "transparent",
            border: "none",
            textAlign: "left",
            padding: "8px 10px",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#334155",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>📋</span>
          <span>Salin Ringkasan Hasil</span>
        </button>
        <button
          type="button"
          style={{
            background: "#EEF2FF",
            border: "none",
            textAlign: "left",
            padding: "8px 10px",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#4F46E5",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>💾</span>
          <span>Unduh Snapshot Laporan (JSON)</span>
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
            color: "#334155",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>📄</span>
          <span>Salin Teks Artikel Bersih</span>
        </button>
        <div style={{ height: "1px", background: "#F1F5F9", margin: "4px 0" }} />
        <button
          type="button"
          style={{
            background: "transparent",
            border: "none",
            textAlign: "left",
            padding: "8px 10px",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#EF4444",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>🗑️</span>
          <span>Hapus Sesi Ini</span>
        </button>
      </div>
    </div>
  ),
  relatedDocs: [],
});
