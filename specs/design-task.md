# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V2.3 — PZN VIBE ENGINEERING STANDARD): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Implementasi:** Katalog Mockup di `specs/gatekeeper/*.mockup.tsx` (Layar 01 s/d 06).

---

## 🚨 ROOT CAUSE AUDIT & STANDAR VIBE ENGINEERING (PZN COMPLIANT)

Mengadopsi prinsip **Vibe Engineering (Eko Kurniawan Khannedy / Programmer Zaman Now)**:
1. **Dilarang "Blind Acceptance" (Menerima Apa Adanya):**
   * DevOps (Chat 2) DILARANG me-merge PR hanya karena `npx mokly check --strict` bernilai hijau (pass).
   * Perintah `mokly check` HANYA memeriksa tipe TypeScript dan ada/tidaknya crash render komponen React. `mokly check` **TIDAK PERNAH** memeriksa apakah CSS hancur, terpotong, atau melayang salah tempat!
2. **Konteks Viewport Mobile Mokly (`height: "100vh"` vs `height: "100%"`):**
   * Di dalam iframe Mokly, tag `<body>` tidak memiliki tinggi eksplisit (`height: auto`). Jika root container memakai `height: "100%"`, kontainer akan mengalami **Vertical Collapse** (menciut mengikuti isi teks) atau **Infinite Expand** (melar 2500px).
   * **ATURAN MUTLAK CSS:** Seluruh root container di 6 layar WAJIB memakai:
     ```tsx
     style={{
       width: "100%",
       height: "100vh",
       maxHeight: "100vh",
       backgroundColor: "#F7F4EB",
       color: "#1E293B",
       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
       display: "flex",
       flexDirection: "column",
       position: "relative",
       overflow: "hidden", // Mencegah scrolling pada window frame utama
       boxSizing: "border-box",
     }}
     ```

---

## 🔍 BEDAH KESALAHAN FATAL PER WORKER & PERBAIKANNYA

### 1. Worker 1 (Layar 01 s/d 04)
* **Layar 01 (`01-landing.mockup.tsx`):**
  * ❌ **Kesalahan:** Ada dua logo Waskita bertumpuk (di Header dan di Hero). Input capsule melayang di tengah layar karena `height: 100%` collapse.
  * ✅ **Perbaikan:**
    - Root container: `height: "100vh"`, `overflow: "hidden"`.
    - Header: Tetap berisi Logo Waskita (`width: 120, height: 26`) + tombol `Sign in` (`#C0CEE8`).
    - Hero: **HAPUS duplikasi logo Waskita!** Hero hanya berisi judul teks: `<h1 style={{ fontSize: "24px", fontWeight: 800 }}>Segera Periksa, ARTIKELMU!</h1>`.
    - Input Capsule: Menempel melayang tepat `16px` dari bawah viewport ponsel (`position: "absolute", bottom: "16px", left: "16px", right: "16px", background: "#E9DFCA", zIndex: 30`).
* **Layar 02 (`02-popup-tombol-plus.mockup.tsx`):**
  * ❌ **Kesalahan:** Setengah halaman atas gelap, tapi sheet bawah menciut dan 4 slider range-nya terpotong tidak bisa di-scroll.
  * ✅ **Perbaikan:**
    - Root container: `height: "100vh"`.
    - Backdrop: `position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15, 23, 42, 0.45)", zIndex: 20`.
    - Bottom Sheet: `position: "absolute", bottom: 0, left: 0, right: 0, height: "58vh", background: "#F7F4EB", borderRadius: "28px 28px 0 0", zIndex: 30, display: "flex", flexDirection: "column"`.
    - Bagian dalam Sheet: Area konten dibungkus `<div style={{ flex: 1, overflowY: "auto", padding: "8px 16px 28px 16px" }}>` sehingga 4 `<input type="range">` slider dapat digulir (*scroll*) dan digeser secara leluasa.
* **Layar 03 & 04 (`03-sidebar-belum-login.mockup.tsx` & `04-sidebar-sudah-login.mockup.tsx`):**
  - Root container: `height: "100vh"`, `background: "#F7F4EB"`.
  - Header & Footer tetap diam (*fixed*), sedangkan area riwayat di tengah menggunakan `flex: 1, overflowY: "auto"`.

