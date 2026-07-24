import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaTimes } from 'react-icons/fa'
import { VIDEOS } from '../config'

export default function VideoGallery() {
  const [active, setActive] = useState(null)

  return (
    <section className="relative py-24 px-6">
      <h2 className="section-title">Little Clips</h2>
      <p className="text-center text-white/50 mb-14 font-light">Small moments, big smiles</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
        {VIDEOS.map((v, i) => (
          <motion.button
            key={v.id}
            onClick={() => setActive(v)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass relative aspect-[9/16] rounded-2xl overflow-hidden group"
          >
            <img src={v.poster} alt="" className="w-full h-full object-cover opacity-70" onError={(e) => (e.currentTarget.style.opacity = 0.1)} />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/30 group-hover:bg-ink/10 transition-colors">
              <FaPlay className="text-white/80 text-xl" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          >
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl">
              <FaTimes />
            </button>
            <video src={active.src} poster={active.poster} controls autoPlay className="max-h-[80vh] max-w-[90vw] rounded-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
