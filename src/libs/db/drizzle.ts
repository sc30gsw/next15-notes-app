// biome-ignore lint/style/noNamespaceImport: This is a drizzle schema file
import * as schema from '@/libs/db/schema'
import { env } from '@/libs/env'
import { drizzle } from 'drizzle-orm/neon-http'

if (!env.DATABASE_URL) {
  throw new Error(`DATABASE_URL is not defined ${env.DATABASE_URL}`)
}

export const db = drizzle(env.DATABASE_URL, { schema })
