import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaMusic } from 'react-icons/fa'
import { AUDIO } from '../config'

export default function MusicButton({ autoRef }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const a = audioRef.current
    if (playing) a.pause()
    else a.play().catch(() => {})
    setPlaying(!playing)
  }

  if (autoRef) autoRef.current = { play: () => { audioRef.current?.play().catch(() => {}); setPlaying(true) } }

  return (
    <>
      <audio ref={audioRef} src={AUDIO.bg} loop />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-6 right-6 z-40 glass w-14 h-14 rounded-full flex items-center justify-center"
      >
        <motion.span animate={{ rotate: playing ? 360 : 0 }} transition={{ repeat: playing ? Infinity : 0, ease: 'linear', duration: 4 }}>
          <FaMusic className={playing ? 'text-gold' : 'text-white/50'} />
        </motion.span>
      </motion.button>
    </>
  )
}
