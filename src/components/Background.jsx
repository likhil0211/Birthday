export default function Background() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-ink">
      <div className="blob absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-royal/30 blur-[120px]" />
      <div className="blob absolute top-1/3 -right-40 w-[55vw] h-[55vw] rounded-full bg-blush/25 blur-[120px]" style={{ animationDelay: '-6s' }} />
      <div className="blob absolute bottom-0 left-1/4 w-[45vw] h-[45vw] rounded-full bg-gold/20 blur-[120px]" style={{ animationDelay: '-12s' }} />
      <div className="absolute inset-0 bg-ink/40" />
    </div>
  )
}
