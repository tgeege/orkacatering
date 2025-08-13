export default function Footer(){
  return (
    <footer className="border-t border-slate-800 py-8 bg-slate-950">
      <div className="container-page grid md:grid-cols-2 gap-6 text-slate-400">
        <div>
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span> Orka Catering
          </div>
          <p className="text-sm mt-2">© 2025-08-13 Orka Catering. Tüm hakları saklıdır.</p>
          <p className="text-sm mt-1">Adres: Örnek Mah., İş Sanayi Sitesi No: 12, İstanbul</p>
        </div>
        <div className="md:text-right">
          <p><a className="hover:text-white" href="tel:+90 5xx xxx xx xx">+90 5xx xxx xx xx</a> · <a className="hover:text-white" href="mailto:info@orkacatering.com">info@orkacatering.com</a></p>
          <p className="mt-2"><a className="inline-flex items-center gap-2 hover:text-white" href="https://wa.me/90XXXXXXXXXX" target="_blank" rel="noopener">WhatsApp ile yazın</a></p>
        </div>
      </div>
    </footer>
  )
}
