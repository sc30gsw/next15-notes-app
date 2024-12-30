'use server'

import { NOTES_CACHE_KEY } from '@/constants'
import { noteFormSchema } from '@/features/notes/types/note-schema'
import { db } from '@/libs/db/drizzle'
import { notes } from '@/libs/db/schema'
import { parseWithZod } from '@conform-to/zod'
import { revalidateTag } from 'next/cache'

export const addNote = async (_: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: noteFormSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  await db.insert(notes).values({
    title: submission.value.title,
    content: submission.value.content,
  })

  revalidateTag(NOTES_CACHE_KEY)

  return submission.reply()
}
