# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.0 — 2 LIVING SCREENS, TRUE DESKTOP/MOBILE & SUB-WORKER PARTIALS): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Katalog Akhir:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)
> *(Catatan: Hapus ke-6 file fragmen lama `01-landing.mockup.tsx` s/d `06-multi-iterasi-revisi.mockup.tsx` setelah 2 layar baru ini selesai dirakit).*

---

## 🎯 1. PERUBAHAN ARSITEKTUR UTAMA (V3.0)

### A. Penyederhanaan Katalog Menjadi 2 Layar Hidup (Interactive SPA DOM)
Alih-alih memecah mockup menjadi 6 potongan gambar statis yang kaku, seluruh interaksi disatukan ke dalam **2 Layar Hidup** menggunakan mekanisme **Pure CSS State Machine (`<input type="checkbox">` & `<input type="radio">` + `<label htmlFor="...">`)** serta **`<input type="range">`** asli yang 100% bisa dipencet dan digeser di dalam sandbox Mokly:

1. **Layar 1 (`01-waskita-guest.mockup.tsx` — Kondisi Belum Login):**
   * **State Default:** Menampilkan Landing Waskita yang bersih (Header dengan Burger, Logo Waskita, tombol kapsul `Sign in`; Tengah hanya judul CTA **`Segera Periksa, ARTIKELMU!`** tanpa duplikasi logo; Bawah **Floating Input Capsule** `#E9DFCA`).
   * **Interaksi Klik Burger (`☰`):** Membuka **Sidebar Belum Login** (Logo Waskita, tombol silang `X`, jarak `30px` ke tombol `Analisis Baru`, kartu info *"Masuk untuk menyimpan riwayat analisis Anda"*, serta footer kiri `Sign In` dan kanan `Settings`).
   * **Interaksi Klik Tombol Plus (`+`):** Memunculkan **Popup Opsi Audit & Masukan** (Unggah File Dokumen `.md/.txt/.docx`, Kueri Target, dan **4 Range Slider Volume-Style** yang bisa digeser kiri-kanan untuk VSM, MATTR, HKO, dan Skor CDS).

2. **Layar 2 (`02-waskita-authenticated.mockup.tsx` — Kondisi Sudah Login & Pindah Riwayat):**
   * **Interaksi Utama — Pindah Riwayat Analisis Saat Dipencet (CSS Radio State `name="active-session"`):**
     Di dalam Sidebar Riwayat, daftar riwayat **BISA DIPENCET** dan langsung mengubah isi ruang analisis utama memasuki data riwayat tersebut:
     - **State Riwayat 1 (Default Checked — `"Resep Kopi Tubruk Tradisional & Takaran..."`):**
       Menampilkan **Alur Revisi Berkelanjutan (Multi-Iterasi)**:
       1. Bubble Masukan 1 (`#E9DFCA`) $\rightarrow$ **Blok Kesatuan Hasil Analisis 1** (Satu background utuh `#D4E5F2`, **CDS 70% - Perlu Revisi**, VSM `0.48`, MATTR `0.61`, HKO `25%`, Celah Topik $\Delta_{\text{deficit}}/\Delta_{\text{gain}}$, Naskah Anotasi 4 warna, Overview & Prompt Bantuan, Top 3 SERP).
       2. Bubble Naskah Revisi Pengguna (`#E9DFCA`) $\rightarrow$ **Blok Kesatuan Hasil Analisis 2** (Satu background utuh terpisah `#D4E5F2`, **CDS 85% - Siap Terbit**).
     - **State Riwayat 2 (Saat Riwayat ke-2 Dipencet — `"Panduan Optimasi SEO Teknis Core Web..."`):**
       Isi layar utama otomatis berganti menampilkan data analisis milik Riwayat ke-2:
       1. Bubble Masukan (`#E9DFCA`: *"Draf Masukan: Panduan Optimasi SEO Teknis Core Web Vitals (LCP, INP, CLS)"*).
       2. **Blok Kesatuan Hasil Analisis (`#D4E5F2`, CDS 88% - Siap Terbit)**: Menampilkan Radial Gauge `88%`, metrik VSM `0.36`, MATTR `0.68`, HKO `20%`, chip $\Delta_{\text{gain}}$ (`Optimasi INP < 200ms`, `Speculation Rules API`), kutipan naskah teranotasi tentang Core Web Vitals, Prompt Bantuan SEO, dan Top 3 SERP Google terkait SEO Teknis!
     - **State Analisis Baru (Saat Tombol `"Analisis Baru"` di Sidebar Dipencet):**
       Isi layar utama otomatis berganti menjadi kanvas kosong siap pakai (Hero *"Segera Periksa, ARTIKELMU!"* + Floating Input Dock di bawah).
   * **Interaksi Klik Burger (`☰`) & Titik Tiga Riwayat (`⋮`):**
     - Membuka Sidebar Sudah Login bergaya Gemini (Header dengan Logo, ikon Search kaca pembesar + tombol `X`, gradasi transparan di bawah header; Tengah scrollable daftar riwayat dengan teks terpotong `...` + jarak `7px` ke tombol `⋮` yang bila dipencet membuka popover `Share Analisis`, `Pin`, `Rename`, `Delete`; Footer dengan Avatar, Username `...`, Plan `Pro`, dan `Settings`).
   * **Interaksi Klik Titik Tiga Header (`⋮`):**
     - Membuka menu popover aksi lengkap (`Salin Ringkasan Hasil`, `Unduh Laporan`, `Salin Teks Artikel`, `Share Analisis`, `Pin`, `Rename`, `Delete`).
   * **Interaksi Klik Tombol Plus (`+`) & Persistent Floating Input Dock:**
     - Kapsul input bawah (`+`, `"Ketik atau tempel naskah..."`, `ArrowRight`) **WAJIB MELAYANG PERMANEN (*FLOATING*)** di bagian bawah layar saat hasil analisis di-scroll, dan tombol `+` tetap bisa dipencet untuk membuka *Bottom Sheet / Modal Opsi Audit*.

