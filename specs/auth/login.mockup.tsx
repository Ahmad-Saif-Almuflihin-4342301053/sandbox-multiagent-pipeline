import React from "react";
import { defineScreen } from "@mokly/mokly";

export default defineScreen({
  title: "Admin Login & 2FA Gate",
  description: "Halaman autentikasi aman dengan proteksi brute-force dan single session active.",
  desktop: (
    <div style={{
      fontFamily: "Inter, system-ui, sans-serif",
      background: "linear-gradient(135deg, #01006A 0%, #000038 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    }}>
      <div style={{
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "420px",
        padding: "36px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "#eff6ff",
            color: "#01006A",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "12px"
          }}>
            🛡️
          </div>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0f172a" }}>Masuk ke Portal</h2>
          <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: "#64748b" }}>
            Sistem Tata Kelola Multi-Tenant Terpadu
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>
              Email / Identitas Akses
            </label>
            <input
              type="email"
              placeholder="admin@sekolah.id"
              defaultValue="superadmin@sistemsekolah.id"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "22px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                Kata Sandi
              </label>
              <span style={{ fontSize: "12px", color: "#00A3FF", fontWeight: "500", cursor: "pointer" }}>
                Lupa sandi?
              </span>
            </div>
            <input
              type="password"
              defaultValue="••••••••••••"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none"
              }}
            />
          </div>

          <button
            type="button"
            style={{
              width: "100%",
              background: "#01006A",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "11px 16px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
          >
            Masuk ke Akun
          </button>
        </form>

        <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f1f5f9", textAlign: "center" }}>
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>
            Dilindungi enkripsi TLS & sesi idle 15 menit
          </span>
        </div>
      </div>
    </div>
  ),
  mobile: (
    <div style={{
      fontFamily: "Inter, system-ui, sans-serif",
      background: "#ffffff",
      minHeight: "100vh",
      padding: "28px 20px"
    }}>
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#01006A" }}>Portal Akses</h2>
        <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#64748b" }}>Masuk dengan akun terdaftar</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}>
          Email
        </label>
        <input
          type="email"
          placeholder="admin@sekolah.id"
          style={{ width: "100%", padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}>
          Kata Sandi
        </label>
        <input
          type="password"
          style={{ width: "100%", padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
        />
      </div>

      <button
        style={{
          width: "100%",
          background: "#01006A",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          padding: "12px",
          fontSize: "14px",
          fontWeight: "600"
        }}
      >
        Masuk
      </button>
    </div>
  ),
  relatedDocs: [],
});
