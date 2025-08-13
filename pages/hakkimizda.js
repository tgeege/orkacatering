import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Hakkimizda(){
  return (
    <>
      <SEO title="Hakkımızda" description="Orka Catering hakkında – kalite standartları ve üretim süreçleri." />
      <Layout>
        <section className="py-12">
          <div className="container-page grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Hakkımızda</h1>
              <p className="text-slate-300">Orka Catering, kurumsal müşterilere yönelik taşıma ve yerinde üretim yemek hizmeti veren bir gıda firmasıdır.</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                <li>• Günlük taze üretim</li>
                <li>• İzlenebilir tedarik</li>
                <li>• Diyetisyen kontrolü</li>
                <li>• Denetimli lojistik</li>
              </ul>
            </div>
            <div>
              <Image width={900} height={600} className="rounded-2xl border border-slate-800" src="https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&auto=format&fit=crop&w=1200" alt="Takım"/>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
