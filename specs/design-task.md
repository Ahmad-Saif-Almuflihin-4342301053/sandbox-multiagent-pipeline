# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V2.1): WASKITA — PRE-PUBLISHING QUALITY GATEKEEPER

> **Dokumen Resmi Handover:** System Analyst (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Implementasi:** Katalog Mockup Interaktif Berbasis DOM Minimal di Mokly (`specs/gatekeeper/*.mockup.tsx`)

---

## 1. ATURAN MUTLAK: ZERO EMOJI & IKON VEKTOR PROFESIONAL (LUCIDE SVG)

> [!CAUTION]
> **LARANGAN KERAS PENGGUNAAN EMOJI BAWAAN OS / WHATSAPP:**
> **DILARANG MUTLAK** menggunakan karakter emoji Unicode (`🛡️`, `📄`, `🔍`, `⚡`, `⚙️`, `📋`, `📥`, `🔗`, `📌`, `✏️`, `🗑️`, `🕒`) ataupun simbol teks ASCII kasar (`☰`, `✕`, `→`, `⋮`) di seluruh halaman!
>
> **WAJIB 100%** menggunakan **Inline SVG Vector Icons berstandar profesional (Lucide Icons / Heroicons)** dengan `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `strokeWidth="1.8"`, `strokeLinecap="round"`, `strokeLinejoin="round"`:
> * **Burger Sidebar:** SVG `Menu` (`<path d="M4 6h16M4 12h16M4 18h12" />`)
> * **Tutup / Silang:** SVG `X` (`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`)
> * **Pencarian Sidebar:** SVG `Search` (`<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`)
> * **Tombol Tambah (`+`):** SVG `Plus` (`<path d="M5 12h14"/><path d="M12 5v14"/>`)
> * **Tombol Kirim Panah Kanan:** SVG `ArrowRight` (`<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`)
> * **Menu Titik Tiga:** SVG `MoreVertical` (`<circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/>`)
> * **Analisis Baru:** SVG `SquarePen` (`<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>`)
> * **Ikon Informasi:** SVG `Info` (`<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`)
> * **Pengaturan (Settings):** SVG `Settings` (Gear vector presisi)
> * **File Dokumen:** SVG `FileUp` (`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/>`)
> * **Kueri Target:** SVG `Globe` / `Search`
> * **Ambang Batas:** SVG `SlidersHorizontal` (`<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>`)
> * **Menu Aksi (`Share`, `Pin`, `Rename`, `Delete`, `Salin Ringkasan`, `Unduh Laporan`, `Salin Teks`):** Wajib menggunakan SVG `Share2`, `Pin`, `Pencil`, `Trash2`, `ClipboardCopy`, `Download`, dan `FileText`.

---

## 2. PALET WARNA RESMI & IDENTITAS VISUAL "WASKITA"

Seluruh komponen wajib menggunakan **5 Warna Palet Resmi Waskita**:

| Kode Hex | Nama Token Visual | Peruntukan Hierarki UI (Zero-Hallucination Mapping) |
| :--- | :--- | :--- |
| **`#F7F4EB`** | **Warm Cream / Alabaster** | **Latar Utama Aplikasi (*Primary App Background*)**, latar *Fullscreen Sidebar*, dan latar kanvas utama di sela-sela blok analisis. |
| **`#E9DFCA`** | **Warm Sand / Oatmeal** | **Permukaan Sekunder (*Secondary Surface*)**: Kontainer *Floating Input Capsule* bawah, permukaan kartu di dalam *Bottom Sheet*, kotak info *guest* di sidebar, dan *bubble* kiriman naskah pengguna. |
| **`#D4E5F2`** | **Soft Ice Blue** | **Permukaan Kesatuan Analisis (*Unified Result Surface*)**: Latar belakang utuh untuk 1 blok giliran hasil analisis (Analisis 1 memiliki 1 blok `#D4E5F2` utuh; Analisis 2 memiliki 1 blok `#D4E5F2` utuh yang terpisah dari Analisis 1). |
| **`#C0D5E5`** | **Muted Sky Blue** | **Elemen Interaktif & Kontrol (*Interactive Controls*)**: Track *Range Slider* ambang batas, tombol bulat `(+)`, *hover/active state* baris riwayat sidebar, dan *popover* menu titik tiga. |
| **`#C0CEE8`** | **Soft Periwinkle** | **Aksen Utama (*Primary Accent*)**: Tombol kapsul `Sign in`, tombol kirim panah kanan, *thumb/fill* aktif pada slider, dan lencana *Plan* (`Free` / `Basic` / `Pro`). |
| **`#1E293B`** | **Deep Slate Ink** | **Tipografi Utama & Stroke Ikon SVG**: Memberikan kontras tajam dan elegan di atas kelima warna pastel. |

### Aturan Penggunaan Logo Waskita
* Gunakan inline SVG dari `assets/logo/logo-waskita-light.svg` (`viewBox="0 0 160 34"`).
* Karena SVG tersebut **sudah berupa logotype tulisan "waskita"**, **DILARANG** menulis ulang teks `"Waskita"` atau `"Gatekeeper Audit"` di sebelah logo pada Header maupun Sidebar.

---

## 3. SPESIFIKASI DETAIL PER KOMPONEN & LAYAR

### 3.1. Layar Awal / Landing State (Belum Ada Aktivitas)

#### A. Header Landing (`height: 56px`, latar `#F7F4EB`)
* **Kiri:** Tombol SVG `Menu` (Burger) untuk membuka Sidebar.
* **Tengah:** **Logo Waskita** (SVG logotype murni, tanpa teks tambahan).
* **Kanan (Kondisional berdasarkan status Login):**
  * **Jika Belum Login:** Tombol **`Sign in`** berbentuk kapsul melengkung penuh (`border-radius: 9999px`, latar `#C0CEE8`, teks `#1E293B` font-weight `600`). **DILARANG** menampilkan titik tiga saat belum login.
  * **Jika Sudah Login:** Tombol SVG `MoreVertical` (Titik Tiga).

#### B. Konten Tengah (Hero Area)
* Ketika belum ada aktivitas analisis, bagian tengah layar **HANYA** menampilkan:
  1. **Logo Waskita**
  2. **Teks CTA Utama:** **`Segera Periksa, ARTIKELMU!`**
* **LARANGAN KERAS DI AREA HERO:**
  * ❌ **DILARANG** menampilkan paragraf deskripsi panjang (*"Evaluasi diferensiasi topik..."*).
  * ❌ **DILARANG** menampilkan chip `Muat Sampel Kopi Tubruk`.
  * ❌ **DILARANG** menampilkan chip `Unggah Dokumen`.

#### C. Persistent Floating Input Capsule (Bagian Bawah)
* **LARANGAN KERAS DI AREA INPUT:**
  * ❌ **DILARANG** menampilkan *suggestion bar* atau *context pill* di atas kapsul input.
  * ❌ **DILARANG** mencantumkan teks `"min. 300 kata"` pada *placeholder* maupun di luar *input field*.
* **Komposisi Kapsul Input (`background: #E9DFCA`, `border-radius: 28px`):**
  1. **Kiri:** Tombol bulat (`40x40px`, latar `#C0D5E5`) berisi **SVG `Plus`** untuk membuka *Bottom Sheet* `Opsi Audit & Masukan`.
  2. **Tengah:** `<textarea>` *auto-grow* dengan *placeholder* bersih: **`"Ketik atau tempel naskah..."`**.
  3. **Kanan:** Tombol kirim bulat (`40x40px`, latar `#C0CEE8`) yang **HANYA berisi SVG `ArrowRight` (Panah Kanan)** — ❌ **TANPA** ikon perisai dan ❌ **TANPA** tulisan `"Audit"`.

---

### 3.2. Pop-up Bottom Sheet: "Opsi Audit & Masukan" (Dipicu Tombol `+`)

Ketika tombol `+` dipencet, muncul *Bottom Sheet Modal* dengan ergonomi *native mobile sheet* berikut:

1. **Proporsi Tinggi Awal (Half-Screen `~50%`) & Backdrop Gelap Opacity Rendah:**
   * Saat pertama kali terbuka, tinggi *Bottom Sheet* adalah **separuh halaman (`height: 50%`)**.
   * Sisa separuh layar di bagian atas ditutupi oleh **backdrop gelap dengan opacity rendah** (`background: rgba(15, 23, 42, 0.32)`, `backdrop-filter: blur(2px)`).
2. **Sudut Melengkung (*Rounded Top*) & Penanda Geser (*Drag Handle Pill*):**
   * Bagian atas *Bottom Sheet* tidak boleh lancip, wajib **melengkung halus (`border-radius: 28px 28px 0 0`)** dengan latar `#F7F4EB`.
   * Di ujung atas tengah *sheet* **WAJIB terdapat penanda persegi panjang kecil yang melengkung (*drag handle pill*)** berukuran `width: 48px`, `height: 5px`, `border-radius: 9999px`, warna `#C0D5E5` / `#94A3B8`.
   * Fungsi *drag handle*: Memberi tahu pengguna bahwa *sheet* dapat **di-*swipe* ke atas (diperluas hingga `~88%` tinggi layar)** untuk melihat isi tombol `+` secara lengkap.
3. **Mekanisme Swipe-Up & Scroll Konten Sampai Habis:**
   * Di dalam DOM minimal Mokly, pengguna dapat mengeklik/menarik *drag handle* atau men-*swipe* ke atas untuk mengekspansi *sheet* dari `50%` ke `88%` layar dengan transisi mulus (`transition: height 0.32s cubic-bezier(0.22, 1, 0.36, 1)`).
   * Kontainer isi di dalam *sheet* memiliki `overflow-y: auto` (`scroll-behavior: smooth`) sehingga pengguna bisa **terus men-*swipe* / men-*scroll* ke bawah sampai seluruh konten habis terbaca**.
4. **Isi Konten di Dalam Bottom Sheet:**
   * **Bagian 1 — File Dokumen:** Kartu interaktif dengan SVG `FileUp` untuk mengunggah berkas draf (`.md`, `.txt`, `.docx`).
   * **Bagian 2 — Kueri Target:** Kartu dengan SVG `Search` dan `<input type="text">` untuk menetapkan kueri pencarian Google.
   * **Bagian 3 — Ambang Batas (Interactive Range Sliders `<input type="range">`):**
     * Menggunakan **Slider Geser seperti pengatur volume** yang dapat digeser kiri-kanan secara *live* (`oninput` memperbarui angka indikator di sebelahnya):
       1. **VSM Cosine Similarity:** Slider `0.10` – `1.00` (Default: `0.60`).
       2. **MATTR (Kekayaan Leksikal):** Slider `0.10` – `1.00` (Default: `0.55`).
       3. **HKO Overlap (Sub-judul):** Slider `0%` – `100%` (Default: `40%`).
       4. **Skor Lolos Standar (CDS):** Slider `50%` – `100%` (Default: `75%`).

---

### 3.3. Sidebar Navigasi (SVG `Menu`) — Fullscreen Mobile (`100%` Layar) & 2 Kondisi

> [!WARNING]
> **Aturan Mutlak Sidebar:** Sidebar **HANYA** berisi navigasi sesi & riwayat analisis (tidak boleh ada Opsi Masukan & Ambang Batas). Saat dibuka di mobile, Sidebar **menutupi seluruh layar penuh (`width: 100%`, `height: 100%`)** dengan latar `#F7F4EB`.

#### Kondisi 1: Sidebar Saat BELUM LOGIN (Guest State)
* **Header Sidebar (Fixed di Atas):**
  * Kiri: **Logo Waskita** (SVG).
  * Kanan: Tombol tutup/singkap sidebar (SVG `X` / `PanelLeftClose`).
* **Konten Sidebar (Jarak `30px` di bawah Header):**
  * Tombol aksi **`Analisis Baru`** dengan ikon SVG `SquarePen` / `Plus`.
  * Di bawahnya terdapat kartu/baris informasi berlatar `#E9DFCA` dengan **SVG `Info`**:
    > *"Masuk untuk menyimpan riwayat analisis Anda"* (terjemahan Bahasa Indonesia dari *Sign in to save activity*).
* **Footer Sidebar (Fixed di Paling Bawah):**
  * Ujung Kiri: Tombol kapsul **`Sign In`** (`background: #C0CEE8`, `border-radius: 9999px`).
  * Ujung Kanan: **Tombol Ikon Pengaturan (SVG `Settings`)** (visual statis MVP).

#### Kondisi 2: Sidebar Saat SUDAH LOGIN (Authenticated State)
* **Header Sidebar (Fixed di Atas + Efek Transparan / Fade Bawah):**
  * Kiri: **Logo Waskita** (SVG).
  * Kanan: **Tombol Pencarian (SVG `Search` Kaca Pembesar)** berjarak `12px–16px` di sebelah kiri **Tombol Silang (SVG `X`)**.
  * **Efek Gradasi Transparan Bawah Header:** Bagian bawah header dilengkapi *gradient fade* transparan (`linear-gradient(180deg, #F7F4EB 65%, rgba(247,244,235,0) 100%)`) sehingga saat daftar riwayat di-*scroll*, item riwayat tampak tenggelam mulus ke atas.
* **Body Sidebar (Area Scrollable Riwayat Analisis — Di Antara Header & Footer):**
  * Hanya bagian tengah ini yang dapat di-*scroll* ke atas/bawah (`overflow-y: auto`); Header dan Footer tetap diam (*fixed*).
  * Di bagian atas daftar tetap tersedia tombol **`Analisis Baru`** (SVG `SquarePen`).
  * Daftar riwayat analisis dibuat bersih **mirip Gemini**:
    * ❌ **TANPA** kotak *outline/border* kaku.
    * ❌ **TANPA** badge persentase CDS.
  * Setiap baris item riwayat menampilkan:
    * **Judul Riwayat Analisis** (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis` sehingga judul panjang otomatis menjadi `...`).
    * Jarak spasi **`7px`**, diikuti tombol **Titik Tiga (SVG `MoreVertical`)**.
  * **Popover Menu Titik Tiga pada Item Riwayat Sidebar (Lengkap dengan Ikon SVG Profesional):**
    1. SVG `Share2` — **Share Analisis**
    2. SVG `Pin` — **Pin**
    3. SVG `Pencil` — **Rename**
    4. SVG `Trash2` — **Delete**
* **Footer Sidebar (Fixed di Paling Bawah):**
  * Kiri: **Lingkaran Foto Profil (Avatar)** + di sebelah kanannya:
    * Baris atas: **Username** (wajib dibatasi lebar maksimumnya dengan `text-overflow: ellipsis` / `...` jika terlalu panjang).
    * Baris bawah: **Badge/Label Plan** (`Free`, `Basic`, atau `Pro` dengan aksen `#C0CEE8`).
  * Ujung Kanan: **Tombol Ikon Pengaturan (SVG `Settings`)**.

---

### 3.4. Layar Hasil Audit & Alur Multi-Iterasi (Analisis 1 vs Analisis 2 dst.)

#### A. Header Hasil Audit (`height: 56px`, latar `#F7F4EB`)
* **Kiri:** Tetap menggunakan **Ikon Burger Sidebar (SVG `Menu`)** — ❌ **DILARANG** menggunakan panah kiri.
* **Tengah:** **Logo Waskita** (SVG) — ❌ **DILARANG** menampilkan teks `"Hasil Audit Gatekeeper"`.
* **Kanan:**
  * Jika **Belum Login**: Tombol melengkung **`Sign in`** (`border-radius: 9999px`).
  * Jika **Sudah Login**: Tombol **Titik Tiga (SVG `MoreVertical`)**.
* **Isi Menu Titik Tiga di Header Hasil Audit (Saat Sudah Login — Semua Ber-Ikon SVG):**
  1. SVG `ClipboardCopy` — **Salin Ringkasan Hasil**
  2. SVG `Download` — **Unduh Laporan**
  3. SVG `FileText` — **Salin Teks Artikel**
  4. *(Garis pemisah halus)*
  5. SVG `Share2` — **Share Analisis**
  6. SVG `Pin` — **Pin**
  7. SVG `Pencil` — **Rename**
  8. SVG `Trash2` — **Delete**

#### B. Perilaku Popup Loading Pipeline (Fade & Hilang)
* Indikator *loading* proses komputasi hanya muncul sementara saat tombol kirim dipencet, lalu **otomatis fade-out dan menghilang sepenuhnya** ketika hasil analisis muncul.

#### C. Aturan Background Hasil Analisis: Satu Kesatuan per Analisis, Terpisah Antar-Iterasi Analisis
* **Di Dalam 1 Giliran Analisis (Misal: Hasil Analisis Pertama):**
  * Seluruh seksi mulai dari **1. Status Kelayakan (Radial Gauge)** $\rightarrow$ **2. Metrik Stilometri & Leksikal** $\rightarrow$ **3. Celah Topik ($\Delta_{\text{deficit}}/\Delta_{\text{gain}}$)** $\rightarrow$ **4. Naskah Terkurasi & Anotasi 4-Warna** $\rightarrow$ **5. Overview & Prompt Bantuan** $\rightarrow$ **6. Referensi Top 3 SERP** berada di dalam **SATU Kontainer Background Utuh (`background: #D4E5F2`, `border-radius: 24px`)** yang mengalir mulus dan hanya dipisahkan oleh jarak spasi vertikal (`padding`/`margin`) serta garis pemisah halus.
* **Antara Analisis Pertama dan Analisis Kedua dst. (Saat Pengguna Melakukan Analisis Ulang / Revisi di Ruang yang Sama):**
  * Ketika pengguna menempelkan naskah revisi pada *input field* bawah lalu menekan kirim, muncul:
    1. **Kontainer Utuh Hasil Analisis 1** (`background: #D4E5F2`)
    2. *(Jarak spasi luar di atas latar utama `#F7F4EB` + Bubble Naskah Revisi Pengguna berlatar `#E9DFCA`)*
    3. **Kontainer Utuh Hasil Analisis 2** (`background: #D4E5F2` baru yang **TERPISAH** dari kontainer Analisis 1).
  * Dengan pemisahan antar-giliran analisis ini, pengguna dapat membedakan secara jelas mana blok **Hasil Analisis Pertama**, mana blok **Hasil Analisis Kedua**, dan seterusnya, sementara isi di dalam masing-masing analisis tetap menyatu rapi!

#### D. Persistent Floating Input Capsule di Bawah Hasil Analisis
* Di bagian paling bawah layar Hasil Audit, **Floating Input Capsule (Tombol SVG `Plus`, `<textarea>` `"Ketik atau tempel naskah..."`, dan Tombol SVG `ArrowRight`) WAJIB TETAP ADA** agar pengguna dapat langsung mem-*paste* revisi artikelnya untuk dianalisis kembali pada sesi yang sama.

---

## 4. PARTISI TUGAS 3 WORKER UNTUK IMPLEMENTASI MOKLY

### 🛠️ WORKER 1 (`proyekmagang/worker-1` — Core, Landing, Bottom Sheet & Sidebar Engineer)
1. Memperbarui `specs/gatekeeper/landing-zero-login.mockup.tsx` dan `specs/gatekeeper/options-and-history.mockup.tsx`:
   * Mengganti seluruh emoji/simbol teks dengan **Inline SVG Vector Icons (Lucide)** dan memasang **Logo SVG Waskita** (`assets/logo/logo-waskita-light.svg`).
   * Menerapkan palet warna `#F7F4EB`, `#E9DFCA`, `#D4E5F2`, `#C0D5E5`, `#C0CEE8`.
   * Menyusun **Landing State** bersih (Header: Burger + Logo Waskita + `Sign in` melengkung; Hero: Logo + `"Segera Periksa, ARTIKELMU!"`; Input bawah: `+`, `"Ketik atau tempel naskah..."`, panah kanan).
   * Menyusun **Bottom Sheet `Opsi Audit & Masukan`**: Muncul setinggi **separuh halaman (`50%`)** dengan *backdrop* gelap opacity rendah, sudut atas *rounded* (`28px`), **persegi panjang *rounded drag handle*** di ujung atas untuk *swipe-up* hingga `88%` layar, serta *scrollable* sampai habis memuat File Dokumen, Kueri Target, dan **4 Range Sliders (`<input type="range">`)** Ambang Batas.
   * Menyusun **Fullscreen Sidebar (`100%` layar)** dalam 2 kondisi (*Belum Login* vs *Sudah Login*) lengkap dengan *sticky header* ber-gradasi transparan, daftar riwayat ala Gemini (judul *ellipsis* + spasi `7px` + menu titik tiga ber-ikon SVG `Share`, `Pin`, `Rename`, `Delete`), serta *sticky footer* (Avatar + Username *ellipsis* + Plan `Free/Basic/Pro` + SVG `Settings`).
   * Menyertakan `<script>` DOM minimal agar klik `+`, *swipe/expand* *Bottom Sheet*, geser *slider*, buka/tutup *Sidebar*, dan klik `Sign in` berjalan interaktif.

### 🎨 WORKER 2 (`proyekmagang/worker-2` — Audit Result Stream & Multi-Iteration Engineer)
1. Memperbarui `specs/gatekeeper/audit-perlu-revisi.mockup.tsx` dan `specs/gatekeeper/audit-siap-terbit-serp.mockup.tsx`:
   * Mengganti seluruh emoji dengan **Inline SVG Vector Icons (Lucide)** dan memasang **Header Waskita** (Kiri: SVG `Menu` Burger, Tengah: Logo SVG Waskita, Kanan: `Sign in` saat belum login / SVG `MoreVertical` saat sudah login).
   * Menyusun menu klik Titik Tiga Header berisi 7 aksi ber-ikon SVG (`Salin Ringkasan Hasil`, `Unduh Laporan`, `Salin Teks Artikel`, `Share Analisis`, `Pin`, `Rename`, `Delete`).
   * Menghapus kartu *Pipeline* permanen (menjadikannya *loading popup* yang *fade-out* dan hilang saat hasil tampil).
   * Menyatukan seluruh seksi di dalam satu giliran analisis ke dalam **Satu Kontainer Background Utuh (`#D4E5F2`)**, namun **memisahkan kontainer antara Hasil Analisis 1 (Versi Awal - Perlu Revisi) dan Hasil Analisis 2 (Versi Revisi - Siap Terbit)** di dalam *stream* yang sama sehingga terlihat jelas batas antara analisis pertama, kedua, dst.
   * Mempertahankan **Persistent Floating Input Capsule** di bagian bawah layar Hasil Audit beserta `<script>` DOM minimal untuk simulasi klik stabilo 4 warna, salin prompt, buka *Bottom Sheet* (`+`), buka *Sidebar*, dan kirim analisis lanjutan.

### 🛡️ WORKER 3 (`proyekmagang/worker-3` — QA & Zero-Emoji Verification Engineer)
1. Menjalankan `npx mokly generate` dan `npx mokly check` hingga lulus `0 errors`.
2. Melakukan *grep* & audit visual untuk memastikan **0 karakter emoji Unicode** tersisa di seluruh file `specs/gatekeeper/*.mockup.tsx`, seluruh tombol dan *sheet* dapat diklik/di-*scroll* dengan mulus di `http://127.0.0.1:4173`, dan seluruh aturan tata letak Waskita V2.1 terpenuhi 100%.
