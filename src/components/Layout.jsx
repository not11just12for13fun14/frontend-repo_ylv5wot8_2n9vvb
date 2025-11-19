import { Helmet, HelmetProvider } from 'react-helmet-async'
import { siteConfig } from '../config/siteConfig.ts'

export default function Layout({ children }){
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-premium-bg text-premium-fg font-sans">
        <Helmet>
          <title>{siteConfig.seo.title}</title>
          <meta name="description" content={siteConfig.seo.description} />
        </Helmet>
        <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="font-serif text-lg">{siteConfig.siteName}</div>
            <nav className="hidden sm:flex gap-6 text-sm text-premium-fg/80">
              <a href="#services" className="hover:text-premium-gold">Leistungen</a>
              <a href="#cases" className="hover:text-premium-gold">Cases</a>
              <a href="#contact" className="hover:text-premium-gold">Kontakt</a>
            </nav>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </div>
    </HelmetProvider>
  )
}
