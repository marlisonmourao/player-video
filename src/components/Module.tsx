import { ChevronDown } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Lesson } from './Lesson'
import { useAppSelector } from '../storage'

interface ModuleProps {
  title: string
  amountOfLessons: number
  moduleIndex: number
}

export function Module({ amountOfLessons, title, moduleIndex }: ModuleProps) {
  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons
  })

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-4">
          {lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}