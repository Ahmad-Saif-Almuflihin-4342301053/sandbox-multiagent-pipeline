# AGENTS INSTRUCTIONS & WORKER RULES (SANDBOX — PZN VIBE ENGINEERING COMPLIANT)

Setiap agen yang aktif di workspace ini (**System Analyst**, **DevOps Dispatcher**, **Sub-Workers 1A/1B/2A/2B**, dan **QA Reviewer Worker 3**) WAJIB membaca dan mematuhi aturan berikut sebelum menjalankan instruksi apa pun:

## 1. Hukum Rekayasa Utama: PZN Vibe Engineering Standard
- **WAJIB BACA PERTAMA KALI:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md`.
- **DILARANG "Terima Apa Adanya" (*Zero Blind Acceptance*):** DevOps dan QA dilarang keras melakukan *merge* PR hanya karena *build/syntax check* lolos tanpa mengaudit `git diff`, kontrak CSS/DOM, responsivitas Mobile vs Desktop, dan interaktivitas klik.
- **DILARANG "Improvisasi Buta" (*Zero Blind Improvisation*):** Worker dilarang mengarang fitur, mengubah warna palet, menambah elemen di luar spesifikasi, atau menulis file monolitik raksasa yang memicu *bottleneck*.
- **Pembagian Sub-Worker & File Parsial (`1A`, `1B`, `2A`, `2B`):**
  - Pekerjaan wajib dipecah ke dalam modul/file parsial berukuran ringkas (`specs/gatekeeper/partials/*.tsx`) sesuai spesifikasi di `specs/design-task.md`.
  - Setiap Sub-Worker hanya boleh mengerjakan file parsial yang ditugaskan kepadanya di *branch* masing-masing, memastikan kompilasi bersih, melakukan *commit* rapi (`feat: ... (#issue)`), dan membuka Pull Request (PR) ke `main`.
  - **DILARANG** melakukan *merge* ke branch `main` secara mandiri tanpa persetujuan QA & DevOps.

## 2. Rujukan Dokumen Wajib per Proyek
Jika kamu sedang bekerja atau ditugaskan di proyek tertentu, wajib membaca konteks spesifik berikut:
1. **Standar Vibe Engineering PZN:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Siklus 6 tahap, Dual-Tier Model, Anti-Bottleneck Chunking, Strict Code & DOM Review).
2. **Blueprint Desain & Spesifikasi Aktif:** `specs/design-task.md` (Arsitektur 2 Layar Hidup Waskita, Responsif Mobile & Desktop Sejati, dan Pembagian File Parsial Sub-Worker).
3. **Aturan Rekayasa Baku:** `/home/saifmpleh/Downloads/Telegram Desktop/proyekmagang/AGENTS.md` (Issue-first, anti-regresi, defensive check `?? ''`, debounce submit).
4. **Proyek Haromain:** `/home/saifmpleh/Downloads/Telegram Desktop/proyekmagang/haromain-official/PROJECT_MEMORY.md` (Larangan manipulasi skema MySQL dump, Telescope mati di .env, CSS Tailwind statis pre-compiled).
5. **Master Role Prompt:** `/home/saifmpleh/Downloads/Telegram Desktop/proyekmagang/panduanpromptfreshchatproyeksudahada`.
