import { z } from 'zod'

export const noteFormSchema = z.object({
  title: z.string({ required_error: 'Title is required' }).max(100),
  content: z.string({ required_error: 'Content is required' }).max(1000),
})

export type NoteFormSchemaType = z.infer<typeof noteFormSchema>
