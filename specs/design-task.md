# TECHNICAL BLUEPRINT & UX SPECIFICATION (REVISED V3.4 — MINIMALIST SIDEBAR CLEANUP & NATIVE UNIFIED RADIO AUTO-CLOSE): WASKITA

> **Dokumen Resmi Handover:** System Analyst / Lead Architect (Chat 1) $\rightarrow$ DevOps & GitHub Dispatcher (Chat 2)  
> **Standar Rekayasa Wajib:** `docs/PZN_VIBE_ENGINEERING_STANDARD.md` (Kurikulum Eko Kurniawan Khannedy / PZN)  
> **Identitas Produk:** **Waskita** (Pre-Publishing Quality Gatekeeper)  
> **Aset Logo Resmi:** `assets/logo/logo-waskita-light.svg` & `assets/logo/logo-waskita-dark.svg` (`viewBox="0 0 160 34"`)  
> **Target Katalog:** HANYA **2 File Layar Interaktif Hidup** di `specs/gatekeeper/`:
> 1. `specs/gatekeeper/01-waskita-guest.mockup.tsx` (*Mode Belum Login / Tamu*)
> 2. `specs/gatekeeper/02-waskita-authenticated.mockup.tsx` (*Mode Sudah Login / Member*)

---

## 🎨 1. PERBAIKAN KRUSIAL SIDEBAR & INTERAKSI MOBILE (REVISI V3.4)

### A. Bersihkan Tombol "Analisis Baru" (DILARANG Background Tebal & DILARANG Border Hitam!)
* **Masalah:** Sebelumnya tombol *"Analisis Baru"* diberi background `#E9DFCA` permanen meskipun belum dipencet, dan saat dipencet muncul `box-shadow` border hitam tebal yang terlihat kaku dan tidak profesional.
* **Standar Baru (Sesuai Desain Modern Gemini/ChatGPT):**
  - **Kondisi Default (Belum Dipencet):** `background: "transparent"`, border tipis elegan `border: "1px solid rgba(30, 41, 59, 0.15)"`, `borderRadius: "9999px"`, `padding: "10px 16px"`, warna teks `#1E293B`, `display: "flex"`, `alignItems: "center"`, `gap: "10px"`.
  - **Kondisi Aktif (Saat Dipencet):** Beri background lembut `background: "#E9DFCA"` dengan teks `fontWeight: 700`. **DILARANG KERAS menggunakan `box-shadow: 0 0 0 2px` atau outline border hitam tebal! HAPUS BORDER HITAMNYA!**
  - Berlaku sama di Layar 01 (Guest) dan Layar 02 (Authenticated), baik di viewport Desktop maupun Mobile.

---

### B. Bersihkan Pengingat "Masuk untuk menyimpan riwayat analisis Anda" (Layar 01 Guest)
* **Masalah:** Diberi kotak kartu raksasa ber-background `#E9DFCA` yang merusak estetika sidebar.
* **Standar Baru:**
  - **HAPUS KOTAK BACKGROUND `#E9DFCA`!**
  - Tampilkan sebagai baris teks bersih tanpa background (`background: "transparent"`):
    - Ikon `IconInfo` kecil (`size={18}`, `color: "rgba(30, 41, 59, 0.6)"`).
    - Teks: Kata **"Masuk"** diberi garis bawah (*underline*) atau titik bawah (*dotted underline*) sebagai penanda tautan interaktif:
      ```tsx
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", color: "rgba(30, 41, 59, 0.75)", fontSize: "13px", lineHeight: "18px" }}>
        <IconInfo size={18} color="rgba(30, 41, 59, 0.6)" />
        <div>
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 700, color: COLORS.deepSlate, cursor: "pointer" }}>
            Masuk
          </span>{" "}
          untuk menyimpan riwayat analisis Anda
        </div>
      </div>
      ```

---

### C. Implementasi Mutlak Unified Radio Auto-Close Sidebar Mobile (Layar 02)
* **Akar Masalah Mengapa Kemarin Gagal:**
  Di `02-waskita-authenticated.mockup.tsx`, drawer masih memakai `checkbox` terpisah (`#auth-sidebar-toggle-mobile`), sedangkan riwayat hanya mentarget `radio` sesi. Karena checkbox tidak pernah dimatikan saat riwayat diklik, sidebar tetap terbuka!
