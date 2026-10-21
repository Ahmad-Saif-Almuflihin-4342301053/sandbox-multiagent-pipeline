# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.2 — COMPLETE DESKTOP & MOBILE GEMINI STANDARD): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🎨 1. TATA KONTRAK UX TERBARU (REVISI V3.2)

### A. Layar 1 (Guest Workspace)
1. **Hero Bersih Ala Gemini:**
   * Di atas judul CTA: **Logo Resmi Waskita** (`<WaskitaLogo width={isDesktop ? 160 : 130} height={isDesktop ? 34 : 28} />`) dengan `marginBottom: "20px"`.
   * Judul CTA: HANYA **`Segera Periksa, ARTIKELMU!`** (tebal, tanpa paragraf deskripsi kecil).
2. **Disclaimer Ketentuan Layanan & Privasi (Khusus Mode Belum Login):**
   * Di bawah kapsul input dock bawah, tambahkan teks disclaimer:
     > *"Ketentuan Layanan dan Kebijakan Privasi Waskita berlaku. Waskita adalah AI pra-terbit dan dapat membuat kekeliruan."*
   * Gaya: `fontSize: "11px"`, `color: "rgba(30, 41, 59, 0.6)"`, `textAlign: "center"`, `marginTop: "8px"`.
   * *(Pada mode Sudah Login, teks ini TIDAK ADA / tetap bersih).*

---

### B. Layar 2 (Blok Analisis 2 Revisi Siap Terbit 85%)
* **DILARANG DISUNAT! Blok Analisis 2 Wajib Menampilkan Seluruh 6 Seksi Lengkap di dalam SATU Background Utuh `#D4E5F2`:**
  1. **Status Kelayakan:** CDS 85% Siap Terbit, SemiCircleGauge 85% hijau, pesan kelulusan standar 75%.
  2. **Peningkatan Metrik Stilometri:** VSM `0.36` dan MATTR `0.74` dengan bar hijau.
  3. **Celah Topik & Information Gain:** Chip $\Delta_{\text{gain}}$ (`Suhu Presisi 92°C`, `Rasio Takaran 1:15`, `Robusta Dampit`, `Pemanis Aren Alami`).
  4. **Naskah Terkurasi & Anotasi:** Draf naskah revisi ber-stabilo hijau (`#BBF7D0`) pada poin-poin penutup defisit + legenda & catatan kelulusan.
  5. **Overview Editorial Publikasi:** Ringkasan editorial bahwa artikel siap publish + tombol *Salin Ringkasan Editorial*.
  6. **Referensi SERP · Top 3 Google:** 3 kartu kompetitor acuan Google.

---

### C. Sidebar Mobile Auto-Close (Mobile UX)
* Di viewport mobile (`390x844`): Ketika pengguna memencet salah satu item riwayat atau tombol *"Analisis Baru"*, sidebar mobile **OTOMATIS TERTUTUP (*slide out*)** dan layar langsung menampilkan data riwayat yang dipilih, tanpa harus memencet tombol silang `X` lagi.

---

### D. Desktop Sidebar Collapsible (Mini Rail vs Expanded Ala Gemini Gambar 1 & 4)
* Di layar desktop (`1440x900`), sidebar bisa di-buka dan di-tutup secara fleksibel:
  * **Saat Open (Expanded `width: 280px`):** Menampilkan penuh Logo Waskita, tombol `Analisis Baru`, daftar riwayat/info card, serta footer nama user & plan.
  * **Saat Closed (Collapsed Mini Rail `width: 68px`):**
    - Sidebar menciut ke mini rail selebar `68px`.
    - Bagian atas hanya menampilkan ikon: Tombol Burger/Toggle + Ikon `Analisis Baru` (ikon pena tanpa teks) + Ikon `Search`.
    - Bagian bawah hanya menampilkan ikon: Profil avatar bulat (`AS`) + Ikon `Settings`.
    - Area kerja utama (kanan) otomatis melebar mengisi ruang yang tersedia.

---

### E. Desktop Tombol Plus Popover (Ala Gemini Gambar 5 — TANPA Fullscreen Dark Opacity)
* Di layar desktop (`1440x900`):
  * **DILARANG** menampilkan popup di tengah layar dengan backdrop gelap pekat yang menutupi seluruh halaman!
  * **Wajib berupa Popover Menu Mengambang** yang menempel tepat di atas tombol `+` kapsul composer (`position: "absolute", bottom: "72px", left: "0"`, `width: "420px"`, `borderRadius: "20px"`, `background: "#F7F4EB"`, `boxShadow: "0 12px 32px rgba(30,41,59,0.15)"`, `border: "1px solid #E9DFCA"`).
  * Di dalamnya memuat Unggah Dokumen, Kueri Target, dan 4 Range Slider Volume-Style.
  * Backdrop hanya berupa overlay transparan tipis penangkap klik untuk menutup popover.

---

## 🛠️ PEMBAGIAN EKSEKUSI PARALEL

1. **Sub-Worker 1A (Folder: `worker-1`):**
   * Perbaiki `specs/gatekeeper/partials/guest-workspace.tsx` (Hero Waskita Logo + Judul bersih + Disclaimer Privasi di bawah kapsul input).
   * Perbaiki `specs/gatekeeper/partials/shared-ui.tsx` (Popover Desktop `+` menempel di atas kapsul input tanpa fullscreen dark backdrop).
   * Perbaiki `specs/gatekeeper/partials/guest-sidebar.tsx` & `specs/gatekeeper/01-waskita-guest.mockup.tsx` (Desktop sidebar collapsible ke mini-rail 68px).

2. **Sub-Worker 2A & 2B (Folder: `worker-2`):**
   * Perbaiki `specs/gatekeeper/partials/auth-audit-views.tsx` (Blok Analisis 2 LENGKAP 6 seksi dalam background `#D4E5F2`, tidak disunat!).
   * Perbaiki `specs/gatekeeper/partials/auth-sidebar-header.tsx` & `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`:
     - Mobile sidebar auto-close saat riwayat dipencet.
     - Desktop sidebar collapsible ke mini-rail 68px (ikon pena & search di atas, avatar & settings di bawah).
     - Desktop tombol `+` popover menempel di atas composer tanpa dark opacity screen.

3. **Worker 3 (QA):**
   - Validasi `npx mokly check --strict` dan audit visual browser di `http://127.0.0.1:4174` (cek mobile & desktop).
