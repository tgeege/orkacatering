import SEO from '@/components/SEO'
import Layout from '@/components/Layout'

export default function Iletisim(){
  async function submit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    const j = await res.json()
    alert(j.message || 'Gönderildi')
  }
  return (
    <>
      <SEO title="İletişim" description="Teklif, numune ve randevu talepleriniz için bize ulaşın." />
      <Layout>
        <section className="py-12">
          <div className="container-page grid md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Teklif Alın</h1>
              <p className="text-slate-300 mb-3">Formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçsin.</p>
              <form onSubmit={submit} className="grid gap-3">
                <input name="ad" placeholder="Ad Soyad *" required className="card rounded-xl p-3" />
                <input name="firma" placeholder="Firma Adı" className="card rounded-xl p-3" />
                <input name="email" type="email" required placeholder="E-posta *" className="card rounded-xl p-3" />
                <input name="tel" placeholder="Telefon *" required className="card rounded-xl p-3" />
                <select name="kisi" className="card rounded-xl p-3">
                  <option value="">Kişi Sayısı</option>
                  <option>1-50</option><option>50-150</option><option>150-300</option><option>300+</option>
                </select>
                <input name="tarih" type="date" className="card rounded-xl p-3" />
                <textarea name="mesaj" rows="5" placeholder="Mesajınız" className="card rounded-xl p-3" />
                <div className="flex gap-3">
                  <button className="btn btn-primary" type="submit">Gönder</button>
                  <a className="btn btn-outline" href="https://wa.me/90XXXXXXXXXX" target="_blank" rel="noopener">WhatsApp</a>
                </div>
                <p className="text-xs text-slate-400">Gönder butonu API üzerinden e-posta iletir (SMTP bilgilerinizi .env dosyasında tanımlayın).</p>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">İletişim</h2>
              <div className="card rounded-2xl p-4">
                <p><b>Adres:</b> Örnek Mah., İş Sanayi Sitesi No: 12, İstanbul</p>
                <p className="mt-2"><b>Telefon:</b> <a href="tel:+90 5xx xxx xx xx">+90 5xx xxx xx xx</a></p>
                <p className="mt-1"><b>E-posta:</b> <a href="mailto:info@orkacatering.com">info@orkacatering.com</a></p>
              </div>
              <iframe className="w-full h-80 rounded-2xl border border-slate-800 mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.901!2d28.97953!3d41.015137" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
