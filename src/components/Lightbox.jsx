import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Lightbox({ photos, index, setIndex, onClose }) {
  const [zoomed, setZoomed] = useState(false)
  const touchX = useRef(null)
  const photo = photos[index]

  const go = (dir) => {
    setZoomed(false)
    setIndex((index + dir + photos.length) % photos.length)
  }

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl z-10">
          <FaTimes />
        </button>
        <button onClick={() => go(-1)} className="absolute left-2 md:left-8 text-white/50 hover:text-white text-3xl z-10 p-3">
          <FaChevronLeft />
        </button>
        <button onClick={() => go(1)} className="absolute right-2 md:right-8 text-white/50 hover:text-white text-3xl z-10 p-3">
          <FaChevronRight />
        </button>

        <motion.img
          key={photo.id}
          src={photo.src}
          alt={photo.caption}
          onDoubleClick={() => setZoomed((z) => !z)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: zoomed ? 1.9 : 1 }}
          transition={{ duration: 0.4 }}
          className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg cursor-zoom-in select-none"
          draggable={false}
        />
        <span className="absolute bottom-8 text-white/60 text-sm">{photo.caption} · double-tap to zoom</span>
      </motion.div>
    </AnimatePresence>
  )
}
