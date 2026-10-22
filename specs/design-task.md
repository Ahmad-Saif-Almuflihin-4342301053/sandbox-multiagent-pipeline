# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.6 — DESKTOP PLUS POPOVER FIX & CONTEXT PERSISTENCE): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🚨 1. ROOT CAUSE AUDIT: MENGAPA TOMBOL PLUS DI DESKTOP TIDAK MUNCUL SAAT DIPENCET?

Berdasarkan audit forensik DOM:
* **Penyebab Utama (Duplicate Input ID Bug):**
  Komponen `<AuditOptionsOverlay toggleId={...} />` di `specs/gatekeeper/partials/shared-ui.tsx` (baris 515) **sudah merender sendiri** `<input type="checkbox" id={toggleId} />` di dalamnya.
  Namun, file mockup parent (`01-waskita-guest.mockup.tsx` dan `02-waskita-authenticated.mockup.tsx`) **merender ulang** `<input type="checkbox" id={...} />` dengan ID yang sama persis di baris paling atas file!
* **Akibatnya:**
  Ketika pengguna memencet `<label htmlFor={toggleId}>` pada tombol `+`, browser secara otomatis mengaktifkan **elemen `<input>` pertama** (yang kosong di atas file parent), sedangkan elemen `<input>` kedua yang berada di dalam `AuditOptionsOverlay` (yang mengendalikan CSS popover) **tidak pernah aktif**! Akibatnya popover tidak pernah terbuka!
* **Perbaikan Deterministik:**
  1. Hapus deklarasi `<input type="checkbox" id={PLUS_TOGGLE_ID...}>` duplikat dari file parent (`01-waskita-guest.mockup.tsx` dan `02-waskita-authenticated.mockup.tsx`).
  2. Di `specs/gatekeeper/partials/shared-ui.tsx`, atur posisi Popover Desktop agar **sejajar dengan tombol `+` kapsul composer dan mengembang ke kanan (ke tengah konten, TANPA menutupi sidebar kiri)**:
     ```tsx
     // Desktop Popover Menu (mengembang ke kanan / tengah konten)
     position: "absolute",
     bottom: "84px",
     left: "max(32px, calc(50% - 380px))", // Sejajar tombol + kapsul input terpusat
     width: "460px",
     maxWidth: "calc(100% - 64px)",
     maxHeight: "520px",
     background: COLORS.warmCream,
     borderRadius: "20px",
     boxShadow: "0 16px 40px rgba(30, 41, 59, 0.18)",
     border: "1px solid rgba(30, 41, 59, 0.1)",
     zIndex: 100,
     ```

---

## 🎯 2. KONTRAK CONTEXT-AWARE STATE PERSISTENCE (SIDEBAR MOBILE)

* **Masalah:** Saat di Sesi 2 (SEO Teknis), membuka dan menutup sidebar me-reset kembali ke Sesi 1 (Kopi Tubruk), dan baris riwayat yang aktif tidak mendapatkan penanda highlight.
* **Solusi Baku:**
  - Sesi 1: Burger header mentarget `drawer-from-1`, tombol `X`/backdrop mentarget `s1`. Riwayat 1 ter-highlight `#E9DFCA`.
  - Sesi 2: Burger header mentarget `drawer-from-2`, tombol `X`/backdrop mentarget `s2`. Riwayat 2 ter-highlight `#E9DFCA` (TIDAK RESET ke Sesi 1!).
  - Sesi New: Burger header mentarget `drawer-from-new`, tombol `X`/backdrop mentarget `snew`. Analisis Baru ter-highlight `#E9DFCA`.
  - Memilih item riwayat lain di dalam drawer langsung menutup drawer dan berganti ke sesi yang dipilih.

---

## 🛠️ SURGICAL FIX (CUKUP 1 WORKER TUNGGAL DI `worker-1`)

DevOps cukup menugaskan 1 worker saja di folder `worker-1` untuk memperbarui:
1. `specs/gatekeeper/partials/shared-ui.tsx` (posisi popover desktop `left: "max(32px, calc(50% - 380px))"`, bottom: 84px, mengembang ke kanan/tengah).
2. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (hapus duplikasi input checkbox plus).
3. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` & `auth-sidebar-header.tsx` (hapus duplikasi input checkbox plus, terapkan context-aware state persistence).
