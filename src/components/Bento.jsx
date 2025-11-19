import { motion } from 'framer-motion'
import { Sparkles, Shield, Crown, LineChart, Rocket, Gem } from 'lucide-react'

const items = [
  { icon: Crown, title: 'Markenführung', desc: 'Positionierung mit Autorität und Ruhe.', hint: 'Strategy' },
  { icon: Gem, title: 'Designsysteme', desc: 'Zeitlose Ästhetik. Perfekte Typografie.', hint: 'Design' },
  { icon: LineChart, title: 'Conversion', desc: 'Vertrauen in jeder Interaktion.', hint: 'Growth' },
  { icon: Shield, title: 'Compliance', desc: 'Rechtssicher. DSGVO-konform.', hint: 'Legal' },
  { icon: Rocket, title: 'Performance', desc: 'Blitzschnell. Stabil. Skalierbar.', hint: 'Tech' },
  { icon: Sparkles, title: 'Micro-Interactions', desc: 'Slow Motion. Haptik. Präzision.', hint: 'Motion' },
]

export default function Bento() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black/80 to-black/95">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-serif text-4xl sm:text-5xl text-premium-fg/95 mb-12">Glas-Bento Grid</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((Item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-premium-gold/40 transition-colors" />
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg border border-white/10 bg-white/10 p-3 text-premium-gold">
                  <Item.icon size={22} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-premium-fg/50 mb-1">{Item.hint}</div>
                  <h3 className="text-xl text-premium-fg font-semibold">{Item.title}</h3>
                  <p className="text-premium-fg/70 mt-2">{Item.desc}</p>
                </div>
              </div>
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 40px rgba(201,162,39,0.15)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
