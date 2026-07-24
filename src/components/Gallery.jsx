import { useState } from 'react'
import { motion } from 'framer-motion'
import { PHOTOS } from '../config'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [index, setIndex] = useState(null)

  return (
    <section className="relative py-24 px-6">
      <h2 className="section-title">Moments</h2>
      <p className="text-center text-white/50 mb-14 font-light">Tap a memory to relive it</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
        {PHOTOS.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            whileHover={{ scale: 1.04 }}
            className="glass relative aspect-square overflow-hidden rounded-2xl group"
          >
            <img
              src={p.src}
              alt={p.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => (e.currentTarget.style.opacity = 0.15)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs text-white/80">{p.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {index !== null && (
        <Lightbox photos={PHOTOS} index={index} setIndex={setIndex} onClose={() => setIndex(null)} />
      )}
    </section>
  )
}
