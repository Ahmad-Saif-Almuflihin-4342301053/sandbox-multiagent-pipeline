# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.1 — FINAL POLISH: GEMINI HERO, FULL REVISION AUDIT, & AUTO-CLOSE SIDEBAR): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🎨 1. TIGA PENYEMPURNAAN VISUAL & UX BAKU (REVISI V3.1)

Berdasarkan validasi visual hasil render dan standar UX industri (Gemini/ChatGPT):

### A. Layar 1 (Guest Workspace — `specs/gatekeeper/partials/guest-workspace.tsx`)
1. **Hero Bersih Ala Gemini (Gambar 1 Referensi User):**
   * Di atas judul CTA, tampilkan **Logo Resmi Waskita** (`<WaskitaLogo width={isDesktop ? 160 : 130} height={isDesktop ? 34 : 28} />`) dengan jarak bawah `20px`.
   * Judul CTA: HANYA **`Segera Periksa, ARTIKELMU!`** (Ukuran font tebal, `fontSize: 24px` di mobile / `36px` di desktop).
   * ❌ **HAPUS penjelasan kecil di bawahnya:** Dilarang ada paragraf deskripsi *"Pemeriksaan kualitas naskah pra-terbit berbasis CDS..."* agar hero tampil bersih, berkelas, dan fokus.
2. **Disclaimer Ketentuan Layanan & Privasi (Khusus Mode Belum Login):**
   * Tepat di bawah kapsul input bawah (`+`, textarea, panah kanan), tambahkan teks disclaimer ala Gemini:
     > *"Ketentuan Layanan dan Kebijakan Privasi Waskita berlaku. Waskita adalah AI pra-terbit dan dapat membuat kekeliruan."*
   * Gaya teks: `fontSize: "11px"`, `color: "rgba(30, 41, 59, 0.6)"`, `textAlign: "center"`, `marginTop: "8px"`, `lineHeight: 1.4`.
   * *(Catatan: Disclaimer ini HANYA ada di mode Belum Login / Guest. Pada mode Sudah Login / Authenticated, bagian bawah tetap bersih tanpa teks ini).*

---

### B. Layar 2 (Blok Analisis 2 Siap Terbit — `specs/gatekeeper/partials/auth-audit-views.tsx`)
* **DILARANG DISUNAT! Blok Analisis 2 (Revisi Siap Terbit 85%) Wajib Ditampilkan LENGKAP Seluruh 6 Seksi:**
  Sebelumnya, Sub-Worker 2A hanya menampilkan Status Kelayakan dan Metrik, lalu memotong bagian naskah anotasi, overview, dan SERP. Walaupun naskah sudah siap terbit (CDS 85%), seluruh **6 seksi wajib disajikan utuh** di dalam **SATU background utuh `#D4E5F2`** yang sama:
  1. **Seksi 1: Status Kelayakan:** CDS 85% Siap Terbit (Badge hijau `#D1FAE5`, SemiCircleGauge 85% hijau `#10B981`, dan kalimat ucapan selamat bahwa skor melampaui standar 75%).
  2. **Seksi 2: Peningkatan Metrik Stilometri:** VSM Cosine Similarity `0.36` (Optimal < 0.60) dan MATTR `0.74` (Sangat Kaya > 0.55) dengan progress bar hijau.
  3. **Seksi 3: Celah Topik & Information Gain:** Chip $\Delta_{\text{gain}}$ yang telah terpenuhi (`Suhu Presisi 92°C`, `Rasio Takaran 1:15`, `Robusta Dampit`, `Pemanis Aren Alami`).
  4. **Seksi 4: Naskah Terkurasi & Anotasi Pasca Revisi:** Menampilkan draf naskah yang telah diperbaiki dengan stabilo hijau (`#BBF7D0`) pada frasa-frasa penting yang menutup defisit informasi (suhu presisi, rasio seduh, gula aren cair), lengkap dengan legenda dan catatan bahwa seluruh defisit telah teratasi.
  5. **Seksi 5: Overview & Panduan Editorial Publikasi:** Ringkasan kesimpulan redaksi bahwa artikel memiliki diferensiasi tinggi, siap di-publish ke CMS, serta rekomendasi tag meta deskripsi dan tombol *Salin Ringkasan Editorial*.
  6. **Seksi 6: Referensi SERP · Top 3 Google:** 3 artikel kompetitor acuan Google untuk kueri *"resep kopi tubruk tradisional"*.

