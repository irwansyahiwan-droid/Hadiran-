# Hadiran RT 004/006 — v10 Ultra Premium Glow

Aplikasi Absensi & Kas Warga RT 004/006 Tanah Baru, Beji, Kota Depok.

## 🐛 Bug Fixes (v10)

1. **Login error tidak muncul** — `showLsErr()` menambahkan class `'v'` tapi CSS mengharapkan class `'show'`. Sekarang sudah cocok, sehingga pesan password salah muncul dengan benar.
2. **Duplicate overlay IDs** — `<div id="ovKelolaAnggota">` dan `<div id="ovEditAnggota">` (beserta semua `id="eaStatus"`, `id="eaNama"`, dll. di dalamnya) muncul dua kali di HTML — bug duplicate ID. Versi kedua sudah dihapus.
3. **PWA `start_url` masih membawa `#hash`** — saat aplikasi di-install dari halaman misalnya `#kas`, `start_url` tersimpan dengan hash, sehingga deteksi "sudah ter-install" gagal. Sekarang `start_url` selalu base URL bersih.
4. **Debug marker `v12.1` bocor di pojok layar** — sudah disembunyikan.
5. **Print stylesheet typo** (`html body body::after`) — diperbaiki menjadi `html body::after`.

## ✨ Premium Glow UI v13

Diterapkan sebagai *layer terakhir* sehingga aman terhadap semua override sebelumnya:

- **Aurora background** — radial mesh gradient dengan orb mengambang yang animated (`pgAurora` 22s loop).
- **Hero card cinematic** — gradient emerald deep + halo blur 380px + animasi `pgPulse` 4.5s pulsing glow.
- **Bottom nav glassmorphism** — backdrop-blur + saturate 180% + glow halo di balik tab aktif.
- **Buttons dengan bloom glow** — multi-layer shadow (inset highlight + drop shadow + outer glow), shimmer sweep saat hover.
- **Cards premium glass** — translucent putih dengan inner highlight, top sheen line, hover lifts dengan double glow.
- **Stat cards neon** — radial glow di atas, transform-Y -2px + double glow saat hover.
- **Inputs dengan focus glow** — 4px halo + 22px outer emerald glow saat focus.
- **Toast pill glow** — green/red gradient dengan multi-shadow bloom.
- **Section title** — accent bar dengan box-shadow glow.
- **Scrollbar premium** — thin emerald gradient dengan glow.
- **Login screen deep glow** — radial mesh + glass card dengan emerald accent.
- **Splash screen** — drop-shadow filter glow di logo + halaman background mesh.
- **Bismillah banner** — deep green gradient dengan shadow glow.
- **Print stylesheet** — auto-clean (no glow, no nav) untuk PDF.

Semua animasi otomatis dimatikan saat `prefers-reduced-motion: reduce` aktif.

## Files

- `Index.html` — frontend lengkap (HTML + CSS + JS, single file).
- `Kode GS` — Google Apps Script backend (v7.3 hardened + fast).

## How to Deploy

1. Upload `Index.html` sebagai HTML file di Google Apps Script project (rename ke `index.html`).
2. Paste isi `Kode GS` ke Code.gs.
3. Buka `File > Project properties > Script properties`, set `ADMIN_PASSWORD` dengan password bendahara.
4. Jalankan `setupSheets()` sekali untuk membuat semua sheet.
5. Deploy sebagai Web App (`Execute as: me`, `Who has access: anyone`).