---

### B. Desain Responsif Sejati: `mobile` vs `desktop` (DILARANG Maksa / DILARANG Tampilan Mobile Ditaruh di Desktop!)

Salah satu masalah fatal sebelumnya adalah ketika tombol `DESKTOP` di Mokly dipencet, tampilannya tetap berformat mobile atau dipaksa memakai teks keterangan besar di sampingnya. Pada V3.0 ini, properti `mobile` dan `desktop` pada `defineScreen` **WAJIB merender layout sesuai form-factor aslinya**:

| Komponen Layout | Viewport `mobile:` (`390x844` Mobile App) | Viewport `desktop:` (`1440x900` Widescreen Web App ala Gemini/ChatGPT) |
| :--- | :--- | :--- |
| **Root Container** | `width: "100%", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column"` | `width: "100%", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "row"` (2 Kolom Utuh: Sidebar Kiri + Workspace Kanan) |
| **Sidebar Navigasi** | **Off-Canvas Fullscreen Drawer (`width: "100%"`)**: Tersembunyi secara default (`translateX(-100%)`), meluncur menutupi layar saat ikon Burger (`☰`) dipencet. | **Persistent Left Sidebar (`width: "280px"`, `borderRight: "1px solid #E9DFCA"`)**: Tampil permanen di sisi kiri layar (seperti Gemini/ChatGPT di laptop) dan bisa di-collapse/expand. |
| **Area Kerja Utama (Main Canvas)** | Lebar penuh `100%`, `flex: 1, overflowY: "auto", padding: "16px 14px 96px 14px"`. | Kolom kanan `flex: 1, height: "100vh"`, dengan area baca terpusat **`maxWidth: "840px", margin: "0 auto"`** sehingga rapi, lega, dan profesional di layar lebar. |
| **Tata Letak Dalam Hasil Audit (`#D4E5F2`)** | Susunan vertikal 1 kolom di dalam 1 background utuh `#D4E5F2` (dipisahkan garis tipis `1px solid rgba(30,41,59,0.1)`). | Tetap **1 background utuh `#D4E5F2` tanpa kotak ganda**, namun di Desktop: Gauge CDS & 3 Bar Stilometri dapat berdampingan secara proporsional (2 kolom di atas permukaan yang sama), diikuti Celah Topik, Anotasi, Prompt, dan SERP. |
| **Floating Input Dock Bawah** | Melayang penuh di bawah (`left: 14px, right: 14px, bottom: 14px`). | Melayang terpusat di bawah kolom workspace kanan (**`maxWidth: "800px", margin: "0 auto"`**) dengan latar gradasi halus `#F7F4EB`. |
| **Popup Tombol Plus (`+`)** | **Bottom Sheet Setengah Halaman (`height: "58vh"`)** muncul dari bawah dengan *drag handle pill* dan *backdrop* gelap. | **Centered Popover Card / Sheet (`width: "480px"`, `maxHeight: "75vh"`, `borderRadius: "24px"`)** melayang anggun di atas input dock dengan *backdrop* gelap transparan. |

---

## 🎨 2. PALET WARNA RESMI & ATURAN IKON "WASKITA" (KONTRAK KETAT)

