# STANDAR OPERASIONAL BAKU: VIBE ENGINEERING (KURIKULUM EKO KURNIAWAN KHANNEDY / PZN)

> **Status Dokumen:** HUKUM REKAYASA WAJIB (MANDATORY ENGINEERING LAW)  
> **Berlaku Untuk:** Seluruh Agen di Pipeline (System Analyst / Chat 1, DevOps Dispatcher / Chat 2, Sub-Workers 1A/1B/2A/2B, dan QA Reviewer / Worker 3)  
> **Rujukan Utama:** Materi *Vibe Coding untuk Programmer* — Eko Kurniawan Khannedy (*Programmer Zaman Now*)

---

## 1. Filosofi Dasar: Vibe Engineering vs Vibe Coding Ngawur

Dalam pengembangan perangkat lunak profesional menggunakan AI, terdapat batas tegas antara *Vibe Coding* amatir dan **Vibe Engineering** profesional:

1. **DILARANG "Terima Apa Adanya" (*Zero Blind Acceptance*):**
   * Programmer dan Agen Reviewer adalah **Pemegang Kendali Penuh (Tech Lead)**, sedangkan AI Worker hanyalah asisten eksekutor.
   * Menerima, melakukan *commit*, atau melakukan *merge* kode hasil AI tanpa membaca `git diff` baris demi baris dan tanpa memverifikasi hasil tampilan/runtime nyata adalah **pelanggaran fatal**.
2. **DILARANG "Improvisasi Buta" (*Zero Blind Improvisation*):**
   * Setiap agen (terutama Worker) **DILARANG KERAS** mengarang fitur tambahan, mengganti palet warna, menambah elemen dekoratif, membuat komponen di luar spesifikasi, atau "memperbaiki" sesuatu secara membabi-buta tanpa batasan tertulis di dokumen spesifikasi (`specs/`).
   * Jika spesifikasi mengatakan 5 warna pastel dan 1 background utuh `#D4E5F2`, Worker dilarang mengubahnya menjadi `#FFFFFF` atau menambahkan kartu bersarang (*nested cards*).
3. **Sampah Masuk = Sampah Keluar (*Context & Spec Grounding*):**
   * AI akan berhalusinasi jika diberi instruksi kabur atau terlalu besar. Oleh karena itu, setiap pekerjaan wajib diawali dengan spesifikasi teknis yang deterministik, terukur, dan bebas ambiguitas.

---

## 2. Arsitektur Pemilihan & Pembagian Peran Model (Dual-Tier Model Strategy)

Sesuai ajaran Pak Eko Kurniawan Khannedy, penggunaan model AI harus dibagi berdasarkan kapasitas penalaran dan kecepatan eksekusi:

| Peran Agen | Tingkat Model | Tanggung Jawab Utama | Larangan Keras |
| :--- | :--- | :--- | :--- |
| **System Analyst / Lead Architect (Chat 1)** | **High-Reasoning / Thinking Model** | Menganalisis akar masalah (*root cause*), merancang arsitektur, menulis spesifikasi detail di `specs/`, memvalidasi *edge cases*, dan menyusun pembagian tugas parsial. | Dilarang memberikan spesifikasi abstrak/ambigu kepada DevOps & Worker. |
| **DevOps & Orchestrator (Chat 2)** | **Orchestration Model** | Mengelola *GitHub Issue*, mendistribusikan tugas ke Sub-Worker secara paralel/terstruktur, dan menjaga gerbang *merge* ke `main`. | **DILARANG BLIND MERGE** PR sebelum ada bukti audit visual & kode dari QA. |
| **Sub-Workers (1A, 1B, 2A, 2B)** | **Fast Execution / Coding Model** | Menulis implementasi kode pada **file parsial** masing-masing sesuai kontrak spesifikasi 100%. | Dilarang membuat file monolitik raksasa (>300 baris), dilarang menyentuh file sub-worker lain, dilarang berimprovisasi di luar spek. |
| **QA & Code Reviewer (Worker 3)** | **High-Reasoning / Verification Mode** | Memeriksa `git diff`, menjalankan kompilasi/test, dan **mengaudit DOM/CSS & visual nyata** terhadap kriteria penerimaan (*Acceptance Criteria*). | Dilarang meloloskan PR hanya karena *syntax/build check* hijau tanpa memeriksa kebenaran layout & interaksi. |

---

## 3. Siklus Kerja 6 Tahap Wajib (The 6-Stage Vibe Engineering Lifecycle)

Setiap fitur atau revisi **WAJIB** melewati 6 tahapan berurutan ini tanpa ada yang dilompati:

### Tahap 1: Grounding & Pembacaan Aturan (`AGENTS.md` & `specs/`)
Sebelum menulis kode atau menjalankan perintah apa pun, agen wajib membaca:
* `AGENTS.md`
* `docs/PZN_VIBE_ENGINEERING_STANDARD.md`
* Dokumen spesifikasi aktif (misal: `specs/design-task.md`)

### Tahap 2: Deep Planning & Specification First (Jangan Langsung Koding!)
* Ketika pengguna menyampaikan kebutuhan atau keluhan bug, **JANGAN langsung menyuruh worker menulis kode**.
* Lakukan analisis akar masalah (*Root Cause Analysis*) terlebih dahulu, diskusikan desain/solusinya bersama pengguna, dan kunci di dalam dokumen `specs/` sampai pengguna menyetujui rencana tersebut.

