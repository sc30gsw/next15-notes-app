'use client'

import { Button, Loader } from '@/components/justd/ui'
import { deleteNote } from '@/features/notes/actions/delete-note'
import type { client } from '@/libs/rpc'
import type { InferResponseType } from 'hono'
import { IconTrash } from 'justd-icons'
import { useTransition } from 'react'
import { toast } from 'sonner'

type ResType = InferResponseType<typeof client.api.notes.$get>

export const NoteButton = ({ id }: Pick<ResType['notes'][number], 'id'>) => {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteNote(id)

      if (!result.isSuccess) {
        toast.error('Failed to delete note')
        return
      }

      toast.success('Note deleted')
    })
  }

  return (
    <Button
      size="small"
      appearance="plain"
      onPress={handleDelete}
      isPending={isPending}
      className="text-red-500 hover:bg-transparent hover:brightness-125 transition-all duration-200"
    >
      {({ isPending }) => (
        <>
          {isPending ? 'Deleting...' : 'Delete'}
          {isPending ? <Loader /> : <IconTrash />}
        </>
      )}
    </Button>
  )
}
