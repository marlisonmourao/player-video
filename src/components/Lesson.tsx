import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({
  duration,
  title,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      className="flex items-center gap-3 text-sm text-zinc-400 transition-colors data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100 "
      data-active={isCurrent}
      disabled={isCurrent}
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