### 2. Worker 2 (Layar 05 & 06)
* **Layar 05 (`05-hasil-audit-utuh.mockup.tsx`) & Layar 06 (`06-multi-iterasi-revisi.mockup.tsx`):**
  * ❌ **Kesalahan #1 (Input Tidak Float):** Input capsule tertanam di dasar dokumen (setelah scroll 2000px) dan ikut tergulir karena `height: 100%` tidak membatasi tinggi container.
  * ❌ **Kesalahan #2 (Warna Background):** Worker 2 memakai `#FFFFFF` alih-alih warna palet resmi `#D4E5F2` (Soft Ice Blue).
  * ✅ **Perbaikan Mutlak:**
    - Root container: `height: "100vh"`, `maxHeight: "100vh"`, `overflow: "hidden"`, `display: "flex"`, `flexDirection: "column"`.
    - Header: `height: "56px"`, `flexShrink: 0`, `zIndex: 25`, `background: "#F7F4EB"`.
    - Kontainer Hasil Audit: Menggunakan warna palet resmi Waskita **`background: "#D4E5F2"`** (*Soft Ice Blue*), `borderRadius: "24px"`, `border: "1px solid #C0D5E5"`. Semua 6 seksi berada dalam 1 background utuh tanpa kartu anak bertumpuk.
    - Scroll Area: Elemen `<main>` WAJIB memiliki `flex: 1`, `overflowY: "auto"`, `padding: "16px 14px 96px 14px"`. Scroll HANYA terjadi di dalam area `<main>`.
    - **Floating Input Dock:** WAJIB melayang (*floating*) permanen di atas konten:
      ```tsx
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 14px 16px 14px",
          background: "linear-gradient(to top, #F7F4EB 75%, rgba(247, 244, 235, 0))",
          zIndex: 40,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            background: "#E9DFCA",
            borderRadius: 28,
            padding: "6px 8px 6px 12px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 6px 20px rgba(30, 41, 59, 0.12)",
          }}
        >
          {/* Tombol Plus (#C0D5E5) + Textarea + Tombol ArrowRight (#C0CEE8) */}
        </div>
      </div>
      ```

### 3. Worker 3 (QA & Code Reviewer)
* **Tugas Baru Worker 3:** DILARANG hanya mengeksekusi `npx mokly check --strict`. Worker 3 wajib melakukan audit kode terhadap:
  1. Adanya string `height: "100vh"` pada seluruh root container layar 01 s/d 06.
  2. Memastikan tidak ada duplikasi `<WaskitaLogo>` di hero Layar 01.
  3. Memastikan Layar 02 memiliki `height: "58vh"` dan `overflowY: "auto"`.
  4. Memastikan Layar 05 & 06 memiliki `position: "absolute", bottom: 0` floating dock dengan `padding-bottom: 96px` pada `<main>`.
  5. Melaporkan bukti kode yang telah diperbaiki kepada DevOps sebelum PR di-merge.

---

## 🎨 PALET WARNA RESMI WASKITA
* `#F7F4EB` (*Warm Cream*): Latar utama aplikasi, latar fullscreen sidebar, dan sela antar-blok analisis.
* `#E9DFCA` (*Warm Sand*): Permukaan kapsul input bawah, kartu di bottom sheet, bubble naskah pengguna.
* `#D4E5F2` (*Soft Ice Blue*): Kontainer utuh untuk 1 blok hasil analisis.
* `#C0D5E5` (*Muted Sky Blue*): Tombol bulat `(+)`, track slider, drag handle pill.
* `#C0CEE8` (*Soft Periwinkle*): Tombol kapsul `Sign in`, tombol kirim panah kanan (`→`), thumb slider aktif.
* `#1E293B` (*Deep Slate*): Tipografi utama & stroke ikon SVG Lucide.

---

## 📱 SPESIFIKASI 6 LAYAR WAJIB DI `specs/gatekeeper/`

### Layar 1: `specs/gatekeeper/01-landing.mockup.tsx`
* **Title:** `"1. Landing Waskita (Belum Login)"`
* **Root Container:** `height: "100vh"`, `overflow: "hidden"`, `background: "#F7F4EB"`.
* **Header (56px):** SVG `Menu` + Logo Waskita + Tombol `Sign in` (`#C0CEE8`).
* **Hero (Center):** HANYA teks `Segera Periksa, ARTIKELMU!` (TIDAK ADA LOGO KEDUA).
* **Bottom Floating Dock:** Melayang `16px` dari bawah (`#E9DFCA`, bulat `28px`, `+`, `"Ketik atau tempel naskah..."`, `ArrowRight`).

