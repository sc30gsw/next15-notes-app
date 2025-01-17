'use client'

import { SidebarProvider } from '@/components/sidebar-provider'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { RouterProvider } from 'react-aria-components'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <SidebarProvider>{children}</SidebarProvider>
    </RouterProvider>
  )
}
