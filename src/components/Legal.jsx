import { motion } from 'framer-motion'

export default function Legal() {
  return (
    <footer className="relative bg-black py-16 text-premium-fg/80">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <h4 className="font-serif text-2xl text-premium-fg">SPIRIT WAVE</h4>
            <p className="mt-2 text-sm text-premium-fg/60">Cinematic Digital Experiences</p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-premium-gold transition-colors" href="/impressum">Impressum</a>
            <a className="hover:text-premium-gold transition-colors" href="/datenschutz">Datenschutz</a>
          </nav>
        </motion.div>
        <CookieBanner />
      </div>
    </footer>
  )
}

function CookieBanner(){
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-sm text-premium-fg/80 max-w-sm shadow-glow">
        <p>Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. <a href="/datenschutz" className="text-premium-gold underline">Details</a></p>
        <div className="mt-3 flex gap-3">
          <button className="px-3 py-1.5 rounded-lg bg-premium-gold text-premium-bg font-semibold">Akzeptieren</button>
          <button className="px-3 py-1.5 rounded-lg border border-white/15">Ablehnen</button>
        </div>
      </div>
    </div>
  )
}
