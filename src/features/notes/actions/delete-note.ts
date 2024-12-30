'use server'

import { NOTES_CACHE_KEY } from '@/constants'
import { db } from '@/libs/db/drizzle'
import { notes } from '@/libs/db/schema'
import type { ActionResult } from '@/types'
import { eq } from 'drizzle-orm'
import { revalidateTag } from 'next/cache'

export const deleteNote = async (noteId: string): Promise<ActionResult> => {
  try {
    await db.delete(notes).where(eq(notes.id, noteId))

    revalidateTag(NOTES_CACHE_KEY)

    return { isSuccess: true }
    // biome-ignore lint/correctness/noUnusedVariables: This is used in the catch block
  } catch (err) {
    return { isSuccess: false, error: { message: 'Something went wrong' } }
  }
}
