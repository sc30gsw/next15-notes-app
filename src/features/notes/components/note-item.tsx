import { Heading } from '@/components/justd/ui'
import { NoteDeleteModal } from '@/features/notes/components/note-delete-modal'
import type { client } from '@/libs/rpc'
import { format } from 'date-fns'
import type { InferResponseType } from 'hono'
import Link from 'next/link'

type ResType = InferResponseType<typeof client.api.notes.$get>

type NoteItemProps = {
  note: ResType['notes'][number]
}

export const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <article>
      <div className="flex justify-between items-center">
        <Heading level={4}>
          <Link href={`/notes/${note.id}`} className="cursor-pointer">
            {note.title}
          </Link>
        </Heading>
        <NoteDeleteModal id={note.id} />
      </div>
      <div className="space-y-2">
        <Link href={`/notes/${note.id}`} className="cursor-pointer">
          <p className="text-sm text-ellipsis w-2/5 whitespace-nowrap overflow-hidden">
            {note.content}
          </p>
          <p className="text-xs text-slate-500">
            Updated at
            <strong className="ml-1">
              {note.updatedAt
                ? format(new Date(note.updatedAt), 'yyyy/MM/dd')
                : 'N/A'}
            </strong>
          </p>
        </Link>
      </div>
    </article>
  )
}
