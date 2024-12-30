import {
  Button,
  Form,
  Loader,
  Modal,
  TextField,
  Textarea,
} from '@/components/justd/ui'
import {
  type NoteFormSchemaType,
  noteFormSchema,
} from '@/features/notes/types/note-schema'
import {
  type SubmissionResult,
  getFormProps,
  getInputProps,
  useForm,
} from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { IconPencilBox, IconPlus } from 'justd-icons'

type NoteFormProps = {
  type: 'add' | 'edit'
  lastResult: SubmissionResult<string[]> | null
  action: (payload: FormData) => void
  isPending: boolean

  defaultValue: NoteFormSchemaType
}

export const NoteForm = ({
  type,
  lastResult,
  action,
  isPending,
  defaultValue,
}: NoteFormProps) => {
  const [form, fields] = useForm({
    constraint: getZodConstraint(noteFormSchema),
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: noteFormSchema })
    },
    defaultValue,
  })

  const getButtonLabel = (isPending: boolean) => {
    if (isPending) {
      return type === 'edit' ? 'Editing...' : 'Adding...'
    }

    return type === 'edit' ? 'Edit' : 'Add'
  }

  const getButtonIcon = () => {
    return type === 'edit' ? <IconPencilBox /> : <IconPlus />
  }

  return (
    <Form {...getFormProps(form)} action={action} className="space-y-4">
      <TextField
        {...getInputProps(fields.title, { type: 'text' })}
        label="Title"
        placeholder="Fill in your title of the note"
        autoFocus={true}
        errorMessage={''}
        isDisabled={isPending}
      />
      <span id={fields.title.errorId} className="mt-1 text-sm text-red-500">
        {fields.title.errors}
      </span>
      <Textarea
        {...getInputProps(fields.content, { type: 'text' })}
        label="Content"
        placeholder="What's on your mind?"
        errorMessage={''}
        isDisabled={isPending}
        className="min-h-80"
      />
      <span id={fields.content.errorId} className="mt-1 text-sm text-red-500">
        {fields.content.errors}
      </span>
      <Modal.Footer>
        <Modal.Close>Cancel</Modal.Close>
        <Button type="submit" isPending={isPending}>
          {({ isPending }) => (
            <>
              {getButtonLabel(isPending)}
              {isPending ? <Loader /> : getButtonIcon()}
            </>
          )}
        </Button>
      </Modal.Footer>
    </Form>
  )
}
