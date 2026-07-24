import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

import Background from './components/Background'
import FloatingHearts from './components/FloatingHearts'
import Opening from './components/Opening'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import VideoGallery from './components/VideoGallery'
import VoicePlayer from './components/VoicePlayer'
import VideoMessage from './components/VideoMessage'
import Timeline from './components/Timeline'
import FinalWish from './components/FinalWish'
import MusicButton from './components/MusicButton'

export default function App() {
  const [showOpening, setShowOpening] = useState(true)
  const musicRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const enter = () => {
    setShowOpening(false)
    musicRef.current?.play()
  }

  return (
    <div className="relative">
      <Background />
      <FloatingHearts />
      <Opening show={showOpening} onEnter={enter} />

      <main className="relative">
        <Hero />
        <Timeline />
        <Gallery />
        <VideoGallery />
        <VoicePlayer />
        <VideoMessage />
        <FinalWish />
      </main>

      <MusicButton autoRef={musicRef} />

      <footer className="relative text-center py-10 text-white/30 text-xs tracking-widest uppercase">
        Made with love, for Bangaram
      </footer>
    </div>
  )
}
