import { NOTES_CACHE_KEY } from '@/constants'
import { NoteItem } from '@/features/notes/components/note-item'
import { fetcher } from '@/libs/fethcer'
import { client } from '@/libs/rpc'
import type { InferResponseType } from 'hono'
import { unstable_cacheTag } from 'next/cache'

const url = client.api.notes.$url()
type ResType = InferResponseType<typeof client.api.notes.$get>

export const NoteList = async () => {
  'use cache'
  const res = await fetcher<ResType>(url)
  unstable_cacheTag(NOTES_CACHE_KEY)

  return res.notes.map((note) => <NoteItem key={note.id} note={note} />)
}
