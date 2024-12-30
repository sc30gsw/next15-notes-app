'use client'

import { Modal } from '@/components/justd/ui'
import { editNote } from '@/features/notes/actions/edit-note'
import { NoteForm } from '@/features/notes/components/note-form'
import type { client } from '@/libs/rpc'
import type { InferResponseType } from 'hono'
import { useRouter } from 'next/navigation'
import { useActionState, useState } from 'react'
import { toast } from 'sonner'

type ResType = InferResponseType<(typeof client.api.notes)[':noteId']['$get']>

type NoteDetailModalProps = {
  note: ResType['note']
}

export const NoteDetailModal = ({ note }: NoteDetailModalProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [lastResult, action, isPending] = useActionState<
    Awaited<ReturnType<typeof editNote>> | null,
    FormData
  >(async (currentState, formData) => {
    if (!note?.id) {
      return null
    }

    formData.append('noteId', note.id)
    const result = await editNote(currentState, formData)

    if (result?.status === 'success') {
      toast.success('Note updated successfully')
      setIsOpen(false)
      router.push('/')

      return result
    }

    toast.error('Failed to edit note')
    return result
  }, null)

  return (
    <>
      <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Header>
          <Modal.Title>Edit Note</Modal.Title>
          <Modal.Description>Edit your note.</Modal.Description>
        </Modal.Header>
        <NoteForm
          type="edit"
          action={action}
          lastResult={lastResult}
          isPending={isPending}
          defaultValue={{
            title: note?.title ?? '',
            content: note?.content ?? '',
          }}
        />
      </Modal.Content>
    </>
  )
}
