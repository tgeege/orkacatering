import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(){
  return (
    <>
      <SEO title="Kurumsal Yemek & Taşıma" description="Kurumsal yemek üretimi, yerinde üretim ve taşıma yemek çözümleri." />
      <Layout>
        <section className="py-16 bg-gradient-to-b from-amber-500/10 to-transparent">
          <div className="container-page">
            <span className="badge">ISO 22000 Gıda Güvenliği · Günlük Taze Üretim</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Kurumsal Yemek Çözümleri<br/>Lezzet, Hijyen, Zamanında Teslim.</h1>
            <p className="mt-3 text-slate-300 max-w-2xl">Fabrika ve ofisler için haftalık menüler, diyetisyen kontrolü, soğuk zincir ve <b>yerinde üretim</b> opsiyonları.</p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Link href="/menu" className="btn btn-primary">Haftalık Menü</Link>
              <Link href="/iletisim" className="btn btn-outline">Teklif Al</Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page grid md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-2">Neden Orka Catering?</h2>
              <p className="text-slate-300">Üretimden servise kadar tüm süreçlerimiz şeffaf ve denetlenebilir. Tedarik zinciri güvenliği, sıcaklık takibi ve lezzetten ödün vermeyen reçeteler.</p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {['Yerinde & Taşıma','Diyetisyen Destekli','Soğuk Zincir','7/24 Destek'].map((k,i)=>(
                  <div key={i} className="card rounded-xl p-4 text-center">{k}</div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image width={900} height={600} className="rounded-2xl border border-slate-800" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="Endüstriyel mutfak"/>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page">
            <h2 className="text-2xl font-bold mb-2">Hizmetlerimiz</h2>
            <p className="text-slate-300 mb-4">İhtiyacınıza uygun esnek ve ölçeklenebilir çözümler.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {title:'Yerinde Üretim', img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&auto=format&fit=crop&w=1200'},
                {title:'Taşıma Yemek', img:'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&auto=format&fit=crop&w=1200'},
                {title:'Etkinlik & Organizasyon', img:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&auto=format&fit=crop&w=1200'}
              ].map((c,i)=>(
                <div key={i} className="card rounded-2xl overflow-hidden">
                  <Image width={800} height={600} src={c.img} alt={c.title}/>
                  <div className="p-4">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-slate-300 text-sm mt-1">Mutfağınızı kuruyor, ekibimizle günlük üretim yapıyoruz / ısı kontrollü araçlarla güvenli teslim / toplantı ve etkinlik menüleri.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
