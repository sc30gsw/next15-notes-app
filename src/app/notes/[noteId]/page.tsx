import { NOTES_CACHE_KEY } from '@/constants'
import { NoteDetailModal } from '@/features/notes/components/note-detail-modal'
import { fetcher } from '@/libs/fethcer'
import { client } from '@/libs/rpc'
import type { InferRequestType, InferResponseType } from 'hono'
import { unstable_cacheTag } from 'next/cache'

type ReqType = InferRequestType<(typeof client.api.notes)[':noteId']['$get']>
type ResType = InferResponseType<(typeof client.api.notes)[':noteId']['$get']>

const getNote = async (param: ReqType['param']) => {
  'use cache'

  const url = client.api.notes[':noteId'].$url({
    param: { noteId: param.noteId },
  })

  const res = await fetcher<ResType>(url)

  unstable_cacheTag(NOTES_CACHE_KEY, param.noteId)

  return res.note
}

type NoteIdModalPageProps = {
  params: Promise<{ noteId: string }>
}

const NoteIdPage = async ({ params }: NoteIdModalPageProps) => {
  return <NoteDetailModal note={await getNote(await params)} />
}

export default NoteIdPage
