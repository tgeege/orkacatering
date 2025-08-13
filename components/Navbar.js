import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href:'/', label:'Ana Sayfa' },
  { href:'/hakkimizda', label:'Hakkımızda' },
  { href:'/menu', label:'Menü' },
  { href:'/galeri', label:'Galeri' },
  { href:'/iletisim', label:'İletişim' }
]

export default function Navbar(){
  const { pathname } = useRouter()
  return (
    <header className="sticky top-0 z-50 nav-blur border-b border-slate-800">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
          Orka Catering
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? 'px-3 py-2 rounded-xl bg-slate-800 text-white' : 'px-3 py-2 rounded-xl hover:bg-slate-800/60'}
                >{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/iletisim" className="btn btn-primary md:inline-flex hidden">Teklif Al</a>
      </div>
    </header>
  )
}
