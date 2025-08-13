import nodemailer from 'nodemailer'

export default async function handler(req, res){
  if(req.method !== 'POST'){
    return res.status(405).json({ ok:false, message: 'Method Not Allowed' })
  }
  const { ad, firma, email, tel, kisi, tarih, mesaj } = req.body || {}
  try{
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })
    await transporter.verify()
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject: `Teklif Talebi - ${firma || ''}`,
      text: [
        `Ad Soyad: ${ad || ''}`,
        `Telefon: ${tel || ''}`,
        `E-posta: ${email || ''}`,
        `Kişi Sayısı: ${kisi || ''}`,
        `Tarih: ${tarih || ''}`,
        `Mesaj: ${mesaj || ''}`
      ].join('\n')
    })
    return res.status(200).json({ ok:true, message:'Talebiniz alındı. Teşekkürler!' })
  }catch(err){
    console.error(err)
    return res.status(500).json({ ok:false, message:'Gönderim sırasında hata oluştu.' })
  }
}
