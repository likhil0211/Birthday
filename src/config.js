// Central place to edit content — swap placeholder paths with real assets.
export const NAME = 'Bangaram'

export const AUDIO = {
  bg: '/audio/bg.mp3',
  voice: '/audio/voice.mp3',
}

export const VIDEO_MESSAGE = '/videos/message.mp4'

export const PHOTOS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  src: `/images/photo${i + 1}.jpg`,
  caption: `Memory ${i + 1}`,
}))

export const VIDEOS = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  src: `/videos/video${i + 1}.mp4`,
  poster: `/images/video-thumb${i + 1}.jpg`,
}))

export const TIMELINE = [
  { year: 'Day 1', text: 'The day your story began — and everyone got a little luckier.' },
  { year: 'Chapter 1', text: 'Every laugh you gave the world became someone\u2019s favorite memory.' },
  { year: 'Today', text: 'Another year of the same magic that makes you, you.' },
  { year: 'Always', text: 'And a thousand more birthdays still to come.' },
]

export const WISH_TITLE = 'For the girl who lights up every room'
export const WISH_TEXT =
  "Bangaram, may this year hand you everything you deserve — soft mornings, loud laughter, and love that never runs out. Happy Birthday."
