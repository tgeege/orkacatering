import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import MenuTable from '@/components/MenuTable'
import items from '@/data/menu.json'

export default function Menu(){
  return (
    <>
      <SEO title="Menü" description="Haftalık menüler ve örnek yemek listeleri." />
      <Layout>
        <section className="py-12">
          <div className="container-page">
            <h1 className="text-3xl font-bold mb-2">Haftalık Örnek Menü</h1>
            <p className="text-slate-300 mb-4">Menüler diyetisyen kontrolünde, mevsim sebzeleri ve dengeli kalori dağılımı ile planlanır.</p>
            <MenuTable items={items} />
            <p className="text-sm text-slate-400 mt-3">Alerjen bilgisi ve vejetaryen/vegan seçenekler talep üzerine planlanır.</p>
          </div>
        </section>
      </Layout>
    </>
  )
}
