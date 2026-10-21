import React from "react";
import { defineScreen } from "@mokly/mokly";

export default defineScreen({
  title: "3. Hasil Audit White-Box: Status Perlu Revisi (CDS 70%)",
  description:
    "Visualisasi hasil evaluasi white-box editorial draf naskah dengan vonis Perlu Revisi (CDS 70%), rincian stilometri VSM/MATTR/HKO, defisit topik, anotasi 4-warna, dan terminal prompt bantuan.",
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
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "bold",
                  boxShadow: "0 2px 6px rgba(99, 102, 241, 0.3)",
                }}
              >
                🛡️
              </div>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0F172A",
                  letterSpacing: "-0.01em",
                }}
              >
                Hasil Audit Gatekeeper
              </span>
            </div>
            <button
              type="button"
              aria-label="Menu Opsi Audit"
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
            }}
          >
            {/* User Bubble Turn */}
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "92%",
                background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                color: "#FFFFFF",
                borderRadius: "18px 18px 4px 18px",
                padding: "12px 14px",
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  opacity: 0.85,
                  fontWeight: "600",
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
                  opacity: 0.9,
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

            {/* Pipeline Stepper Ringkas */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                padding: "12px 14px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#64748B",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Pipeline Audit Terverifikasi</span>
                <span
                  style={{
                    color: "#059669",
                    background: "#ECFDF5",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontWeight: "600",
                  }}
                >
                  ⏱ 4.8 dtk
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "11.5px",
                  color: "#334155",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
                  <span>Mengambil Top 3 Google SERP (gl=id, hl=id)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
                  <span>Ekstraksi XML Trafilatura H1–H3 (3 artikel valid)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
                  <span>VSM TF-IDF &amp; YAKE Information Gain Set</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
                  <span>Evaluasi Stilometri MATTR &amp; HKO Overlap</span>
                </div>
              </div>
            </div>

            {/* Seksi 1 — Status Kelayakan (Layer 1 Primary Decision Anchor) */}
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
                  {/* Track Abu-abu Netral */}
                  <path
                    d="M 30 110 A 80 80 0 0 1 190 110"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Busur Progres 70% (Amber #F59E0B) */}
                  <path
                    d="M 30 110 A 80 80 0 0 1 190 110"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="251.33"
                    strokeDashoffset="75.40"
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
                  textAlign: "center",
                }}
              >
                ⚠️ <strong>5 poin di bawah ambang lolos (75%)</strong>. Penyebab utama:{" "}
                <strong>3 topik penting</strong> belum dibahas.
              </div>
            </div>

            {/* Seksi 2 — Metrik Stilometri & Leksikal (Layer 2 Guardrails) */}
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
                {/* 1. VSM Cosine Similarity */}
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
                      <span style={{ fontWeight: "700", color: "#0F172A" }}>0.48</span>
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
                  {/* Progress Bar with Threshold Marker */}
                  <div
                    style={{
                      height: "8px",
                      background: "#F1F5F9",
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
                    {/* Tolerance Threshold Line at 60% */}
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
                      title="Batas toleransi ≤ 0.60"
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
                    <span>Batas toleransi ≤ 0.60</span>
                  </div>
                </div>

                {/* 2. MATTR Kekayaan Leksikal */}
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
                      <span style={{ fontWeight: "700", color: "#0F172A" }}>0.61</span>
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
                  {/* Progress Bar */}
                  <div
                    style={{
                      height: "8px",
                      background: "#F1F5F9",
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
                    {/* Minimum Threshold Line at 55% */}
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
                      title="Batas standar ≥ 0.55"
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
                    <span>Batas standar ≥ 0.55</span>
                  </div>
                </div>

                {/* 3. HKO Overlap Sub-judul */}
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
                      <span style={{ fontWeight: "700", color: "#0F172A" }}>25%</span>
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
                  {/* Progress Bar */}
                  <div
                    style={{
                      height: "8px",
                      background: "#F1F5F9",
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
                    {/* Danger Threshold Line at 40% */}
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
                      title="Batas wajar ≤ 40%"
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
                    <span>Repetisi kueri pada H1–H3</span>
                    <span>Batas wajar ≤ 40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seksi 3 — Celah Topik / Information Gain (FR-08) */}
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

              {/* Defisit Topik (Δdeficit = E_serp \ E_draft) */}
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
                  <span>⚠️ Defisit Topik Kompetitor (3 istilah)</span>
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
                    + Takaran Suhu 90°C
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

              {/* Poin Kebaruan Unik (Δgain = E_draft \ E_serp) */}
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
                  <span>✨ Poin Kebaruan Unik (2 istilah)</span>
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
                </div>
              </div>
            </div>

            {/* Seksi 4 — Naskah Terkurasi & Anotasi 4-Warna (FR-11) */}
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

              {/* Grid Legenda Interaktif 2x2 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  marginBottom: "12px",
                }}
              >
                <div
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
                  }}
                >
                  <span style={{ fontSize: "13px" }}>🟨</span>
                  <span>HKO Overlap (Kuning)</span>
                </div>
                <div
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
                  }}
                >
                  <span style={{ fontSize: "13px" }}>🟥</span>
                  <span>Mirip SERP (Merah)</span>
                </div>
                <div
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
                  }}
                >
                  <span style={{ fontSize: "13px" }}>🟦</span>
                  <span>Saran Sisipan (Biru)</span>
                </div>
                <div
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
                  }}
                >
                  <span style={{ fontSize: "13px" }}>🟩</span>
                  <span>Poin Unik (Hijau)</span>
                </div>
              </div>

              {/* Reader Box Naskah (Warm Alabaster Paper, Serif) */}
              <div
                style={{
                  background: "#FAF9F6",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "16px 14px",
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "#1E293B",
                }}
              >
                {/* Heading dengan HKO Kuning */}
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#0F172A",
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

                {/* Paragraf dengan kombinasi warna anotasi */}
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

                {/* Inline Blue Insertion Pill */}
                <div
                  style={{
                    display: "inline-block",
                    margin: "4px 0 10px 0",
                    background: "#E0F2FE",
                    border: "1px dashed #0284C7",
                    color: "#0369A1",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "11.5px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  💡 Saran Sisipan: + suhu air 90°C · rasio 1:15 · tingkat gilingan bubuk medium-fine
                </div>

                <p style={{ margin: 0 }}>
                  Diamkan selama 3 menit agar ampas mengendap sempurna di dasar cangkir sebelum disajikan
                  hangat bersama camilan tradisional.
                </p>
              </div>

              {/* Kartu Catatan Anotasi Kontekstual Aktif */}
              <div
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
                <div style={{ fontWeight: "700", marginBottom: "2px" }}>
                  🔍 Catatan Diagnostik Kalimat #2 (Kemiripan Tinggi 0.76):
                </div>
                Kalimat memiliki struktur sintaksis yang sangat mirip dengan artikel kompetitor #1
                (seduhkopi.example). Disarankan mengubah formulasi kalimat dan menyisipkan variabel teknis
                suhu seduh 90°C.
              </div>
            </div>

            {/* Seksi 5 — Overview & Prompt Bantuan (Layer 4 Actionable Resolution) */}
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

              {/* Daftar Langkah Bernomor */}
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
                      background: "#EEF2FF",
                      color: "#4F46E5",
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
                    Sisipkan instruksi <strong>suhu seduh optimal (90°C)</strong> dan{" "}
                    <strong>rasio seduh air-kopi (1:15)</strong> pada paragraf pembuatan.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "#EEF2FF",
                      color: "#4F46E5",
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
                      background: "#EEF2FF",
                      color: "#4F46E5",
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
                      background: "#EEF2FF",
                      color: "#4F46E5",
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

              {/* Blok Terminal Dark Mode Prompt Bantuan */}
              <div
                style={{
                  background: "#0F172A",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "#E2E8F0",
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
                  <span style={{ color: "#38BDF8" }}>UTF-8</span>
                </div>
                <pre
                  style={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    lineHeight: 1.5,
                    color: "#CBD5E1",
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

              {/* Tombol Salin Prompt */}
              <button
                type="button"
                style={{
                  width: "100%",
                  height: "40px",
                  background: "#4F46E5",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "12.5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  boxShadow: "0 2px 8px rgba(79, 70, 229, 0.25)",
                }}
              >
                <span>📋</span>
                <span>Salin Prompt Remediasi</span>
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
            <span>⚠️ White-Box Audit Diagnostic State</span>
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
            Layar 3: Audit Perlu Revisi (CDS 70%)
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
            semi-circle radial gauge, defisit entitas YAKE, dan prompt remediasi otomatis.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                borderLeft: "4px solid #F59E0B",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
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
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
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
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
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
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
                4. Naskah Terkurasi Anotasi 4-Warna (FR-11)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Permukaan baca kertas serif (#FAF9F6) dengan 4 sorotan stabilo pastel (kuning, merah,
                biru, hijau) serta kartu catatan diagnostik aktif.
              </div>
            </div>

            <div
              style={{
                borderLeft: "4px solid #6366F1",
                paddingLeft: "12px",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "13px", color: "#0F172A" }}>
                5. Terminal Remediasi AI (Layer 4)
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>
                Kotak kode gelap (#0F172A) berisi prompt terstruktur yang memadukan draf asli dan arahan
                perbaikan untuk LLM pihak ketiga.
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
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0284C7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            🛡️
          </div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#0F172A",
            }}
          >
            Hasil Audit Gatekeeper
          </span>
        </div>
        <button
          type="button"
          aria-label="Menu Opsi Audit"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            color: "#334155",
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
        {/* User Bubble Turn */}
        <div
          style={{
            alignSelf: "flex-end",
            maxWidth: "92%",
            background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
            color: "#FFFFFF",
            borderRadius: "18px 18px 4px 18px",
            padding: "12px 14px",
            boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              opacity: 0.85,
              fontWeight: "600",
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
              opacity: 0.9,
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

        {/* Pipeline Stepper Ringkas */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "14px",
            padding: "12px 14px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: "700",
              color: "#64748B",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Pipeline Audit Terverifikasi</span>
            <span
              style={{
                color: "#059669",
                background: "#ECFDF5",
                padding: "2px 6px",
                borderRadius: "4px",
                fontWeight: "600",
              }}
            >
              ⏱ 4.8 dtk
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "11.5px",
              color: "#334155",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
              <span>Mengambil Top 3 Google SERP (gl=id, hl=id)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
              <span>Ekstraksi XML Trafilatura H1–H3 (3 artikel valid)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
              <span>VSM TF-IDF &amp; YAKE Information Gain Set</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
              <span>Evaluasi Stilometri MATTR &amp; HKO Overlap</span>
            </div>
          </div>
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
                stroke="#E2E8F0"
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
              textAlign: "center",
            }}
          >
            ⚠️ <strong>5 poin di bawah ambang lolos (75%)</strong>. Penyebab utama:{" "}
            <strong>3 topik penting</strong> belum dibahas.
          </div>
        </div>

        {/* Seksi 2 — Metrik Stilometri & Leksikal */}
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
                  <span style={{ fontWeight: "700", color: "#0F172A" }}>0.48</span>
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
                  background: "#F1F5F9",
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
                  title="Batas toleransi ≤ 0.60"
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
                <span>Batas toleransi ≤ 0.60</span>
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
                  <span style={{ fontWeight: "700", color: "#0F172A" }}>0.61</span>
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
                  background: "#F1F5F9",
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
                  title="Batas standar ≥ 0.55"
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
                <span>Batas standar ≥ 0.55</span>
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
                  <span style={{ fontWeight: "700", color: "#0F172A" }}>25%</span>
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
                  background: "#F1F5F9",
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
                  title="Batas wajar ≤ 40%"
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
                <span>Repetisi kueri pada H1–H3</span>
                <span>Batas wajar ≤ 40%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seksi 3 — Celah Topik */}
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
              <span>⚠️ Defisit Topik Kompetitor (3 istilah)</span>
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
                + Takaran Suhu 90°C
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
              <span>✨ Poin Kebaruan Unik (2 istilah)</span>
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
            </div>
          </div>
        </div>

        {/* Seksi 4 — Naskah Terkurasi & Anotasi 4-Warna */}
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
            <div
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
              }}
            >
              <span style={{ fontSize: "13px" }}>🟨</span>
              <span>HKO Overlap (Kuning)</span>
            </div>
            <div
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
              }}
            >
              <span style={{ fontSize: "13px" }}>🟥</span>
              <span>Mirip SERP (Merah)</span>
            </div>
            <div
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
              }}
            >
              <span style={{ fontSize: "13px" }}>🟦</span>
              <span>Saran Sisipan (Biru)</span>
            </div>
            <div
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
              }}
            >
              <span style={{ fontSize: "13px" }}>🟩</span>
              <span>Poin Unik (Hijau)</span>
            </div>
          </div>

          <div
            style={{
              background: "#FAF9F6",
              border: "1px solid #E2E8F0",
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
                color: "#0F172A",
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
                display: "inline-block",
                margin: "4px 0 10px 0",
                background: "#E0F2FE",
                border: "1px dashed #0284C7",
                color: "#0369A1",
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "11.5px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
              }}
            >
              💡 Saran Sisipan: + suhu air 90°C · rasio 1:15 · tingkat gilingan bubuk medium-fine
            </div>

            <p style={{ margin: 0 }}>
              Diamkan selama 3 menit agar ampas mengendap sempurna di dasar cangkir sebelum disajikan
              hangat bersama camilan tradisional.
            </p>
          </div>

          <div
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
            <div style={{ fontWeight: "700", marginBottom: "2px" }}>
              🔍 Catatan Diagnostik Kalimat #2 (Kemiripan Tinggi 0.76):
            </div>
            Kalimat memiliki struktur sintaksis yang sangat mirip dengan artikel kompetitor #1
            (seduhkopi.example). Disarankan mengubah formulasi kalimat dan menyisipkan variabel teknis
            suhu seduh 90°C.
          </div>
        </div>

        {/* Seksi 5 — Overview & Prompt Bantuan */}
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
                  background: "#EEF2FF",
                  color: "#4F46E5",
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
                Sisipkan instruksi <strong>suhu seduh optimal (90°C)</strong> dan{" "}
                <strong>rasio seduh air-kopi (1:15)</strong> pada paragraf pembuatan.
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#EEF2FF",
                  color: "#4F46E5",
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
                  background: "#EEF2FF",
                  color: "#4F46E5",
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
                  background: "#EEF2FF",
                  color: "#4F46E5",
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
              background: "#0F172A",
              borderRadius: "12px",
              padding: "12px",
              color: "#E2E8F0",
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
              <span style={{ color: "#38BDF8" }}>UTF-8</span>
            </div>
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                lineHeight: 1.5,
                color: "#CBD5E1",
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
              background: "#4F46E5",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "12.5px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              boxShadow: "0 2px 8px rgba(79, 70, 229, 0.25)",
            }}
          >
            <span>📋</span>
            <span>Salin Prompt Remediasi</span>
          </button>
        </div>
      </main>
    </div>
  ),
  relatedDocs: [],
});

