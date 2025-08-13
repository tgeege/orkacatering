import SEO from '@/components/SEO'
import Layout from '@/components/Layout'

const imgs = Array.from({length:12}).map((_,i)=>`https://picsum.photos/seed/${i+1}/600/400`)

export default function Galeri(){
  return (
    <>
      <SEO title="Galeri" description="Üretim tesisimiz ve sunum örnekleri." />
      <Layout>
        <section className="py-12">
          <div className="container-page">
            <h1 className="text-3xl font-bold mb-2">Galeri</h1>
            <p className="text-slate-300 mb-4">Tesisimizden kareler ve sunumlarımızdan örnekler.</p>
            <div className="gallery">
              {imgs.map((src,i)=>(
                <img key={i} src={src} alt={`Galeri ${i+1}`} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
