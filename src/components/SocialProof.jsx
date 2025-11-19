import { motion } from 'framer-motion'

const logos = [
  'https://images.unsplash.com/photo-1554463529-e27854014799?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=60',
]

const testimonials = [
  {
    quote: '„Selten so viel Ruhe und Autorität in einem Interface gesehen. Pure Klasse.“',
    name: 'Dr. A. König',
    role: 'Vorstand, [DEIN_NAME] AG'
  },
  {
    quote: '„Die Conversion ist gestiegen, die Marke wirkt wie ein Marktführer. Exakt das Ergebnis.“',
    name: 'M. Richter',
    role: 'CMO, [DEIN_NAME]'
  },
  {
    quote: '„Technisch tadellos. Design auf Weltklasse-Niveau. Empfehlung ohne Vorbehalt.“',
    name: 'S. Weber',
    role: 'Partner, [DEIN_NAME] Partners'
  }
]

export default function SocialProof() {
  return (
    <section className="relative py-20 bg-premium-bg">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-12 whitespace-nowrap will-change-transform animate-marquee">
            {[...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt="Logo" className="h-12 opacity-50" />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-premium-fg">
              <p className="text-lg leading-relaxed">{t.quote}</p>
              <footer className="mt-4 text-premium-fg/70">{t.name} — {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
