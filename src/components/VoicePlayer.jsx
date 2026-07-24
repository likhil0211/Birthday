import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaMicrophone } from 'react-icons/fa'
import { AUDIO } from '../config'

export default function VoicePlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    const update = () => setProgress(a.duration ? a.currentTime / a.duration : 0)
    a.addEventListener('timeupdate', update)
    a.addEventListener('ended', () => setPlaying(false))
    return () => a.removeEventListener('timeupdate', update)
  }, [])

  const toggle = () => {
    const a = audioRef.current
    playing ? a.pause() : a.play().catch(() => {})
    setPlaying(!playing)
  }

  return (
    <section className="relative py-24 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass w-full max-w-md rounded-3xl p-8 text-center"
      >
        <FaMicrophone className="mx-auto text-gold text-2xl mb-4" />
        <h3 className="font-display text-2xl mb-1">A Little Voice Note</h3>
        <p className="text-white/50 text-sm mb-6">Just for you</p>

        <audio ref={audioRef} src={AUDIO.voice} preload="metadata" />

        <div className="flex items-center gap-4">
          <button onClick={toggle} className="glass w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            {playing ? <FaPause /> : <FaPlay className="ml-0.5" />}
          </button>
          <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-gold via-blush to-royal" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
