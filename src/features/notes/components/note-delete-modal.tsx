'use client'

import { Loader, Modal, buttonStyles } from '@/components/justd/ui'
import { deleteNote } from '@/features/notes/actions/delete-note'
import type { client } from '@/libs/rpc'
import type { InferResponseType } from 'hono'
import { IconTrash } from 'justd-icons'
import { useTransition } from 'react'
import { toast } from 'sonner'

type ResType = InferResponseType<typeof client.api.notes.$get>

export const NoteDeleteModal = ({
  id,
}: Pick<ResType['notes'][number], 'id'>) => {
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
    <Modal>
      <Modal.Trigger
        className={buttonStyles({
          appearance: 'plain',
          size: 'small',
          className:
            'text-red-500 hover:bg-transparent hover:brightness-125 transition-all duration-200',
        })}
        isDisabled={isPending}
      >
        Delete <IconTrash />
      </Modal.Trigger>
      <Modal.Content role="alertdialog">
        <Modal.Header>
          <Modal.Title>Delete Note</Modal.Title>
          <Modal.Description>
            This will permanently delete the selected note. Continue?
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close appearance="outline">Cancel</Modal.Close>
          <Modal.Close
            appearance="solid"
            intent="danger"
            onPress={handleDelete}
            isPending={isPending}
          >
            {({ isPending }) => (
              <>
                {isPending ? 'Deleting...' : 'Delete'}
                {isPending ? <Loader /> : <IconTrash />}
              </>
            )}
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
