import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { siteConfig } from '../config/siteConfig.ts'

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[radial-gradient(1200px_800px_at_60%_20%,rgba(79,195,247,0.08),transparent_60%)]" aria-label="Cinematic Hero">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
            <p className="text-premium-gold/80 tracking-widest uppercase text-xs mb-6">{siteConfig.industry} • Boutique Studio</p>
            <h1 className="font-serif text-5xl sm:text-7xl leading-[1.05] text-premium-fg drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              Wir schützen Ihr Vermächtnis — wir inszenieren Marktführer.
            </h1>
            <p className="mt-6 text-premium-fg/70 max-w-xl text-lg">
              High-Status Interfaces, Glas-Ästhetik und präzise Interaktion. Entwickelt für Marken, die führen – nicht folgen.
            </p>

            <MagneticCTA />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MagneticCTA() {
  const onMouseMove = (e) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty('--x', `${x}px`)
    target.style.setProperty('--y', `${y}px`)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-10">
      <button onMouseMove={onMouseMove} className="relative inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-semibold text-premium-bg shadow-glow transition-transform duration-300 will-change-transform [transform:translateZ(0)] hover:scale-105"
        style={{
          background: 'linear-gradient(110deg, #C9A227, #f1d37a 40%, #C9A227 60%)',
          backgroundSize: '200% 100%'
        }}>
        <span className="relative z-10">Jetzt anfragen</span>
        <span className="relative z-10">→</span>
        <span className="pointer-events-none absolute inset-0 rounded-full" style={{
          maskImage: 'radial-gradient(120px 120px at var(--x) var(--y), white 20%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(120px 120px at var(--x) var(--y), white 20%, transparent 60%)',
          background: 'radial-gradient(200px 200px at var(--x) var(--y), rgba(255,255,255,0.35), transparent 50%)'
        }} />
        <span className="absolute inset-0 rounded-full bg-[linear-gradient(110deg,rgba(255,255,255,0.1),rgba(255,255,255,0)_45%,rgba(255,255,255,0.1))] bg-[length:200%_100%] animate-shimmer" />
      </button>
    </motion.div>
  )
}
