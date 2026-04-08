# 🌐 Routely – Minimalist IP & Network Analyzer

Repository ini berisi source code aplikasi web **Routely**, sebuah tool modern untuk menganalisis identitas jaringan, lokasi IP, dan device fingerprint secara real-time.

---

## 🎯 Tujuan Repository
- Menyediakan tool cek IP yang bersih, cepat, dan tanpa iklan.
- Visualisasi data lokasi IP menggunakan peta interaktif.
- Deteksi otomatis ISP, ASN, dan koordinat pengguna.
- Demonstrasi implementasi **React + Vite + Tailwind** dengan best practice.

---

## 📁 Struktur Repository

```
.
├── src/
│   ├── components/    # Komponen UI (Header, IPCard, Map, dll)
│   ├── hooks/         # Custom hooks (useIPData dengan fallback strategy)
│   ├── App.jsx        # Layout utama aplikasi
│   └── main.jsx       # Entry point
├── public/            # Aset statis
├── .gitignore         # Ignored files (node_modules, env, etc)
├── index.html         # HTML root
├── tailwind.config.js # Konfigurasi tema & Dark Mode
└── package.json       # Dependencies project
```

---

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite (Super fast build)
- **Styling**: Tailwind CSS (Utility-first framework)
- **Maps**: Leaflet / React-Leaflet
- **Icons**: Lucide React
- **Data Fetching**: Axios

---

## 🚀 Fitur Unggulan

### 1️⃣ Multi-Provider API Strategy (Anti-Block)
Aplikasi ini tidak bergantung pada satu API saja. Jika API utama down, dilimit, atau terblokir CORS/Ad-blocker, sistem otomatis beralih ke provider cadangan secara mulus:
1.  **geojs.io** (Primary - Anti CORS & Cepat)
2.  **ip-api.com** (Fallback 1)
3.  **ipapi.co** (Fallback 2)
4.  **ipwhois.app** (Fallback 3)

> ✅ **Anti Network Error**: Memastikan data seperti IP, Peta (Latitude & Longitude), Kota, dan ISP tetap muncul meskipun salah satu provider memblokir request (Sangat ramah terhadap ISP Lokal dan Browser Brave).

### 2️⃣ Dark Mode Support
Dilengkapi dengan `ThemeToggle` untuk beralih antara **Light Mode** dan **Dark Mode**. Tampilan peta otomatis meredup saat mode gelap aktif.

### 3️⃣ Responsive Design
Layout yang dioptimalkan untuk berbagai perangkat:
- **Desktop**: Grid luas dengan peta besar.
- **Tablet**: Layout adaptif 2 kolom.
- **Mobile**: Typography dan spacing yang disesuaikan agar tidak menumpuk.

---

## ⚠️ Catatan Penting (WAJIB DIBACA)

- **Node.js Required**: Pastikan Node.js sudah terinstall di komputer (`node -v`).
- **Rate Limiting**: Karena menggunakan API gratisan, ada batasan request per hari dari provider IP.
- **Browser Block**: Ad-blocker atau ekstensi privasi tertentu mungkin memblokir akses ke API IP. Jika data tidak muncul, coba matikan ad-blocker.

---

## 🚀 Cara Menjalankan (Localhost)

1. **Clone repository ini**
   ```bash
   git clone https://github.com/ricoagista/Routely.git
   cd Routely
   ```

2. **Install Dependencies**
   Pastikan Node.js sudah terinstall di komputermu, lalu jalankan:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Lalu buka tautan lokal di browser.

---

## 🛠️ Troubleshooting Localhost
* **"File npm.ps1 cannot be loaded / PSSecurityException"**: Di Windows PowerShell gunakan perintah `Set-ExecutionPolicy RemoteSigned` (Run as Admin) atau gunakan Terminal `Command Prompt` (cmd) biasa.
* **Error: "All IP data providers failed"**: Matikan sementara ekstensi Ad-Blocker (uBlock Origin, Brave Shields) jika kamu menjalankannya di `localhost`. Beberapa browser memproteksi localhost dari call API pihak ketiga.
* **Map tidak muncul**: Pastikan koneksimu lancar, Map mengunduh aset basemap dari *OpenStreetMap* dan mengandalkan koordinat dari API.

---

## 📄 Lisensi
Free and Open Source (MIT License). Gunakan, modifikasi, dan bagikan dengan bebas!

### Tampilan Peta Blank
Pastikan file CSS Leaflet terload di `index.html` atau diimport di `App.jsx`. Project ini sudah menyertakan CDN Leaflet secara default.

---

## 👤 Author

**Rico Shandika Jovial Agista**

- GitHub: [@ricoagista](https://github.com/ricoagista)
- LinkedIn: [Rico Shandika Jovial Agista](https://www.linkedin.com/in/ricoshandikajovialagista/)
- Email: ricoagista@gmail.com

---
© 2026 Rico Shandika Jovial Agista. All rights reserved.
