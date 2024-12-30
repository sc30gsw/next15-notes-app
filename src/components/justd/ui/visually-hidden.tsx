'use client'

import type * as React from 'react'

// biome-ignore lint/correctness/noUndeclaredDependencies: This is a peer dependency
import { useVisuallyHidden } from 'react-aria'

type VisuallyHiddenSpanProps = {
  children: React.ReactNode
}

const VisuallyHidden = ({ children }: VisuallyHiddenSpanProps) => {
  const { visuallyHiddenProps } = useVisuallyHidden()

  return <span {...visuallyHiddenProps}>{children}</span>
}

export { VisuallyHidden }
