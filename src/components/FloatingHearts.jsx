import { useMemo } from 'react'
import { FaHeart } from 'react-icons/fa'

export default function FloatingHearts({ count = 16 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        duration: 9 + Math.random() * 10,
        delay: Math.random() * 12,
        drift: `${(Math.random() * 80 - 40).toFixed(0)}px`,
        color: [`#ff5e9e`, `#d4af37`, `#8b3ff0`][i % 3],
      })),
    [count]
  )

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {hearts.map((h) => (
        <FaHeart
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            color: h.color,
            opacity: 0.5,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            '--drift': h.drift,
          }}
        />
      ))}
    </div>
  )
}
