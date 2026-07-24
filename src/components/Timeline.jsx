import { motion } from 'framer-motion'
import { TIMELINE } from '../config'

export default function Timeline() {
  return (
    <section className="relative py-24 px-6">
      <h2 className="section-title">Our Timeline</h2>
      <p className="text-center text-white/50 mb-16 font-light">A story worth scrolling through</p>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-blush to-royal opacity-40" />
        <div className="flex flex-col gap-16">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`relative flex ${i % 2 ? 'md:justify-end' : 'md:justify-start'} justify-center`}
            >
              <div className={`glass rounded-2xl p-6 w-full md:w-[45%] ${i % 2 ? 'md:text-right' : ''}`}>
                <span className="text-gold text-xs uppercase tracking-widest">{t.year}</span>
                <p className="mt-2 text-white/80 font-light">{t.text}</p>
              </div>
              <span className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-blush shadow-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
