# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.3 — DESKTOP POSITIONING: CENTERED HERO VS FLOATING BOTTOM DOCK): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🎨 1. PERBEDAAN POSISI FIELD INPUT DI DESKTOP: BELUM ADA HASIL VS SUDAH ADA HASIL

Sesuai referensi resmi Google Gemini Desktop:

### A. Kondisi Belum Ada Hasil (Empty / Hero State — Layar 1 & State "Analisis Baru" di Layar 2)
* **Posisi Field Input di DESKTOP: BERADA DI TENGAH LAYAR (CENTERED STACK):**
  - Di layar Desktop, ketika belum ada artikel yang dianalisis, tata letaknya mengalir terpusat vertikal di tengah layar (*vertical center*):
    1. **Logo Resmi Waskita** (`<WaskitaLogo width={160} height={34} />`) dengan jarak bawah `24px`.
    2. Judul Hero: HANYA **`Segera Periksa, ARTIKELMU!`** (font tebal `36px`, tanpa deskripsi kecil).
    3. **Field Pengisian Kapsul Input:** Tepat berada di bawah judul hero dengan lebar `maxWidth: "760px"`, `width: "100%"`, latar `#E9DFCA`, bulat `28px` (ada tombol bulat `+`, textarea *"Ketik atau tempel naskah..."*, dan tombol panah kanan).
    4. **Teks Disclaimer Privasi:** Tepat di bawah kapsul tengah tersebut:
       > *"Ketentuan Layanan dan Kebijakan Privasi Waskita berlaku. Waskita adalah AI pra-terbit dan dapat membuat kekeliruan."*
  - *(Pada viewport Mobile, kapsul tetap menempel melayang di bawah layar `16px`).*

---

### B. Kondisi Sudah Ada Hasil Analisis (Active Audit Stream — Layar 2 Riwayat 1 & 2)
* **Posisi Field Input di DESKTOP: BERADA DI BAWAH LAYAR (MELAYANG / FLOATING DOCK):**
  - Ketika sudah ada hasil analisis (Blok Analisis 1 CDS 70%, Bubble Revisi, Blok Analisis 2 CDS 85%):
    1. Area tengah menjadi **kanvas scrollable** (`overflowY: "auto"`) yang menampilkan hasil analisis lengkap.
    2. **Field Pengisian Kapsul Input:** Pindah ke **BAWAH LAYAR MELAYANG PERMANEN (*FLOATING DOCK*)** (`position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)"`, `maxWidth: "800px"`, `width: "calc(100% - 48px)"`, `zIndex: 40`).
    3. **Popup Opsi Audit Tombol Plus (`+`) di Desktop:** Ketika tombol `+` di dock bawah dipencet, menu popover muncul **mengambang tepat di atas tombol `+`** (`position: "absolute", bottom: "68px", left: "0"`, `width: "420px"`, `borderRadius: "20px"`, `background: "#F7F4EB"`, `boxShadow: "0 12px 32px rgba(30,41,59,0.15)"`) **TANPA menggelapkan seluruh layar dengan backdrop hitam!**

---

## 🎨 2. RINGKASAN TATA KONTRAK LAINNYA (V3.3)

1. **Layar 2 (Blok Analisis 2 Siap Terbit 85%):**
   * **Wajib LENGKAP seluruh 6 seksi** di dalam SATU background utuh `#D4E5F2`:
     1) Status Kelayakan 85% Siap Terbit (Gauge hijau).
     2) Peningkatan Metrik Stilometri (VSM 0.36 & MATTR 0.74).
     3) Celah Topik $\Delta_{\text{gain}}$ terpenuhi (4 chip hijau).
     4) Naskah Revisi Terkurasi Ber-anotasi Stabilo Hijau (`#BBF7D0`) + catatan kelulusan.
     5) Overview Editorial Publikasi & Salin Ringkasan.
     6) Referensi SERP · Top 3 Google (3 kartu artikel kompetitor).
2. **Sidebar Mobile Auto-Close:**
   * Di viewport mobile (`390x844`), saat pengguna memencet salah satu item riwayat di sidebar (atau tombol *"Analisis Baru"*), sidebar mobile **otomatis menutup (*slide out*)** dan layar langsung menampilkan data riwayat yang dipilih tanpa harus memencet tombol silang `X` lagi.
3. **Desktop Sidebar Collapsible (Mini Rail vs Expanded):**
   * Di desktop, sidebar bisa di-toggle antara **Expanded (`280px`)** dan **Collapsed Mini Rail (`68px`)** yang hanya menampilkan ikon Analisis Baru, Search, Profil, dan Settings ala Gemini.

---

## 🛠️ PEMBAGIAN TUGAS SUB-WORKER (PARALEL)

* **Sub-Worker 1A (Folder: `worker-1`):**
  - Perbaiki `guest-workspace.tsx` (Desktop: Hero + Kapsul input berada di **TENGAH LAYAR** terpusat vertikal, diikuti disclaimer privasi di bawahnya. Mobile: Hero di tengah, kapsul di bawah).
  - Perbaiki `shared-ui.tsx` (Popover Desktop `+` menempel di atas kapsul input tanpa fullscreen dark backdrop).
  - Perbaiki `guest-sidebar.tsx` & `01-waskita-guest.mockup.tsx` (Desktop sidebar collapsible ke mini rail 68px).

* **Sub-Worker 2A & 2B (Folder: `worker-2`):**
  - Perbaiki `auth-audit-views.tsx`:
    * Lengkapi Blok Analisis 2 dengan seluruh 6 seksi lengkap di dalam 1 background `#D4E5F2`.
    * Di `NewAnalysisEmptyView`: di Desktop, posisikan kapsul input di **TENGAH LAYAR** di bawah hero "Segera Periksa, ARTIKELMU!".
  - Perbaiki `auth-sidebar-header.tsx` & `02-waskita-authenticated.mockup.tsx`:
    * Di Active Stream (Riwayat 1 & 2): posisikan kapsul input di **BAWAH LAYAR MELAYANG PERMANEN (*FLOATING DOCK*)**.
    * Auto-close sidebar mobile saat riwayat dipencet.
    * Collapsible desktop sidebar ke mini rail 68px.
