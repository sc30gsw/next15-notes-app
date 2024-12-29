// biome-ignore lint/correctness/noUndeclaredDependencies: This is a custom utility function.
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { cn }
