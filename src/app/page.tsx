import { NOTES_CACHE_KEY } from '@/constants'
import { NoteItem } from '@/features/notes/components/note-item'
import { fetcher } from '@/libs/fethcer'
import { client } from '@/libs/rpc'
import type { InferResponseType } from 'hono'
import { unstable_cacheTag } from 'next/cache'

type ResType = InferResponseType<typeof client.api.notes.$get>

const getNotes = async () => {
  'use cache'

  const url = client.api.notes.$url()

  const res = await fetcher<ResType>(url)

  unstable_cacheTag(NOTES_CACHE_KEY)

  return res.notes
}

const Home = async () => {
  const notes = await getNotes()

  return notes.map((note) => <NoteItem key={note.id} note={note} />)
}

export default Home