1. **5 Warna Palet Resmi Waskita:**
   * `#F7F4EB` (*Warm Cream*): Latar utama aplikasi, latar Sidebar, dan latar Bottom Sheet.
   * `#E9DFCA` (*Warm Sand*): Kontainer *Floating Input Capsule*, kartu di dalam *Bottom Sheet*, dan *bubble* masukan/revisi naskah pengguna.
   * `#D4E5F2` (*Soft Ice Blue*): **Latar wajib untuk 1 blok kesatuan Hasil Analisis** (bukan `#FFFFFF`!).
   * `#C0D5E5` (*Muted Sky Blue*): Tombol bulat `(+)`, track *Range Slider*, garis tepi halus kontainer analisis, dan *hover* riwayat.
   * `#C0CEE8` (*Soft Periwinkle*): Tombol kapsul `Sign in`, tombol kirim panah kanan (`→`), *thumb* aktif slider, dan badge *Plan* (`Pro`).
   * `#1E293B` (*Deep Slate*): Warna teks utama dan stroke ikon SVG.
2. **Aturan Mutlak Zero Emoji & Single Logo:**
   * **DILARANG 100%** memakai karakter emoji Unicode atau simbol ASCII kasar (`☰`, `⋮`, `✕`, `→`). Wajib memakai inline `<svg>` Lucide Icons.
   * Pada Landing Hero (baik di Layar 1 maupun state Analisis Baru di Layar 2), **DILARANG menduplikasi Logo Waskita di atas teks `"Segera Periksa, ARTIKELMU!"`** karena Logo Waskita sudah terpampang di Header!

---

## 🧩 3. ARSITEKTUR SUB-WORKER DENGAN PEMBAGIAN FILE PARSIAL (ANTI-BOTTLENECK)

Untuk mencegah *bottleneck* 20+ menit seperti sebelumnya, pekerjaan dipecah menjadi **file-file parsial modular** di dalam `specs/gatekeeper/partials/`. Setiap Sub-Worker hanya menulis ~120–220 baris kode yang fokus dan cepat selesai:

```
specs/gatekeeper/
├── partials/
│   ├── shared-ui.tsx            <-- [Fondasi Bersama: Logo, Ikon SVG, Gauge, & Popup Opsi Audit 4 Slider]
│   ├── guest-workspace.tsx      <-- [Sub-Worker 1A: Area Utama & Input Dock Belum Login (Mobile & Desktop)]
│   ├── guest-sidebar.tsx        <-- [Sub-Worker 1B: Sidebar Belum Login + Perakitan 01-waskita-guest]
│   ├── auth-audit-views.tsx     <-- [Sub-Worker 2A: Konten Analisis Riwayat 1, Riwayat 2, & Analisis Baru]
│   └── auth-sidebar-header.tsx  <-- [Sub-Worker 2B: Sidebar Riwayat Gemini + Header Menu + Perakitan 02-waskita-authenticated]
├── 01-waskita-guest.mockup.tsx
└── 02-waskita-authenticated.mockup.tsx
```

### Rincian Tugas Per Sub-Worker:

#### 1. Sub-Worker 1A (`branch: feat/subworker-1a-guest-shared`)
* **File 1: `specs/gatekeeper/partials/shared-ui.tsx`**
  - Mengekspor konstanta palet warna `COLORS`, komponen `<WaskitaLogo />`, seluruh komponen ikon Lucide SVG (`IconMenu`, `IconPlus`, `IconArrowRight`, `IconX`, `IconSearch`, `IconFileUp`, `IconInfo`, `IconSettings`, `IconSquarePen`, `IconMoreVertical`, `IconShare2`, `IconPin`, `IconPencil`, `IconTrash2`, `IconCopy`, `IconDownload`, `IconFileText`, `IconCheck`, `IconAlertCircle`, `IconExternalLink`).
  - Mengekspor komponen `<SemiCircleGauge score={...} threshold={...} />`.
  - Mengekspor komponen `<AuditOptionsOverlay toggleId="..." isDesktop={...} />` (Popup Tombol Plus berisi Unggah Dokumen, Kueri Target, dan 4 `<input type="range">` slider yang bisa digeser & di-scroll).
* **File 2: `specs/gatekeeper/partials/guest-workspace.tsx`**
  - Mengekspor komponen `<GuestWorkspace isDesktop={...} plusToggleId="..." sidebarToggleId="..." />` yang merender Header, Hero `"Segera Periksa, ARTIKELMU!"` (tanpa duplikasi logo!), dan Floating Input Capsule di bawah (`height: "100vh"` terkunci).

#### 2. Sub-Worker 1B (`branch: feat/subworker-1b-guest-screen`)
* **File 1: `specs/gatekeeper/partials/guest-sidebar.tsx`**
  - Mengekspor komponen `<GuestSidebar isDesktop={...} sidebarToggleId="..." />` (Header Logo + tombol tutup `X`, jarak `30px` ke tombol `Analisis Baru`, kartu info *"Masuk untuk menyimpan riwayat analisis Anda"*, serta footer kiri `Sign In` `#C0CEE8` dan kanan `Settings`).
