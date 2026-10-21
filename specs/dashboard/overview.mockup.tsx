import React from "react";
import { defineScreen } from "@mokly/mokly";

export default defineScreen({
  title: "SaaS Executive Overview",
  description: "Dashboard tata kelola sekolah, status lisensi, dan pemantauan tenant multi-sekolah.",
  desktop: (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh", padding: "32px" }}>
      {/* Topbar / Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#01006A" }}>
            Ringkasan Tata Kelola Sekolah
          </h1>
          <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#64748b" }}>
            Pantau status lisensi, kuota siswa, dan kesehatan tenant secara real-time.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={{
            background: "#fff",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#334155",
            cursor: "pointer"
          }}>
            Ekspor Laporan
          </button>
          <button style={{
            background: "#01006A",
            border: "none",
            borderRadius: "8px",
            padding: "8px 18px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#fff",
            cursor: "pointer"
          }}>
            + Tambah Sekolah
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px", marginBottom: "28px" }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Total Sekolah Mitra</span>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#01006A", marginTop: "8px" }}>142</div>
          <span style={{ fontSize: "12px", color: "#10B981", fontWeight: "600" }}>↑ 12% dari bulan lalu</span>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Lisensi Aktif</span>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#10B981", marginTop: "8px" }}>128</div>
          <span style={{ fontSize: "12px", color: "#64748b" }}>90.1% tingkat retensi</span>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Masa Tenggang (&lt;14 Hari)</span>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#F59E0B", marginTop: "8px" }}>9</div>
          <span style={{ fontSize: "12px", color: "#F59E0B", fontWeight: "600" }}>Perlu notifikasi tagihan</span>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" }}>Lisensi Dihentikan</span>
          <div style={{ fontSize: "28px", fontWeight: "800", color: "#EF4444", marginTop: "8px" }}>5</div>
          <span style={{ fontSize: "12px", color: "#64748b" }}>Dapat dipulihkan sewaktu-waktu</span>
        </div>
      </div>

      {/* Data Table Section */}
      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <div style={{ padding: "18px 24px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "#1e293b" }}>Daftar Sekolah Aktif</h2>
          <span style={{ fontSize: "13px", color: "#64748b" }}>Menampilkan 3 sekolah terbaru</span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
          <thead>
            <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#475569" }}>
              <th style={{ padding: "14px 24px", fontWeight: "600" }}>Nama Sekolah</th>
              <th style={{ padding: "14px 24px", fontWeight: "600" }}>Domain / Tenant</th>
              <th style={{ padding: "14px 24px", fontWeight: "600" }}>Paket</th>
              <th style={{ padding: "14px 24px", fontWeight: "600" }}>Sisa Hari</th>
              <th style={{ padding: "14px 24px", fontWeight: "600" }}>Status</th>
              <th style={{ padding: "14px 24px", fontWeight: "600", textAlign: "right" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
              <td style={{ padding: "16px 24px", fontWeight: "600", color: "#0f172a" }}>SMA Harapan Bangsa</td>
              <td style={{ padding: "16px 24px", color: "#64748b" }}>smarapan.sistemsekolah.id</td>
              <td style={{ padding: "16px 24px" }}><span style={{ background: "#eff6ff", color: "#1d4ed8", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>Enterprise</span></td>
              <td style={{ padding: "16px 24px", color: "#0f172a", fontWeight: "600" }}>214 Hari</td>
              <td style={{ padding: "16px 24px" }}><span style={{ background: "#ecfdf5", color: "#059669", padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Aktif</span></td>
              <td style={{ padding: "16px 24px", textAlign: "right" }}>
                <button style={{ background: "#f1f5f9", border: "none", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "#01006A", marginRight: "8px", cursor: "pointer" }}>Detail</button>
                <button style={{ background: "transparent", border: "none", fontSize: "16px", cursor: "pointer", color: "#64748b" }}>⋮</button>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
              <td style={{ padding: "16px 24px", fontWeight: "600", color: "#0f172a" }}>SMP IT Al-Hikmah</td>
              <td style={{ padding: "16px 24px", color: "#64748b" }}>alhikmah.sistemsekolah.id</td>
              <td style={{ padding: "16px 24px" }}><span style={{ background: "#f1f5f9", color: "#475569", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>Standard</span></td>
              <td style={{ padding: "16px 24px", color: "#d97706", fontWeight: "700" }}>8 Hari</td>
              <td style={{ padding: "16px 24px" }}><span style={{ background: "#fffbeb", color: "#d97706", padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Masa Tenggang</span></td>
              <td style={{ padding: "16px 24px", textAlign: "right" }}>
                <button style={{ background: "#f1f5f9", border: "none", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "#01006A", marginRight: "8px", cursor: "pointer" }}>Detail</button>
                <button style={{ background: "transparent", border: "none", fontSize: "16px", cursor: "pointer", color: "#64748b" }}>⋮</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  mobile: (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh", padding: "16px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#01006A" }}>Dashboard Sekolah</h1>
        <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#64748b" }}>Ringkasan 142 tenant aktif</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <div style={{ background: "#fff", padding: "14px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>TOTAL SEKOLAH</span>
          <div style={{ fontSize: "20px", fontWeight: "800", color: "#01006A", marginTop: "4px" }}>142</div>
        </div>
        <div style={{ background: "#fff", padding: "14px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>LISENSI AKTIF</span>
          <div style={{ fontSize: "20px", fontWeight: "800", color: "#10B981", marginTop: "4px" }}>128</div>
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: "10px", border: "1px solid #e2e8f0", padding: "14px" }}>
        <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>Sekolah Terbaru</div>
        <div style={{ padding: "10px 0", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ fontWeight: "600", fontSize: "13px" }}>SMA Harapan Bangsa</div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>Enterprise • 214 Hari</div>
        </div>
        <div style={{ padding: "10px 0" }}>
          <div style={{ fontWeight: "600", fontSize: "13px" }}>SMP IT Al-Hikmah</div>
          <div style={{ fontSize: "12px", color: "#d97706", fontWeight: "600" }}>Standard • 8 Hari (Tenggang)</div>
        </div>
      </div>
    </div>
  ),
  relatedDocs: [],
});
