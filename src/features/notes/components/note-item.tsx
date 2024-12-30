import { Button, Heading } from '@/components/justd/ui'
import type { client } from '@/libs/rpc'
import { format } from 'date-fns'
import type { InferResponseType } from 'hono'

type ResType = InferResponseType<typeof client.api.notes.$get>

type NoteItemProps = {
  note: ResType['notes'][number]
}

export const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <article>
      <div className="flex justify-between items-center">
        <Heading level={4}>{note.title}</Heading>
        <Button
          size="small"
          appearance="plain"
          className="text-red-500 hover:bg-transparent hover:brightness-125 transition-all duration-200"
        >
          Delete
        </Button>
      </div>
      <div className="space-y-2">
        <p className="text-sm">{note.content}</p>
        <p className="text-xs text-slate-500">
          Updated at
          <strong className="ml-1">
            {note.updatedAt
              ? format(new Date(note.updatedAt), 'yyyy/MM/dd')
              : 'N/A'}
          </strong>
        </p>
      </div>
    </article>
  )
}