* **Solusi Baku (Pure CSS Native 100% Pasti Berhasil):**
  Satukan state drawer dan state sesi mobile ke dalam **1 kelompok radio tunggal** (`name="mobile-nav-flow"`):
  ```tsx
  {/* State Mesin Navigasi Mobile Terpadu */}
  <input type="radio" name="mobile-nav-flow" id="view-session-1" defaultChecked style={{ display: "none" }} />
  <input type="radio" name="mobile-nav-flow" id="view-session-2" style={{ display: "none" }} />
  <input type="radio" name="mobile-nav-flow" id="view-session-new" style={{ display: "none" }} />
  <input type="radio" name="mobile-nav-flow" id="view-drawer-open" style={{ display: "none" }} />
  ```
  - **Buka Sidebar:** Tombol Burger di header mentarget `<label htmlFor="view-drawer-open">`.
  - **Pilih Riwayat di Sidebar:**
    - Tombol Analisis Baru mentarget `<label htmlFor="view-session-new">`.
    - Riwayat 1 mentarget `<label htmlFor="view-session-1">`.
    - Riwayat 2 mentarget `<label htmlFor="view-session-2">`.
    - Tombol silang `X` & Backdrop mentarget `<label htmlFor="view-session-1">` (menutup drawer).
  - **Aturan CSS di `<style>`:**
    ```css
    /* Buka drawer HANYA saat view-drawer-open aktif */
    #view-drawer-open:checked ~ .auth-sidebar-mobile {
      transform: translateX(0) !important;
    }
    #view-drawer-open:checked ~ .auth-sidebar-backdrop-mobile {
      display: block !important;
    }

    /* Konten Sesi yang Ditampilkan */
    #view-session-1:checked ~ main .mobile-view-session-1 { display: block !important; }
    #view-session-2:checked ~ main .mobile-view-session-2 { display: block !important; }
    #view-session-new:checked ~ main .mobile-view-session-new { display: flex !important; }
    ```
  - **Hasil:** Begitu Riwayat 2 atau Analisis Baru dipencet, radio aktif otomatis berpindah dari `view-drawer-open` ke `view-session-2` $\rightarrow$ **drawer OTOMATIS TERTUTUP (slide-out) seketika**, dan layar langsung menampilkan data riwayat yang dipilih!

---

## 🛠️ PEMBAGIAN EKSEKUSI PARALEL

1. **Sub-Worker 1A (Folder: `worker-1`):**
   * Edit `specs/gatekeeper/partials/guest-sidebar.tsx`:
     - Ubah tombol *"Analisis Baru"* menjadi transparan dengan border tipis `borderRadius: 9999px` (tanpa background `#E9DFCA`).
     - Hapus background kotak kartu `#E9DFCA` pada *"Masuk untuk menyimpan riwayat analisis Anda"*, jadikan teks bersih dengan kata *"Masuk"* bergaris bawah (*underline*).

2. **Sub-Worker 2A & 2B (Folder: `worker-2`):**
   * Edit `specs/gatekeeper/partials/auth-sidebar-header.tsx`:
     - Ubah tombol *"Analisis Baru"* default menjadi transparan ber-border tipis `borderRadius: 9999px`.
     - HAPUS `box-shadow: 0 0 0 2px` (border hitam) saat aktif.
     - Di mobile sidebar, pastikan tombol Analisis Baru mentarget `view-session-new`, Riwayat 1 mentarget `view-session-1`, Riwayat 2 mentarget `view-session-2`, dan tombol `X` mentarget `view-session-1`.
   * Edit `specs/gatekeeper/02-waskita-authenticated.mockup.tsx`:
     - Terapkan grup radio `mobile-nav-flow` (`view-session-1`, `view-session-2`, `view-session-new`, `view-drawer-open`) dan CSS rules yang mengendalikan drawer dan konten sesi.

3. **Worker 3 (QA):**
   * Validasi `npx mokly check --strict`.
   * Buka browser di `http://127.0.0.1:4174`:
     - Layar 01: Verifikasi Analisis Baru transparan dan teks Masuk bergaris bawah tanpa kotak kartu.
     - Layar 02: Verifikasi Analisis Baru tanpa border hitam, dan tes klik Riwayat di mobile apakah sidebar OTOMATIS TERTUTUP seketika!
