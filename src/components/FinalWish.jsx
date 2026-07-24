import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FaHeart } from 'react-icons/fa'
import { NAME, WISH_TITLE, WISH_TEXT } from '../config'

function fireworks() {
  const duration = 3000
  const end = Date.now() + duration
  const colors = ['#d4af37', '#ff5e9e', '#8b3ff0', '#ffffff']
  ;(function frame() {
    confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors })
    confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
  confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors })
}

export default function FinalWish() {
  const [revealed, setRevealed] = useState(false)
  const intervalRef = useRef(null)

  const surprise = () => {
    setRevealed(true)
    fireworks()
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      confetti({
        particleCount: 60,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() * 0.4 },
        colors: ['#d4af37', '#ff5e9e', '#8b3ff0'],
      })
    }, 1200)
    setTimeout(() => clearInterval(intervalRef.current), 6000)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {!revealed ? (
        <motion.button
          onClick={surprise}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ['0 0 20px rgba(212,175,55,0.3)', '0 0 50px rgba(255,94,158,0.5)', '0 0 20px rgba(212,175,55,0.3)'] }}
          transition={{ boxShadow: { repeat: Infinity, duration: 2.5 } }}
          className="glass rounded-full w-44 h-44 md:w-56 md:h-56 flex flex-col items-center justify-center gap-3"
        >
          <FaHeart className="text-blush text-3xl" />
          <span className="uppercase text-xs tracking-widest text-white/80">Tap for<br />your surprise</span>
        </motion.button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="font-display text-3xl md:text-5xl gradient-text mb-6">{WISH_TITLE}</h2>
          <p className="max-w-xl mx-auto text-white/70 font-light leading-relaxed text-lg">{WISH_TEXT}</p>
          <p className="mt-10 font-display text-2xl text-gold">— With all my love, for {NAME}</p>
        </motion.div>
      )}
    </section>
  )
}
