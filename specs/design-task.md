# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.5 — TRUE ACTIVE SESSION PERSISTENCE & CONTEXT HIGHLIGHT): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🎯 1. DUA DETAIL UX KRUSIAL (REVISI V3.5)

### A. State Persistence Saat Buka-Tutup Sidebar (DILARANG Reset ke Kopi Tubruk!)
* **Akar Masalah Sebelumnya:**
  Ketika pengguna sedang membuka Sesi 2 (SEO Teknis), lalu membuka sidebar dan menutupnya kembali (tekan `X` atau klik backdrop), sistem me-reset tampilan kembali ke Sesi 1 (Kopi Tubruk). Ini terjadi karena tombol `X` dan tombol buka sidebar sebelumnya di-hardcode ke `view-session-1`!
* **Solusi Arsitektur State Machine (Context-Aware Drawer Flow):**
  Setiap sesi memiliki state drawer-nya sendiri:
  - `s1` & `drawer-from-1` (Sesi 1: Kopi Tubruk)
  - `s2` & `drawer-from-2` (Sesi 2: SEO Teknis)
  - `snew` & `drawer-from-new` (Sesi New: Analisis Baru)
  
  **Alur:**
  1. Saat di Sesi 2, tombol Burger header mentarget `drawer-from-2`.
  2. Saat drawer terbuka, tombol `X` dan backdrop mentarget `s2` $\rightarrow$ **Sidebar menutup dan TETAP BERADA DI SESI 2 (SEO TEKNIS)! Tidak pernah reset otomatis ke Kopi Tubruk!**
  3. Begitu juga saat berada di Sesi 1 (tutup drawer tetap di Sesi 1) atau Analisis Baru (tutup drawer tetap di Analisis Baru).
  4. Jika di dalam drawer pengguna memencet sesi lain (misal dari Sesi 2 memencet Sesi 1): mentarget `s1` $\rightarrow$ **drawer OTOMATIS TERTUTUP dan layar langsung berpindah ke Sesi 1!**

---

### B. Active Session Context Highlight di Sidebar
* **Masalah Sebelumnya:** Saat berada di Sesi 2 dan membuka sidebar, item Sesi 2 tidak mendapatkan penanda aktif, atau malah Sesi 1 yang ditandai.
* **Standar Baru:**
  - Saat `s1` atau `drawer-from-1` aktif: Baris Riwayat 1 mendapatkan highlight `background: #E9DFCA`, `fontWeight: 700`.
  - Saat `s2` atau `drawer-from-2` aktif: Baris Riwayat 2 mendapatkan highlight `background: #E9DFCA`, `fontWeight: 700`.
  - Saat `snew` atau `drawer-from-new` aktif: Tombol Analisis Baru mendapatkan highlight `background: #E9DFCA`, `fontWeight: 700`.
  - Pengguna langsung tahu persis: *"Oh, saya saat ini sedang berada di riwayat ini!"*

---

## 🛠️ INSTRUKSI SURGICAL FIX (CUKUP 1 WORKER)

* **Target File:**
  - `specs/gatekeeper/partials/auth-sidebar-header.tsx`
  - `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`
* **Implementasi:**
  Terapkan Context-Aware Drawer Flow di mobile:
  - 3 Tombol Burger kontekstual di Header (muncul sesuai sesi aktif).
  - 3 Tombol Close `X` & Backdrop kontekstual di Drawer (menutup kembali ke sesi aktif yang sama).
  - Terapkan CSS rule highlight `.history-row-one`, `.history-row-two`, dan `.btn-new-analysis` sesuai radio state yang aktif.
