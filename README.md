# Orka Catering – Kurumsal Yemek Sitesi (Next.js + Tailwind)

Kurumsal catering sitesi. SEO ve iletişim formu hazır.

## Hızlı Başlangıç

```bash
npm install
npm run dev
# http://localhost:5173
```

## Üretim

```bash
npm run build
npm start
# http://localhost:3000
```

## Sayfalar
- `/` Ana sayfa
- `/hakkimizda`
- `/menu`
- `/galeri`
- `/iletisim` (API ile e-posta gönderir)

## E-posta (SMTP)
1. `.env.sample` dosyasını `.env.local` olarak kopyalayın ve SMTP bilgilerinizi doldurun.
2. Vercel'de "Settings → Environment Variables" kısmına aynı anahtarları ekleyin.

## Yayınlama (Vercel önerilir)
1. Bu klasörü bir Github reposu olarak gönderin.
2. Vercel'e bağlayın → Build command: `npm run build`, Output: `.next`
3. Domain: `orkacatering.com` ekleyin ve yönlendirin.

## Özelleştirme
- Site başlığı & açıklama: `components/SEO.js`
- Menü içerikleri: `data/menu.json`
- Renkler/Tema: `tailwind.config.js` ve `styles/globals.css`
- Navbar/Footer: `components/`
- Görselleri `public/` altına koyup relative yol verin.

---
© 2025-08-13 Orka Catering
