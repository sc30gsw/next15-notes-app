import { Button, Modal } from '@/components/justd/ui'
import { addNote } from '@/features/notes/actions/add-note'
import { NoteForm } from '@/features/notes/components/note-form'
import { useActionState, useState } from 'react'
import { toast } from 'sonner'

export const NoteAddingModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [lastResult, action, isPending] = useActionState<
    Awaited<ReturnType<typeof addNote>> | null,
    FormData
  >(async (currentState, formData) => {
    const result = await addNote(currentState, formData)

    if (result?.status === 'success') {
      toast.success('Note added successfully')
      setIsOpen(false)

      return result
    }

    toast.error('Failed to add note')
    return result
  }, null)

  return (
    <>
      <Button
        size="extra-small"
        appearance="plain"
        onPress={() => setIsOpen(true)}
        className="text-blue-500 hover:bg-transparent hover:opacity-75 transition-all duration-200"
      >
        Add
      </Button>
      <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Header>
          <Modal.Title>Add Note</Modal.Title>
          <Modal.Description>
            Add a new note to your collection.
          </Modal.Description>
        </Modal.Header>
        <NoteForm
          type="add"
          lastResult={lastResult}
          action={action}
          isPending={isPending}
          defaultValue={{ title: '', content: '' }}
        />
      </Modal.Content>
    </>
  )
}
