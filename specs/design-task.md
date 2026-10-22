# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.7 — CSS SPECIFICITY & SINGLE CONTEXT-AWARE ICON FIX): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🚨 1. AUDIT FORENSIK: MENGAPA TOMBOL SILANG '✕' DAN HAMBURGER '☰' MUNCUL 3 KALI BERJEJER?

* **Bukan Keterbatasan Mokly:**
  Mokly me-render React, HTML, dan CSS murni di dalam iframe browser. Segala perilaku visual tunduk pada standar CSS browser murni.
* **Akar Masalah (CSS Specificity Conflict):**
  Untuk mendukung *Context-Aware State Persistence* (agar buka-tutup drawer tetap mengingat sesi aktif pengguna), Worker memasang 3 tombol target:
  - Tombol 1: Untuk Sesi Kopi Tubruk (`auth-close-1` & `auth-burger-1`)
  - Tombol 2: Untuk Sesi SEO Teknis (`auth-close-2` & `auth-burger-2`)
  - Tombol New: Untuk Sesi Analisis Baru (`auth-close-new` & `auth-burger-new`)
  
  **Kecerobohan Worker:**
  1. Di `specs/gatekeeper/partials/auth-sidebar-header.tsx`, Worker menuliskan properti `display: "flex"` langsung di dalam **inline style** JSX masing-masing `<label>`.
  2. Di `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`, Worker menulis aturan:
     `.auth-burger-1, .auth-burger-2, .auth-burger-new { display: none; }`
     `.auth-close-1, .auth-close-2, .auth-close-new { display: none; }`
     **tanpa `!important`**.
  3. Berdasarkan aturan CSS Specificity: **Inline style selalu menang melawan CSS class selector**. Akibatnya, perintah `display: none` diabaikan oleh browser, dan ketiga tombol muncul berjejer sekaligus (`☰ ☰ ☰` dan `✕ ✕ ✕`).

---

## 🎯 2. PERBAIKAN DETERMINISTIK (SURGICAL FIX)

1. **Hapus Inline `display: "flex"` di `specs/gatekeeper/partials/auth-sidebar-header.tsx`:**
   - Pada baris 791, 811, 831 (elemen `.auth-close-1`, `.auth-close-2`, `.auth-close-new`): Hapus `display: "flex",`.
   - Pada baris 1467, 1484, 1501 (elemen `.auth-burger-1`, `.auth-burger-2`, `.auth-burger-new`): Hapus `display: "flex",`.

2. **Pertegas Rules CSS di `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`:**
   ```css
   /* Context-aware Hamburger Menu in Mobile Header */
   .auth-burger-1, .auth-burger-2, .auth-burger-new { display: none !important; }
   #${VIEW_SESSION_1}:checked ~ * .auth-burger-1,
   #${DRAWER_FROM_1}:checked ~ * .auth-burger-1 { display: flex !important; }

   #${VIEW_SESSION_2}:checked ~ * .auth-burger-2,
   #${DRAWER_FROM_2}:checked ~ * .auth-burger-2 { display: flex !important; }

   #${VIEW_SESSION_NEW}:checked ~ * .auth-burger-new,
   #${DRAWER_FROM_NEW}:checked ~ * .auth-burger-new { display: flex !important; }

   /* Context-aware Close X in Mobile Drawer Header */
   .auth-close-1, .auth-close-2, .auth-close-new { display: none !important; }
   #${VIEW_SESSION_1}:checked ~ * .auth-close-1,
   #${DRAWER_FROM_1}:checked ~ * .auth-close-1 { display: flex !important; }

   #${VIEW_SESSION_2}:checked ~ * .auth-close-2,
   #${DRAWER_FROM_2}:checked ~ * .auth-close-2 { display: flex !important; }

   #${VIEW_SESSION_NEW}:checked ~ * .auth-close-new,
   #${DRAWER_FROM_NEW}:checked ~ * .auth-close-new { display: flex !important; }
   ```

---

## 🛠️ INSTRUKSI DISPATCH DEVOPS (CUKUP SURGICAL WORKER-1)

DevOps cukup menginstruksikan Worker 1 untuk menerapkan perubahan bedah di 2 file di atas. Setelah di-merge, hanya **SATU** tombol hamburger yang tampak di header, dan hanya **SATU** tombol '✕' yang tampak di drawer sidebar sesuai sesi yang sedang aktif.
