import notes from '@/features/notes/server/route'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

const routes = app.route('/notes', notes)

export const GET = handle(app)

export type AppType = typeof routes
