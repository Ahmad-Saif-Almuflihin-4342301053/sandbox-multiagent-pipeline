# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V4.0 — DUAL-THEME LIGHT & DARK MODE WITH OFFICIAL DARK LOGO): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🌙 1. ARSITEKTUR RESMI DUAL-THEME (LIGHT & DARK MODE) DI MOKLY

Mokly mendukung *dual color scheme* native (`light` dan `dark`) tanpa merusak arsitektur komponen dengan pendekatan **CSS Variables**:

1. **Konfigurasi Katalog (`mokly.config.ts`):**
   ```ts
   import { defineConfig } from "@mokly/mokly";

   export default defineConfig({
     colorSchemes: ["light", "dark"],
     mockupsDir: "specs/generated",
     renderer: "specs/renderer.tsx",
   });
   ```

2. **Custom Document Renderer (`specs/renderer.tsx`):**
   Mokly menyuntikkan `data-theme={input.colorScheme}` ke elemen `<body>`, sehingga variabel CSS otomatis aktif sesuai mode yang dipilih di toolbar Mokly (`☾ Dark` vs `☀ Light`):
   * **Mode Terang (`data-theme="light"`):**
     - `--waskita-bg: #F7F4EB` (*Warm Cream*)
     - `--waskita-card: #E9DFCA` (*Warm Sand*)
     - `--waskita-audit-bg: #D4E5F2` (*Soft Ice Blue*)
     - `--waskita-accent-subtle: #C0D5E5` (*Muted Sky Blue*)
     - `--waskita-accent-primary: #C0CEE8` (*Soft Periwinkle*)
     - `--waskita-text: #1E293B` (*Deep Slate*)
     - `--waskita-logo-fill: #10B981` (*Emerald-500*)
   * **Mode Gelap (`data-theme="dark"`):**
     - `--waskita-bg: #0F172A` (*Midnight Slate* pekat, ramah mata)
     - `--waskita-card: #1E293B` (*Deep Slate* untuk kapsul dock, sidebar drawer, dan kartu popover)
     - `--waskita-audit-bg: #1E293B` (*Kesatuan latar blok audit*)
     - `--waskita-accent-subtle: #334155` (*Slate-700* untuk border halus & tombol sekunder)
     - `--waskita-accent-primary: #0284C7` (*Sky-600* kontras untuk tombol aksi dan badge Pro)
     - `--waskita-text: #F8FAFC` (*Slate-50* teks putih terang tajam)
     - `--waskita-logo-fill: #34D399` (*Emerald-400* — Logo malam resmi dari `assets/logo/logo-waskita-dark.svg`!)

---

## 🎨 2. PENGAPLIKASIAN LOGO MALAM RESMI (`WaskitaLogo`)

Komponen `WaskitaLogo` di `specs/gatekeeper/partials/shared-ui.tsx` menggunakan `fill="var(--waskita-logo-fill, #10B981)"`.
* Di Mode Siang: Logo otomatis berwarna **Emerald `#10B981`** (kontras tinggi di atas krem).
* Di Mode Malam: Logo otomatis menyala menjadi **Emerald Pastel Cerah `#34D399`** persis sesuai file `assets/logo/logo-waskita-dark.svg`!

---

## 📜 3. VERIFIKASI BUILD & OUTPUT MOKLY
Eksekusi `npx @mokly/mokly check --strict` menghasilkan **11 file valid** mencakup seluruh varian:
* `index.mobile.html` & `index.mobile.dark.html`
* `index.desktop.html` & `index.desktop.dark.html`

Saat pengguna mengubah switch **`☾ Dark >`** di toolbar Mokly, halaman Waskita otomatis bertransisi ke Mode Gelap secara instan!
