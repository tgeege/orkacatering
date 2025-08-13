import Head from 'next/head'

export default function SEO({ title, description }){
  const full = title ? `${title} – Orka Catering` : "Orka Catering"
  const desc = description || "Kurumsal yemek üretimi, yerinde üretim ve taşıma yemek çözümleri."
  const ld = {
    "@context":"https://schema.org",
    "@type":"FoodEstablishment",
    "name":"Orka Catering",
    "url":"https://orkacatering.com/",
    "servesCuisine":"Türk Mutfağı, Kurumsal Yemek",
    "telephone":"+90 5xx xxx xx xx",
    "address":{"@type":"PostalAddress","streetAddress":"Örnek Mah., İş Sanayi Sitesi No: 12, İstanbul"},
    "email":"info@orkacatering.com"
  }
  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.svg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}} />
    </Head>
  )
}