* **File 2: `specs/gatekeeper/01-waskita-guest.mockup.tsx`**
  - Merakit `<GuestSidebar />`, `<GuestWorkspace />`, dan `<AuditOptionsOverlay />` menjadi layar interaktif utuh untuk properti `mobile` (drawer & bottom sheet) dan `desktop` (2 kolom widescreen: sidebar kiri `280px` + workspace kanan terpusat).

#### 3. Sub-Worker 2A (`branch: feat/subworker-2a-auth-views`)
* **File: `specs/gatekeeper/partials/auth-audit-views.tsx`**
  - Mengekspor 3 komponen tampilan isi ruang kerja yang bisa berganti-ganti saat riwayat di sidebar dipencet:
    1. `<HistoryOneAuditStream isDesktop={...} />`: Alur revisi berkelanjutan **"Resep Kopi Tubruk Tradisional"** — menampilkan Bubble Masukan 1 (`#E9DFCA`), **Blok Analisis 1** (Satu background utuh `#D4E5F2`, CDS 70% Perlu Revisi, 6 seksi lengkap hanya dipisahkan garis tipis `1px`), Bubble Revisi Pengguna (`#E9DFCA`), dan **Blok Analisis 2** (Satu background utuh terpisah `#D4E5F2`, CDS 85% Siap Terbit).
    2. `<HistoryTwoAuditStream isDesktop={...} />`: Data analisis untuk riwayat kedua **"Panduan Optimasi SEO Teknis Core Web Vitals"** — menampilkan Bubble Masukan (`#E9DFCA`) dan **Blok Analisis Utuh (`#D4E5F2`, CDS 88% Siap Terbit)** lengkap dengan metrik stilometri, chip $\Delta_{\text{gain}}$, naskah anotasi SEO, prompt bantuan, dan Top 3 SERP.
    3. `<NewAnalysisEmptyView isDesktop={...} />`: Tampilan kanvas kosong saat pengguna menekan tombol **"Analisis Baru"** di sidebar.

#### 4. Sub-Worker 2B (`branch: feat/subworker-2b-auth-screen`)
* **File 1: `specs/gatekeeper/partials/auth-sidebar-header.tsx`**
  - Mengekspor `<AuthSidebar isDesktop={...} ... />` (Sidebar Sudah Login bergaya Gemini: Header dengan Logo, Search, tombol `X`, gradasi transparan bawah header; Daftar Riwayat yang dibungkus `<label htmlFor="...">` agar ketika dipencet langsung memindahkan isi layar utama antara **Analisis Baru**, **Riwayat 1**, dan **Riwayat 2**, lengkap dengan tombol `⋮` per riwayat dan popover `Share Analisis`, `Pin`, `Rename`, `Delete`; serta Footer Profil dengan Avatar, Username `...`, Plan `Pro`, dan `Settings`).
  - Mengekspor `<AuthHeader ... />` (Header dengan menu `⋮` berisi 7 aksi artikel) dan `<FloatingComposerDock ... />` (Kapsul input bawah yang **100% mengambang permanen** di atas aliran scroll `<main>`).
* **File 2: `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`**
  - Merakit seluruh komponen Authenticated menjadi layar interaktif utuh pada properti `mobile` dan `desktop` (layout widescreen 2 kolom sejati), serta menghapus 6 file `.mockup.tsx` lama yang sudah digantikan oleh 2 layar hidup ini.

#### 5. Worker 3 (`branch: feat/worker-3-pzn-qa-audit`)
* Menjalankan verifikasi kompilasi `npx mokly check --strict` dan `npx mokly generate`.
* Melakukan **Audit Ketat sesuai `docs/PZN_VIBE_ENGINEERING_STANDARD.md`**:
  1. Memastikan hanya ada 2 layar utama di katalog Mokly (`01-waskita-guest` dan `02-waskita-authenticated`).
  2. Memastikan `height: "100vh"` dan `overflow: "hidden"` diterapkan pada root container sehingga kapsul input bawah **100% FLOATING** (tidak ikut tergulir ke bawah).
  3. Memastikan klik pada item Riwayat 1, Riwayat 2, dan Analisis Baru di Sidebar benar-benar mengubah tampilan data analisis di layar utama.
  4. Memastikan tampilan `desktop:` adalah aplikasi web desktop 2 kolom yang sesungguhnya (Sidebar Kiri + Area Kerja Kanan), bukan tampilan mobile yang dipaksa!