---

### C. Layar 2 (Interaksi Sidebar Mobile Auto-Close — `specs/gatekeeper/partials/auth-sidebar-header.tsx` & `02-waskita-authenticated.mockup.tsx`)
* **Perilaku Standar Gemini & ChatGPT Mobile:**
  Ketika pengguna membuka Sidebar di layar mobile (`390x844`), lalu memencet salah satu item riwayat (**"Resep Kopi Tubruk..."**, **"Panduan Optimasi SEO..."**, atau tombol **"Analisis Baru"**), **SIDEBAR WAJIB OTOMATIS TERTUTUP (SLIDE OUT)** dan layar langsung menampilkan data riwayat yang dipilih!
* **Solusi Pure CSS Deterministik Tanpa JS:**
  - Di layar mobile, jadikan state drawer dan state sesi terhubung via CSS Radio State:
    * Ketika Burger dipencet $\rightarrow$ drawer membuka (`translateX(0)`).
    * Ketika item riwayat atau tombol Analisis Baru dipencet $\rightarrow$ radio sesi aktif terpilih DAN drawer secara otomatis tertutup (`translateX(-100%)`) tanpa pengguna harus memencet tombol silang (`X`) lagi!

---

## 🛠️ INSTRUKSI PENUGASAN TUNTAS SUB-WORKER (PARALEL)

1. **Sub-Worker 1A (Branch: `fix/subworker-1a-guest-hero-terms`):**
   * Edit `specs/gatekeeper/partials/guest-workspace.tsx`:
     - Tambahkan `<WaskitaLogo />` di atas judul CTA Hero.
     - Hapus paragraf penjelasan kecil di bawah judul CTA Hero (hanya menyisakan `"Segera Periksa, ARTIKELMU!"`).
     - Tambahkan teks disclaimer *"Ketentuan Layanan dan Kebijakan Privasi Waskita berlaku. Waskita adalah AI pra-terbit dan dapat membuat kekeliruan."* di bawah kapsul input dock.

2. **Sub-Worker 2A (Branch: `fix/subworker-2a-full-audit-revision`):**
   * Edit `specs/gatekeeper/partials/auth-audit-views.tsx`:
     - Lengkapi Blok Analisis 2 (`HistoryOneAuditStream`) agar memiliki **seluruh 6 seksi lengkap** (Status Kelayakan, Metrik Stilometri, Celah Topik, Naskah Ber-anotasi Hijau, Overview Editorial Siap Terbit, dan Referensi Top 3 SERP).

3. **Sub-Worker 2B (Branch: `fix/subworker-2b-mobile-sidebar-autoclose`):**
   * Edit `specs/gatekeeper/partials/auth-sidebar-header.tsx` & `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`:
     - Terapkan mekanisme auto-close pada sidebar mobile saat item riwayat atau tombol Analisis Baru dipencet.

4. **Worker 3 (QA Reviewer):**
   - Validasi via `npx mokly check --strict`.
   - Buka browser di `http://127.0.0.1:4174`:
     * Verifikasi Hero di Layar 1 (Logo + Judul bersih + disclaimer di bawah).
     * Verifikasi Blok Analisis 2 di Layar 2 (6 seksi lengkap).
     * Verifikasi di mobile viewport: klik riwayat di sidebar langsung menutup sidebar dan menampilkan data yang dipilih.
