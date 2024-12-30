'use server'

import { NOTES_CACHE_KEY, NOTE_DETAIL_CACHE_KEY } from '@/constants'
import { noteFormSchema } from '@/features/notes/types/note-schema'
import { db } from '@/libs/db/drizzle'
import { notes } from '@/libs/db/schema'
import { parseWithZod } from '@conform-to/zod'
import { eq } from 'drizzle-orm'
import { revalidateTag } from 'next/cache'

export const editNote = async (_: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: noteFormSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  await db
    .update(notes)
    .set({
      title: submission.value.title,
      content: submission.value.content,
    })
    .where(eq(notes.id, formData.get('noteId') as string))

  revalidateTag(NOTE_DETAIL_CACHE_KEY(formData.get('noteId') as string))
  revalidateTag(NOTES_CACHE_KEY)

  return submission.reply()
}
