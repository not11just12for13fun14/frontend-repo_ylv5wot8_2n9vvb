import { useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function DepthFX(){
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({rx: 0, ry: 0})

  const rx = useSpring(0, { stiffness: 120, damping: 20 })
  const ry = useSpring(0, { stiffness: 120, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if(!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const ryVal = (x - 0.5) * 18 // rotateY
    const rxVal = (0.5 - y) * 12 // rotateX
    setTilt({ rx: rxVal, ry: ryVal })
    rx.set(rxVal)
    ry.set(ryVal)
  }

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 })
    rx.set(0)
    ry.set(0)
  }

  return (
    <section aria-label="3D Depth Effects" className="relative py-28 bg-gradient-to-b from-black/95 to-black">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_0%,rgba(0,156,255,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-serif text-4xl sm:text-5xl text-premium-fg/95 mb-12">Räumliche Tiefe & Parallax</motion.h2>

        <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleLeave} className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 perspective-[1200px]">
          {[0,1,2].map((i) => (
            <motion.div key={i}
              style={{ rotateX: rx, rotateY: ry }}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="relative h-64 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-premium-accent/20 to-transparent" />
              <div className="absolute -inset-px rounded-2xl" style={{ boxShadow: '0 0 60px rgba(0,156,255,0.15)' }} />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(400px 200px at 50% 20%, rgba(255,255,255,0.06), transparent 60%)' }} />
              <div className="relative z-10 p-6">
                <p className="text-sm tracking-widest uppercase text-premium-fg/60">Layer {i+1}</p>
                <h3 className="mt-2 text-2xl text-premium-fg font-semibold">3D Card mit Tilt</h3>
                <p className="mt-2 text-premium-fg/70">Bewegen Sie den Cursor – die Karte reagiert mit subtiler räumlicher Rotation und Licht.</p>
              </div>
            </motion.div>
          ))}

          {/* Floating orbs for z-depth */}
          <motion.div aria-hidden className="pointer-events-none absolute -top-8 -left-6 h-40 w-40 rounded-full bg-premium-gold/20 blur-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div aria-hidden className="pointer-events-none absolute bottom-0 right-8 h-48 w-48 rounded-full bg-premium-accent/20 blur-2xl" animate={{ y: [0, 12, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
      </div>
    </section>
  )
}
