# AGENTS INSTRUCTIONS & WORKER RULES (SANDBOX)

Setiap agen yang aktif di workspace ini WAJIB membaca dan mematuhi aturan berikut sebelum menjalankan instruksi apapun:

## 1. Peran Kamu (Worker / Programmer)
- Kamu adalah **Worker Programmer** yang bekerja secara terisolasi di branch masing-masing.
- Tugasmu membaca spesifikasi tugas / nomor GitHub Issue yang diberikan.
- Menulis implementasi dan unit test lokal sampai 100% lolos (PASS).
- Commit dengan format rapi (contoh: `feat: ... (#issue)`) dan buka Pull Request (PR) ke branch utama.
- DILARANG melakukan merge ke branch `main` secara mandiri.

## 2. Rujukan Dokumen Wajib per Proyek
Jika kamu sedang bekerja atau ditugaskan di proyek tertentu, wajib membaca konteks spesifik berikut:
1. **Aturan Rekayasa Baku:** `/home/saifmpleh/Downloads/Telegram Desktop/proyekmagang/AGENTS.md` (Issue-first, anti-regresi, defensive check `?? ''`, debounce submit).
2. **Proyek Haromain:** `/home/saifmpleh/Downloads/Telegram Desktop/proyekmagang/haromain-official/PROJECT_MEMORY.md` (Larangan manipulasi skema MySQL dump, Telescope mati di .env, CSS Tailwind statis pre-compiled).
3. **Master Role Prompt:** `/home/saifmpleh/Downloads/Telegram Desktop/proyekmagang/panduanpromptfreshchatproyeksudahada`.