### Tahap 3: Atomic Task Chunking & Partial File Division (Anti-Bottleneck)
* **Mengapa Kemarin Terjadi Bottleneck 20+ Menit?** Karena 1 worker dipaksa mengetik 1.200+ baris kode monolitik berisi ratusan baris SVG duplikat dalam satu waktu!
* **Aturan Baku Chunking:**
  1. Ekstrak elemen yang dipakai berulang kali (Logo SVG, Ikon Lucide, Komponen Gauge, CSS Reset) ke dalam modul bersama (`partials/shared-*.tsx`).
  2. Pecah pembuatan layar besar ke dalam **Sub-Worker dengan File Parsial Terpisah (`Worker 1A`, `Worker 1B`, `Worker 2A`, `Worker 2B`)**.
  3. Setiap file parsial idealnya berukuran **100–250 baris kode** agar proses pembuatan oleh AI selesai dalam **1–2 menit**, mudah dibaca, dan tidak menimbulkan konflik *merge*.

### Tahap 4: Controlled Implementation (Eksekusi Terbatas Sesuai Kontrak)
* Sub-Worker hanya bekerja di *branch* dan file parsial yang ditugaskan kepadanya.
* Sub-Worker wajib mematuhi kontrak CSS dan DOM yang telah ditetapkan (contoh: `height: "100vh"`, `overflow: "hidden"`, `background: "#D4E5F2"`, *Zero Emoji*, 100% inline Lucide SVG).

### Tahap 5: Automated Build & Type Validation
* Setiap Sub-Worker dan QA wajib memastikan kompilasi dan validasi tipe berjalan 100% bersih (`npx mokly check --strict`).
* **INGAT:** Lolos kompilasi (`PASS`) hanya membuktikan tidak ada *syntax error* TypeScript; itu **BELUM** membuktikan tampilan UI/UX sudah benar!

### Tahap 6: Strict Code Review & Runtime/DOM Audit (Gerbang Terakhir Sebelum Merge)
Sebelum sebuah PR di-merge ke `main`, QA (Worker 3) dan DevOps wajib memverifikasi daftar periksa berikut:
1. **Audit Diff Kode:** Apakah ada file di luar ruang lingkup yang ikut berubah? Apakah ada duplikasi kode yang tidak perlu?
2. **Audit Kontrak Layout & CSS:**
   * Apakah root container sudah menggunakan `height: "100vh"` dan `overflow: "hidden"` (bukan `height: "100%"` yang *collapse*)?
   * Apakah *Floating Input Dock* benar-benar mengambang di bawah layar (`position: "absolute", bottom: 0`) di luar aliran scroll `<main>`?
   * Apakah tampilan `mobile` dan `desktop` sudah dirancang secara proporsional sesuai form-factor masing-masing (bukan tampilan mobile yang dipaksa masuk ke desktop)?
3. **Audit Interaktivitas DOM:**
   * Apakah mekanisme klik (CSS `:checked` untuk Sidebar, Bottom Sheet `+`, Menu Titik Tiga `⋮`, dan perpindahan Riwayat Analisis) memiliki pasangan `<input id="...">` dan `<label htmlFor="...">` yang valid dan bekerja saat dipencet?

---

## 4. Protokol Penanganan Kegagalan (Fail-Fast & Targeted Fix)

Jika ditemukan bug atau ketidaksesuaian pada hasil kerja salah satu Sub-Worker:
1. **JANGAN merombak ulang seluruh proyek dari nol.**
2. Identifikasi tepat di **file parsial mana** letak kesalahannya (misal: hanya di `partials/guest-sidebar.tsx` atau `partials/auth-audit-views.tsx`).
3. Tugaskan perbaikan terfokus (*surgical fix*) hanya pada file parsial tersebut.


## 5. Protokol Eksekusi Paralel DevOps (Anti-Serial Waiting)
- **Aturan Eksekusi Worktree Mandiri:** Ketika Sub-Worker memiliki folder fisik terpisah (`worker-1` vs `worker-2`), DevOps **WAJIB** mengeksekusinya secara **PARALEL (bersamaan di latar belakang / background task)** menggunakan tab terminal masing-masing atau perintah asynchronous, **BUKAN** menunggu satu sub-worker selesai baru mulai memproses yang lain.
- **Prinsip Gelombang Non-Blokir (Non-Blocking Waves):**
  - Jika Sub-Worker 1B sedang bekerja di `worker-1`, Sub-Worker 2A **HARUS** langsung di-dispatch di `worker-2` pada saat yang sama.


---

## 6. Model Configuration Matrix & Fast-Track (Surgical) Protocol

### A. Matriks Pemilihan Model Otomatis (`dispatch_workers.sh`)
* **Worker 1 & Worker 2 (Coder / Implementer):** Menggunakan `gemini-3.8-flash-low` (`--effort low`). Cepat, hemat token, dan fokus pada eksekusi kode.
* **Worker 3 (Senior QA Reviewer):** Menggunakan **`gemini-4-argon-high` (`--effort high`)** agar memiliki daya nalar kritis untuk menangkap bug logika navigasi dan celah UI. Jika kuota Argon habis, otomatis fallback ke **`gemini-3.8-flash-high`**.

### B. Protokol Fast-Track / Surgical Fix (Bypass QA untuk Revisi Minor)
Untuk perbaikan minor (seperti ubah warna, perbaiki typo, atau surgical CSS fix):
1. **Dilarang memanggil seluruh 3 worker.**
2. Cukup panggil **Worker 1 saja** (`./dispatch_workers.sh <issue> surgical`).
3. **Bypass QA Worker 3:** DevOps (Chat 2) bertindak langsung sebagai reviewer tunggal, mengecek tampilan visual di browser `http://127.0.0.1:4174`, dan langsung me-merge ke `main`.