### Layar 2: `specs/gatekeeper/02-popup-tombol-plus.mockup.tsx`
* **Title:** `"2. Popup Tombol Plus: Opsi Audit & Masukan (Setengah Halaman)"`
* **Backdrop (Atas):** `background: "rgba(15, 23, 42, 0.45)"` menutupi seluruh halaman di belakangnya.
* **Bottom Sheet (Bawah):** Setinggi `58vh`, melengkung atas `28px`, latar `#F7F4EB`, drag handle pill di atas.
* **Scroll Area:** `flex: 1, overflowY: "auto"` berisi:
  1. Kartu Unggah File Dokumen (`.md`, `.txt`, `.docx`) dengan SVG `FileUp`.
  2. Kartu Kueri Target dengan SVG `Search`.
  3. 4 Slider Geser `<input type="range">` asli: VSM Cosine Similarity, MATTR, HKO Overlap, dan Skor Lolos Standar.

### Layar 3: `specs/gatekeeper/03-sidebar-belum-login.mockup.tsx`
* **Title:** `"3. Sidebar Navigasi (Kondisi Belum Login)"`
* **Tampilan:** Fullscreen `100vh` `#F7F4EB`. Header: Logo Waskita + Tombol Silang SVG `X`. Jarak 30px di bawahnya: Pilihan `Analisis Baru` (SVG `SquarePen`) + Card Info "Masuk untuk menyimpan riwayat analisis Anda" (SVG `Info`). Footer bawah: Tombol `Sign In` (`#C0CEE8`) + Tombol SVG `Settings`.

### Layar 4: `specs/gatekeeper/04-sidebar-sudah-login.mockup.tsx`
* **Title:** `"4. Sidebar Navigasi (Kondisi Sudah Login & Riwayat Gemini-Style)"`
* **Tampilan:** Fullscreen `100vh` `#F7F4EB`. Header: Logo Waskita + Pencarian (SVG `Search`) + Tombol Silang (SVG `X`). Area Tengah Scrollable: Analisis Baru + Riwayat dengan judul yang di-truncate (`...`) + Titik Tiga (SVG `MoreVertical`) dengan popover (Share, Pin, Rename, Delete). Footer: Foto profil, username (`...`), plan status, dan SVG `Settings`.

### Layar 5: `specs/gatekeeper/05-hasil-audit-utuh.mockup.tsx`
* **Title:** `"5. Hasil Audit (Satu Background Utuh Tanpa Kotak Ganda)"`
* **Root Container:** `height: "100vh"`, `overflow: "hidden"`.
* **Header (56px):** SVG `Menu` + Logo Waskita + SVG `MoreVertical` (popover: Salin Ringkasan, Unduh Laporan, Salin Teks, Share, Pin, Rename, Delete).
* **Scrollable Main:** `flex: 1, overflowY: "auto", paddingBottom: "96px"`.
* **Kontainer Hasil Audit:** SATU latar utuh ber-warna `#D4E5F2`, `border: "1px solid #C0D5E5"`, `borderRadius: 24px`. Di dalamnya mengalir:
  1. Status Kelayakan (CDS & Gauge).
  2. Metrik Stilometri (VSM, MATTR, HKO).
  3. Celah Topik (Chip $\Delta_{\text{deficit}}$ dan $\Delta_{\text{gain}}$).
  4. Naskah Terkurasi & Anotasi Stabilo.
  5. Overview & Prompt Bantuan.
  6. Referensi SERP Top 3.
  (Dipisahkan oleh `borderBottom: "1px solid rgba(30, 41, 59, 0.1)"` dan jarak spasi).
* **Floating Bottom Dock:** Melayang permanen di atas konten di dasar layar dengan latar gradasi transparan.

### Layar 6: `specs/gatekeeper/06-multi-iterasi-revisi.mockup.tsx`
* **Title:** `"6. Alur Revisi Berkelanjutan (Analisis 1 vs Analisis 2 Terpisah)"`
* **Tampilan:** Persis Layar 05, namun memuat 2 Blok Hasil Analisis:
  - Blok Analisis 1 (`background: "#D4E5F2"`, CDS 70%).
  - Bubble Naskah Revisi Pengguna (`background: "#E9DFCA"`).
  - Blok Analisis 2 (`background: "#D4E5F2"`, CDS 85%).
  - Floating Bottom Dock tetap melayang di posisi paling bawah layar secara permanen.
