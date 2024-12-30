import { db } from '@/libs/db/drizzle'
import { notes } from '@/libs/db/schema'
import { desc, eq } from 'drizzle-orm'
import { Hono } from 'hono'

const app = new Hono()
  .get('/', async (c) => {
    const noteList = await db.query.notes.findMany({
      orderBy: [desc(notes.createdAt)],
    })

    return c.json({ notes: noteList }, 200)
  })
  .get('/:noteId', async (c) => {
    const { noteId } = c.req.param()

    const note = await db.query.notes.findFirst({
      where: eq(notes.id, noteId),
    })

    return c.json({ note }, 200)
  })

export default app
