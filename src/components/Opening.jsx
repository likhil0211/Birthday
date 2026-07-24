import { motion, AnimatePresence } from 'framer-motion'
import { FaGift } from 'react-icons/fa'
import { NAME } from '../config'

export default function Opening({ show, onEnter }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink text-center px-6"
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-xs text-gold mb-4"
          >
            A little something for
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-5xl md:text-7xl gradient-text mb-10"
          >
            {NAME}
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onClick={onEnter}
            className="btn-primary flex items-center gap-3"
          >
            <FaGift /> Open your gift
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
