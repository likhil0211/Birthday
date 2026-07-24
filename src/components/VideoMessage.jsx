import { motion } from 'framer-motion'
import { VIDEO_MESSAGE } from '../config'

export default function VideoMessage() {
  return (
    <section className="relative py-24 px-6 flex flex-col items-center">
      <h2 className="section-title">A Message For You</h2>
      <p className="text-center text-white/50 mb-12 font-light">Press play, {`\u2764`}</p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-3xl p-3 max-w-2xl w-full"
      >
        <video src={VIDEO_MESSAGE} controls className="w-full rounded-2xl aspect-video bg-black/40" />
      </motion.div>
    </section>
  )
}
