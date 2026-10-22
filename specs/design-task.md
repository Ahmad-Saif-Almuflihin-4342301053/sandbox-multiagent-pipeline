# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.8 — EXPANDED SIDEBAR HISTORY & PINNED SCROLL TEST): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🎯 1. KEBUTUHAN PENGUJIAN: SCROLL RIWAYAT INDEPENDEN (PINNED HEADER & FOOTER)

Pengguna ingin menguji pengalaman *scrolling* riwayat analisis di dalam Sidebar (baik versi Desktop maupun Mobile Drawer) agar berperilaku persis seperti ChatGPT/Gemini:
1. **Header Sidebar Tetap Terkunci (*Pinned Top*):** Logo Waskita, toggle collapse/close, dan tombol pencarian tidak boleh ikut tergulung ke atas saat riwayat di-scroll.
2. **Footer Sidebar Tetap Terkunci (*Pinned Bottom*):** Profil pengguna (`AS`, Plan Pro) dan tombol pengaturan (`Settings`) tidak boleh terdorong atau hilang saat riwayat di-scroll.
3. **Kontainer Riwayat (*Independent Scroll*):** Hanya kontainer daftar riwayat di tengah yang memiliki `overflow-y: auto`, `min-height: 0`, dan `flex: 1`, lengkap dengan efek fade halus di bawah header.

---

## 📋 2. PENAMBAHAN ITEM RIWAYAT REALISTIS (TOTAL 11 ITEM)

Di `specs/gatekeeper/partials/auth-sidebar-header.tsx`, tambahkan daftar dummy riwayat berikut di bawah Riwayat 1 dan 2 (berlaku untuk Desktop dan Mobile):

```tsx
const DUMMY_HISTORY_ITEMS = [
  { id: "3", title: "Panduan Lengkap Merawat Mobil Listrik di Cuaca Ekstrem..." },
  { id: "4", title: "Review Ultrabook Tipis untuk Pemrogram & UI Designer..." },
  { id: "5", title: "Analisis Pasar Properti Jabodetabek Kuartal Pertama..." },
  { id: "6", title: "Strategi Konten Evergreen untuk Traffic Organik..." },
  { id: "7", title: "Daftar Rekomendasi Framework Web Modern Startup..." },
  { id: "8", title: "Eksplorasi Arsitektur Multi-Agent Pipeline Dev..." },
  { id: "9", title: "Panduan Typography & Skala Modular Redaksi AI..." },
  { id: "10", title: "Penerapan VSM Cosine Similarity Audit Redaksi..." },
  { id: "11", title: "Benchmark Efisiensi Energi Cloud vs On-Premise..." },
  { id: "12", title: "Tips Penulisan Headline Click-Worthy Tanpa Clickbait..." },
  { id: "13", title: "Evaluasi Core Web Vitals LCP & INP Blog Editorial..." },
];
```

Pastikan elemen `<main>` pembungkus riwayat memiliki gaya:
```tsx
style={{
  flex: 1,
  minHeight: 0,
  padding: "6px 14px 20px 14px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  boxSizing: "border-box",
}}
```

---

## 🛠️ INSTRUKSI DISPATCH DEVOPS (FAST-TRACK SURGICAL WORKER-1)

Tugaskan Worker 1 untuk memperbarui `specs/gatekeeper/partials/auth-sidebar-header.tsx`:
1. Tambahkan item riwayat di atas pada bagian Desktop dan Mobile.
2. Pastikan properti `minHeight: 0` aktif pada elemen `<main>` pembungkus riwayat.
3. Verifikasi `npx @mokly/mokly check --strict`, commit `feat(gatekeeper): expand sidebar history items for independent scroll test (#42)`, dan merge langsung ke `main`.
