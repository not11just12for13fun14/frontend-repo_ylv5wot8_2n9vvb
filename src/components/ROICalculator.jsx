import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign } from 'lucide-react'

function formatEUR(value){
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value || 0)
}

export default function ROICalculator(){
  const [inputs, setInputs] = useState({
    traffic: 25000,
    convRate: 2.0, // %
    aov: 180,
    uplift: 35, // % uplift from redesign
    cost: 25000
  })

  const handle = (k) => (e) => setInputs(s => ({ ...s, [k]: Number(e.target.value) }))

  const results = useMemo(() => {
    const visits = inputs.traffic
    const cr = inputs.convRate / 100
    const aov = inputs.aov
    const uplift = inputs.uplift / 100
    const baseRevenue = visits * cr * aov
    const newRevenue = visits * (cr * (1 + uplift)) * aov
    const delta = newRevenue - baseRevenue
    const roi = inputs.cost > 0 ? (delta - inputs.cost) / inputs.cost : 0
    return { baseRevenue, newRevenue, delta, roi }
  }, [inputs])

  return (
    <section id="roi" className="relative py-24 bg-gradient-to-b from-black to-black/95">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-serif text-4xl sm:text-5xl text-premium-fg/95 mb-12">ROI-Rechner</motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { key: 'traffic', label: 'Monatliche Besucher', min: 1000, max: 200000, step: 1000 },
                { key: 'convRate', label: 'Conversion-Rate (%)', min: 0.2, max: 12, step: 0.1 },
                { key: 'aov', label: 'Durchschn. Bestellwert (€)', min: 20, max: 2000, step: 10 },
                { key: 'uplift', label: 'Erwarteter Uplift (%)', min: 5, max: 150, step: 1 },
                { key: 'cost', label: 'Projektkosten (€)', min: 5000, max: 250000, step: 500 }
              ].map((cfg) => (
                <label key={cfg.key} className="col-span-2 md:col-span-1 text-sm">
                  <div className="flex items-center justify-between mb-2 text-premium-fg/80">
                    <span>{cfg.label}</span>
                    <span className="font-mono text-premium-gold">{inputs[cfg.key]}</span>
                  </div>
                  <input type="range" min={cfg.min} max={cfg.max} step={cfg.step} value={inputs[cfg.key]} onChange={handle(cfg.key)} className="w-full accent-[#C9A227]" />
                </label>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Stat icon={DollarSign} label="Ist-Umsatz/Monat" value={formatEUR(results.baseRevenue)} />
              <Stat icon={TrendingUp} label="Neuer Umsatz/Monat" value={formatEUR(results.newRevenue)} />
              <Stat icon={Calculator} label="Uplift/Monat" value={formatEUR(results.delta)} />
            </div>
            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/10">
              <p className="text-premium-fg/80">Erwartete Amortisation: <span className="font-semibold text-premium-gold">{(results.roi * 100).toFixed(0)}%</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon: Icon, label, value }){
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3 text-premium-fg/80">
        <Icon size={18} className="text-premium-gold" />
        <span className="text-sm">{label}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold text-premium-fg">{value}</div>
    </div>
  )
}
