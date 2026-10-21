# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V2.2 — ANTI-DOUBLE-BACKGROUND & FULL MOBILE PARITY): WASKITA

> **Dokumen Resmi Handover:** System Analyst (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Implementasi:** Katalog Mockup di `specs/gatekeeper/*.mockup.tsx` (dan hapus folder lama `specs/auth` & `specs/dashboard` agar katalog bersih).

---

## 🚨 TEMUAN AKAR MASALAH (ROOT CAUSE ANALYSIS) DARI KESALAHAN WORKER SEBELUMNYA

DevOps dan seluruh Worker **WAJIB** membaca dan memperbaiki 4 kesalahan fatal pada implementasi sebelumnya:

### 1. Kesalahan Fatal #1: "Background Ada Dua / Kotak di Dalam Kotak" pada Hasil Audit (DILARANG KERAS!)
* **Apa yang Salah Sebelumnya:** Worker 2 membuat kontainer luar berwarna `#D4E5F2`, lalu di dalamnya membuat lagi kartu-kartu kotak berwarna `#F7F4EB` dengan `border` dan `border-radius: 18px` untuk *Status Kelayakan*, *Metrik Stilometri*, dll. Akibatnya terlihat ada **2 lapis background bertumpuk** yang sempit dan jelek!
* **Aturan Mutlak yang Benar (Sesuai Referensi Gambar 2 User):**
  * Di dalam **1 Giliran Hasil Analisis**, **HANYA BOLEH ADA SATU LAPIS BACKGROUND UTUH** (tidak boleh ada kotak/kartu anak di dalamnya!).
  * Setiap bagian di dalam hasil analisis (**1. Status Kelayakan & Radial Gauge** $\rightarrow$ **2. Metrik Stilometri & Leksikal** $\rightarrow$ **3. Celah Topik $\Delta_{\text{deficit}}/\Delta_{\text{gain}}$** $\rightarrow$ **4. Naskah Terkurasi & Anotasi** $\rightarrow$ **5. Overview & Prompt Bantuan** $\rightarrow$ **6. Referensi Top 3 SERP**) **WAJIB memiliki `background: "transparent"`, `border: "none"`, `borderRadius: 0`**, dan antar-bagiannya **HANYA dipisahkan oleh garis horizontal tipis (`borderBottom: "1px solid rgba(30, 41, 59, 0.1)"`) dan jarak spasi (`padding: "20px 0"`)**!

### 2. Kesalahan Fatal #2: Properti `mobile:` di Mokly Berbeda / Dikosongi oleh Worker 1 (Sidebar Hilang & Popup Plus Malah Full-Halaman!)
* **Apa yang Salah Sebelumnya:**
  * Saat pengguna membuka Mokly (`http://127.0.0.1:4174`), Mokly secara *default* menampilkan **viewport `MOBILE`** (merender properti `mobile: (...)` di dalam bezel iPhone bawaan Mokly).
  * Worker 1 meletakkan desain Bottom Sheet 50% dan Sidebar di properti `desktop: (...)`, tetapi di properti `mobile: (...)` malah membuat halaman penuh (`100%`) tanpa *backdrop* setengah halaman, tanpa *slider* `<input type="range">` (diganti teks biasa), dan **menghilangkan Sidebar sama sekali**!
* **Aturan Mutlak yang Benar:**
  1. **JANGAN PERNAH** membuat isi `mobile: (...)` lebih miskin daripada `desktop: (...)`! Isi komponen pada `mobile: (...)` adalah tampilan utama yang dinilai pengguna!
  2. **JANGAN** menggambar bezel ponsel hitam palsu (`border: 8px solid #1E293B` + *Dynamic Island* palsu) di dalam properti `mobile: (...)` karena Mokly sudah membungkus `mobile: (...)` dengan bezel ponsel otomatis!
  3. **Pecah Katalog Menjadi 6 Layar Mandiri di `specs/gatekeeper/`** agar setiap *state* (Landing, Popup Tombol Plus Setengah Halaman ala Gemini, Sidebar Belum Login, Sidebar Sudah Login, Hasil Audit Satu Background, dan Multi-Iterasi Analisis 1 vs 2) **punya layarnya sendiri yang langsung terlihat utuh di viewport `MOBILE`!**

### 3. Kesalahan Fatal #3: Kenapa Tidak Bisa Dipencet di Mokly? (Solusi: CSS `:checked` Toggle + Native `<input type="range">`)
* **Fakta Teknis `@mokly/mokly`:** Server Mokly mengirim header `Content-Security-Policy: sandbox allow-same-origin;` yang **mematikan eksekusi `<script>` JavaScript** di dalam iframe preview.
* **Solusi Tanpa Halusinasi Agar Tetap Bisa Dipencet & Digeser di Mokly:**
  1. Gunakan **CSS Checkbox/Radio Toggle Murni (`<input type="checkbox" id="..." style={{ display: "none" }} />` + `<label htmlFor="...">` + blok `<style>`)**! Karena murni HTML+CSS tanpa JS, fitur klik buka/tutup Popup `+`, klik *expand* Bottom Sheet `50%` $\rightarrow$ `88%`, klik buka/tutup Sidebar, dan klik buka/tutup menu Titik Tiga **100% BISA DIPENCET di dalam sandbox Mokly**!
  2. Gunakan elemen **`<input type="range">`** asli dengan styling CSS (`accent-color`) untuk ke-4 Ambang Batas sehingga **100% BISA DIGESER kiri-kanan** di dalam Mokly!
  3. Tetap sediakan juga layar spesifik untuk masing-masing *state* (Layar 1 s.d. Layar 6) sehingga baik dipencet langsung maupun dipilih dari daftar layar Mokly, hasilnya 100% tampil sempurna!

---

## 🎨 PALET WARNA RESMI & ATURAN IKON "WASKITA"

1. **5 Warna Palet Resmi Waskita:**
   * `#F7F4EB` (*Warm Cream*): Latar utama aplikasi, latar *Sidebar Fullscreen*, dan latar *Popup Bottom Sheet*.
   * `#E9DFCA` (*Warm Sand*): Kontainer *Floating Input Capsule* bawah, kartu item di dalam *Bottom Sheet*, dan *bubble* kueri/naskah pengguna.
   * `#D4E5F2` (*Soft Ice Blue*): Latar untuk kontainer kesatuan Hasil Analisis (atau aksen kartu sekunder).
   * `#C0D5E5` (*Muted Sky Blue*): Tombol bulat `(+)`, track *Range Slider*, *hover* riwayat di sidebar, dan *drag handle pill*.
   * `#C0CEE8` (*Soft Periwinkle*): Tombol kapsul `Sign in`, tombol kirim panah kanan (`→`), *thumb* aktif pada slider, dan badge *Plan* (`Free` / `Basic` / `Pro`).
   * `#1E293B` (*Deep Slate*): Warna teks utama dan garis ikon SVG.
2. **Logo Resmi Waskita:**
   * Gunakan SVG dari `assets/logo/logo-waskita-light.svg` (`viewBox="0 0 160 34"`). **DILARANG** menulis ulang teks `"Waskita"` atau `"Gatekeeper Audit"` di sebelahnya.
3. **100% Ikon Vektor SVG Profesional (Lucide Icons — ZERO EMOJI):**
   * **DILARANG KERAS** memakai emoji bawaan laptop/WA (`🛡️`, `📄`, `🔍`, `⚡`, `⚙️`, dll.) maupun karakter simbol kasar (`☰`, `✕`, `→`, `⋮`). Wajib menggunakan inline `<svg>` Lucide Icons (`strokeWidth="1.8"`, `strokeLinecap="round"`, `strokeLinejoin="round"`).

---

## 📱 SPESIFIKASI 6 LAYAR WAJIB DI `specs/gatekeeper/` (WAJIB SAMA PERSIS ANTARA `mobile` DAN `desktop`)

> [!IMPORTANT]
> Hapus folder lama `specs/auth/` dan `specs/dashboard/` serta file lama yang membingungkan. Buat **6 file layar di `specs/gatekeeper/`** di bawah ini. Pada setiap file, properti **`mobile`** merender kontainer `100%` tinggi layar (`height: "100vh"`, `position: "relative"`, `overflow: "hidden"`), dan properti **`desktop`** merender kontainer yang sama di dalam *frame* `390x844px` di tengah layar.

---

### Layar 1: `specs/gatekeeper/01-landing.mockup.tsx`
* **Title:** `"1. Landing Waskita (Belum Login)"`
* **Tampilan Utama:**
  * **Header (`56px`):** Kiri tombol Burger (SVG `Menu`), Tengah **Logo SVG Waskita**, Kanan tombol **`Sign in`** melengkung penuh (`border-radius: 9999px`, latar `#C0CEE8`).
  * **Tengah (Hero):** Hanya **Logo Waskita** + teks CTA **`Segera Periksa, ARTIKELMU!`** (tanpa deskripsi panjang, tanpa chip sampel kopi tubruk, tanpa chip unggah dokumen).
  * **Bawah (Floating Input Capsule):** Melayang di bagian bawah dengan latar `#E9DFCA` (`border-radius: 28px`), berisi:
    1. Kiri: Tombol bulat (`40x40px`, `#C0D5E5`) dengan **SVG `Plus`** (dibungkus `<label htmlFor="toggle-plus">` agar bila diklik juga bisa memunculkan *Bottom Sheet* 50% via CSS `:checked`!).
    2. Tengah: `<textarea>` dengan *placeholder* bersih **`"Ketik atau tempel naskah..."`** (tanpa tulisan 300 kata).
    3. Kanan: Tombol bulat (`40x40px`, `#C0CEE8`) yang **HANYA berisi SVG `ArrowRight` (Panah Kanan)** (tanpa ikon perisai, tanpa tulisan "Audit").

---

### Layar 2: `specs/gatekeeper/02-popup-tombol-plus.mockup.tsx`
* **Title:** `"2. Popup Tombol Plus: Opsi Audit & Masukan (Setengah Halaman)"`
* **Tampilan Utama (Wajib Persis Seperti Gambar 4 Referensi Gemini User!):**
  * **Bagian Atas Layar (`50%` Atas):** Menampilkan latar belakang layar Waskita (Header Waskita + konten di belakangnya) yang tertutup oleh **lapisan gelap transparan ber-opacity rendah (`background: rgba(15, 23, 42, 0.42)`)** sehingga terlihat jelas bahwa ini adalah *popup* di atas halaman!
  * **Bagian Bawah Layar (`50%` Bawah — Popup Bottom Sheet):**
    * Kontainer muncul dari bawah setinggi **separuh halaman (`height: 52%`)** (dan jika *drag handle* diklik via CSS `:checked`, bisa membesar ke `88%`!).
    * Sudut atas **melengkung mulus (`border-radius: 28px 28px 0 0`)**, tidak lancip, dengan latar `#F7F4EB`.
    * **Penanda Swipe di Ujung Atas Tengah (*Drag Handle Pill*):** Persegi panjang kecil yang punya sudut *rounded* (`width: 48px`, `height: 5px`, `border-radius: 9999px`, warna `#94A3B8` / `#C0D5E5`) tepat di bagian tengah atas *sheet*.
    * **Area Konten Di Dalam Sheet (`overflowY: "auto"` — Bisa Di-Scroll Sampai Habis):**
      1. **Unggah File Dokumen:** Kartu ber-ikon SVG `FileUp` untuk unggah draf (`.md`, `.txt`, `.docx`).
      2. **Kueri Target:** Kartu ber-ikon SVG `Search` dengan `<input type="text" defaultValue="resep kopi tubruk tradisional" />` + tombol `Simpan`.
      3. **Ambang Batas (WAJIB 4 `<input type="range">` Slider Geser Volume-Style):**
         * Setiap baris menampilkan nama metrik, nilai angka, dan **batang slider `<input type="range">` asli lengkap dengan bulatan penggesernya (*thumb*)** yang bisa digeser kiri-kanan di browser:
           - `VSM Cosine Similarity` (`min="0.10" max="1.00" step="0.05" defaultValue="0.60"`) — `≤ 0.60`
           - `MATTR (Kekayaan Leksikal)` (`min="0.10" max="1.00" step="0.05" defaultValue="0.55"`) — `≥ 0.55`
           - `HKO Overlap (Sub-judul)` (`min="0" max="100" step="5" defaultValue="40"`) — `≤ 40%`
           - `Skor Lolos Standar (CDS)` (`min="50" max="100" step="5" defaultValue="75"`) — `≥ 75%`

---

### Layar 3: `specs/gatekeeper/03-sidebar-belum-login.mockup.tsx`
* **Title:** `"3. Sidebar Navigasi (Kondisi Belum Login)"`
* **Tampilan Utama (Wajib Tampil Langsung di `mobile` dan `desktop`):**
  * Menampilkan **Sidebar yang menutupi 100% layar penuh (`width: 100%`, `height: 100%`, latar `#F7F4EB`)** pada kondisi **Belum Login**:
  * **Header Sidebar (Fixed di Atas):**
    * Kiri: **Logo SVG Waskita**.
    * Kanan: Tombol tutup/singkap sidebar (SVG `X` / `PanelLeftClose`).
  * **Konten Tengah (Jarak `30px` di bawah Header):**
    * Tombol pilihan **`Analisis Baru`** dengan ikon SVG `SquarePen`.
    * Di bawahnya terdapat kotak informasi (`background: #E9DFCA`, `border-radius: 16px`, `padding: 14px`) dengan **SVG `Info`**:
      > **"Masuk untuk menyimpan riwayat analisis Anda"** *(terjemahan Bahasa Indonesia dari Sign in to save activity)*.
  * **Footer Sidebar (Fixed di Paling Bawah):**
    * Sebelah Kiri: Tombol melengkung **`Sign In`** (`background: #C0CEE8`, `border-radius: 9999px`, `padding: 10px 24px`, `fontWeight: 700`).
    * Ujung Kanan: Tombol Ikon **Pengaturan (SVG `Settings`)**.

---

### Layar 4: `specs/gatekeeper/04-sidebar-sudah-login.mockup.tsx`
* **Title:** `"4. Sidebar Navigasi (Kondisi Sudah Login & Riwayat Gemini-Style)"`
* **Tampilan Utama (Wajib Tampil Langsung di `mobile` dan `desktop`):**
  * Menampilkan **Sidebar yang menutupi 100% layar penuh (`width: 100%`, `height: 100%`, latar `#F7F4EB`)** pada kondisi **Sudah Login**:
  * **Header Sidebar (Fixed di Atas + Efek Transparan / Fade di Bawahnya):**
    * Kiri: **Logo SVG Waskita**.
    * Kanan: **Tombol Pencarian (SVG `Search` Kaca Pembesar)** di sebelah kiri (jarak `14px`) dari **Tombol Silang (SVG `X`)**.
    * **Gradasi Transparan Bawah Header:** Memiliki lapisan `background: linear-gradient(to bottom, #F7F4EB 65%, rgba(247, 244, 235, 0) 100%)` di bawah header sehingga saat daftar riwayat di-*scroll*, judul riwayat tampak tenggelam dengan mulus ke atas.
  * **Konten Tengah (Scrollable Riwayat Analisis — Di Antara Header & Footer):**
    * Hanya area tengah ini yang bisa di-*scroll* ke atas/bawah (`overflowY: "auto"`), sedangkan Header dan Footer tetap diam (*fixed*).
    * Di bagian atas terdapat pilihan **`Analisis Baru`** (SVG `SquarePen`).
    * Daftar riwayat analisis dibuat bersih **mirip Gemini** (**TANPA** badge CDS dan **TANPA** kotak *outline*):
      * Setiap baris berisi **Judul Riwayat Analisis** (`whiteSpace: "nowrap"`, `overflow: "hidden"`, `textOverflow: "ellipsis"` sehingga judul kepanjangan otomatis berubah jadi `...`).
      * Setelah spasi **`7px`**, terdapat tombol **Titik Tiga (SVG `MoreVertical`)**.
      * Pada salah satu item riwayat, tampilkan **Menu Popover Titik Tiga** yang terbuka (dan juga bisa di-*toggle* dengan klik `<label>`), berisi 4 menu lengkap dengan ikon SVG:
        1. SVG `Share2` — **Share Analisis**
        2. SVG `Pin` — **Pin**
        3. SVG `Pencil` — **Rename**
        4. SVG `Trash2` — **Delete**
  * **Footer Sidebar (Fixed di Paling Bawah):**
    * Sebelah Kiri: **Lingkaran Foto Profil (Avatar)** + di sampingnya:
      * Baris atas: **Username** (dibatasi dengan `textOverflow: "ellipsis"` / `...` jika kepanjangan, contoh: `"ahmadsaifalmuflihin_official..."`).
      * Baris bawah: Status Plan (`Free`, `Basic`, atau `Pro`).
    * Ujung Kanan: Tombol Ikon **Pengaturan (SVG `Settings`)**.

---

### Layar 5: `specs/gatekeeper/05-hasil-audit-utuh.mockup.tsx`
* **Title:** `"5. Hasil Audit (Satu Background Utuh Tanpa Kotak Ganda)"`
* **Tampilan Utama (Wajib Persis Seperti Struktur Gambar 2 Referensi User!):**
  * **Header (`56px`):**
    * Kiri: Tetap **Ikon Burger Sidebar (SVG `Menu`)** (bukan panah kiri!).
    * Tengah: **Logo SVG Waskita** (tanpa teks tambahan).
    * Kanan: Tombol **Titik Tiga (SVG `MoreVertical`)** (saat sudah login; jika diklik via `<label>` membuka menu popover berisi: `Salin Ringkasan Hasil`, `Unduh Laporan`, `Salin Teks Artikel`, `Share Analisis`, `Pin`, `Rename`, `Delete` lengkap dengan ikon SVG).
  * **Area Scrollable Hasil Analisis — HANYA 1 BACKGROUND UTUH (ANTI-DOUBLE-BACKGROUND!):**
    * ❌ **DILARANG KERAS** membuat kartu/kotak di dalam kotak! Jangan membungkus *Status Kelayakan* atau *Metrik Stilometri* dengan kotak `#F7F4EB` lagi di dalam kontainer!
    * ✅ Buat **SATU permukaan kontainer tunggal yang bersih** (`background: "#FFFFFF"` atau `"#F7F4EB"` di atas kanvas, dengan `borderRadius: "24px"`, `padding: "20px 18px"`, `border: "1px solid #E9DFCA"`), di mana ke-6 bagian di bawah ini langsung mengalir dari atas ke bawah dalam **1 background yang sama**, dan antar-bagiannya **HANYA dipisahkan oleh garis tipis (`borderBottom: "1px solid #E9DFCA"`) serta jarak spasi (`padding: "20px 0"`)**:
      1. **Status Kelayakan:** Judul, subjudul *Content Differentiation Score (CDS)*, badge `Perlu Revisi`, *Semi-Circle Radial Gauge* (`70%` dengan garis ambang `75`), dan kalimat teks penyebab di bawah gauge (tanpa kotak kuning tambahan!).
      2. **Metrik Stilometri & Leksikal:** Judul, subjudul, dan 3 *progress bar* tipis dengan garis penanda batas (`VSM Cosine Similarity 0.48`, `MATTR 0.61`, `HKO Overlap 25%`) — langsung di atas permukaan yang sama persis seperti Gambar 2!
      3. **Celah Topik · Information Gain:** Deretan *chip* $\Delta_{\text{deficit}}$ (`Takaran Suhu 90°C`, `Rasio Seduh 1:15`, `Tingkat Gilingan Bubuk`) dan $\Delta_{\text{gain}}$ (`Robusta Dampit`, `Pemanis Aren Alami`).
      4. **Naskah Terkurasi & Anotasi:** Legenda 4 warna (`Kuning`, `Merah`, `Biru`, `Hijau`), teks naskah ber-stabilo, dan catatan penjelasan anotasi.
      5. **Overview & Prompt Bantuan:** Poin evaluasi editorial + kotak kode `prompt-bantuan.txt` + tombol `Salin Prompt`.
      6. **Referensi SERP · Top 3 Google:** 3 baris referensi artikel kompetitor.
  * **Bagian Bawah Layar (Persistent Floating Input Capsule):**
    * Tetap menampilkan kapsul input melayang di bawah (`+`, `"Ketik atau tempel naskah..."`, tombol panah kanan SVG `ArrowRight`) agar pengguna bisa langsung mem-*paste* revisi naskahnya di ruang analisis yang sama!

---

### Layar 6: `specs/gatekeeper/06-multi-iterasi-revisi.mockup.tsx`
* **Title:** `"6. Alur Revisi Berkelanjutan (Analisis 1 vs Analisis 2 Terpisah)"`
* **Tampilan Utama:**
  * Menampilkan bagaimana jika pengguna sudah melakukan **Analisis 1**, lalu menempelkan revisi di *input field* bawah untuk menjalankan **Analisis 2** di ruang obrolan yang sama:
    1. **Blok Kesatuan Hasil Analisis 1 (CDS 70% - Perlu Revisi):** 1 permukaan background utuh (dengan pemisah garis tipis di dalamnya, tanpa kotak ganda).
    2. **Jarak Pemisah Antar-Analisis + Bubble Kiriman Naskah Revisi Pengguna (`#E9DFCA`).**
    3. **Blok Kesatuan Hasil Analisis 2 (CDS 85% - Siap Terbit):** 1 permukaan background utuh baru yang **terpisah dari blok Analisis 1**, sehingga jelas mana hasil Analisis Kesatu dan mana hasil Analisis Kedua!
    4. **Persistent Floating Input Capsule** tetap berada di bagian paling bawah layar.

---

## 🛠️ PEMBAGIAN TUGAS WORKER (INSTRUKSI EKSEKUSI DEVOPS)

1. **Worker 1 (`proyekmagang/worker-1`):**
   * Menghapus folder usang `specs/auth/` dan `specs/dashboard/` serta file lama di `specs/gatekeeper/`.
   * Membangun **Layar 1 (`01-landing.mockup.tsx`)**, **Layar 2 (`02-popup-tombol-plus.mockup.tsx`)**, **Layar 3 (`03-sidebar-belum-login.mockup.tsx`)**, dan **Layar 4 (`04-sidebar-sudah-login.mockup.tsx`)**.
   * Wajib memastikan properti `mobile` dan `desktop` menampilkan isi yang 100% identik, menggunakan CSS `:checked` toggle dan `<input type="range">` asli sehingga bisa dipencet/digeser di Mokly.
2. **Worker 2 (`proyekmagang/worker-2`):**
   * Membangun **Layar 5 (`05-hasil-audit-utuh.mockup.tsx`)** dan **Layar 6 (`06-multi-iterasi-revisi.mockup.tsx`)**.
   * **WAJIB MENGHILANGKAN KOTAK GANDA (DOUBLE BACKGROUND)**: Di dalam 1 giliran analisis, seluruh 6 seksi (Status Kelayakan s.d. Referensi SERP) berada dalam **1 lapis background tunggal** dan hanya dipisahkan garis tipis (`1px solid`) / spasi vertikal persis seperti Gambar 2!
3. **Worker 3 (`proyekmagang/worker-3`):**
   * Menjalankan `npx mokly generate` dan `npx mokly check --strict`.
   * Memeriksa hasil render `index.mobile.html` dan `index.desktop.html` untuk memastikan:
     - Tidak ada *double background* pada Hasil Audit.
     - Layar 2 benar-benar tampil sebagai *Popup Bottom Sheet Setengah Halaman (`50%`)* dengan *backdrop* gelap di atasnya dan 4 `<input type="range">` slider geser.
     - Layar 3 & Layar 4 menampilkan *Sidebar Fullscreen* (Belum Login & Sudah Login) secara utuh di viewport `MOBILE`.
