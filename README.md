## Cara Clone dan Jalankan Proyek "dicoding-be-hapi-submission-2-api-v2"

### 1. Clone Repository

```bash
git clone https://github.com/AditiaW/dicoding-be-hapi-submission-2-api-v2.git
```

### 2. Masuk ke Direktori Proyek

```bash
cd dicoding-be-hapi-submission-2-api-v2
```

### 3. Instalasi Dependensi

Gunakan salah satu perintah berikut untuk menginstal dependensi:

- **Dengan Bun:**

  ```bash
  bun install
  ```

- **Dengan NPM:**

  ```bash
  npm install
  ```

### 4. Konfigurasi File `.env`

Ganti file `.env.example` menjadi `.env` dan isi dengan konfigurasi Anda.

```bash
cp .env.example .env
```

Isi data di file `.env` sesuai dengan konfigurasi database dan variabel lingkungan Anda.

### 5. Jalankan Migrasi Database

Gunakan perintah berikut untuk menjalankan migrasi database:

- **Dengan Bun:**

  ```bash
  bun run migrate up
  ```

- **Dengan NPM:**

  ```bash
  npm run migrate up
  ```

### 6. Jalankan Server Pengembangan

Gunakan salah satu perintah berikut untuk menjalankan server pengembangan:

- **Dengan Bun:**

  ```bash
  bun run dev
  ```

- **Dengan NPM:**

  ```bash
  npm run dev
  ```

### 7. Uji Aplikasi dengan Newman

Jalankan perintah berikut untuk menjalankan test menggunakan Newman:

```bash
newman run OpenMusic_API_V2_Test.postman_collection.json -e OpenMusic_API_V2_Test.postman_environment.json
```

---

Pastikan Anda sudah menginstal Newman global dengan perintah berikut jika belum:

```bash
npm install -g newman
```
