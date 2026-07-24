import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { NAME } from '../config'

export default function Hero() {
  const ref = useRef(null)
  const letters = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    if (!letters.current) return
    gsap.fromTo(
      letters.current.children,
      { y: 60, opacity: 0, rotateX: -60 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power4.out', stagger: 0.06, delay: 0.2 }
    )
  }, [])

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div style={{ y, opacity }} className="flex flex-col items-center">
        <span className="uppercase tracking-[0.5em] text-xs md:text-sm text-gold/80 mb-6">
          Happy Birthday
        </span>
        <h1 ref={letters} className="font-display text-6xl md:text-9xl gradient-text flex flex-wrap justify-center" style={{ perspective: 800 }}>
          {NAME.split('').map((ch, i) => (
            <span key={i} className="inline-block">{ch}</span>
          ))}
        </h1>
        <p className="mt-8 max-w-md text-white/60 font-light">
          One scroll. One story. One girl who deserves every bit of it.
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 text-white/40 text-xs uppercase tracking-widest"
      >
        Scroll
      </motion.div>
    </section>
  )
}
