import { AppSidebar } from '@/components/app-sidebar'
import { Avatar, Menu, Separator, Sidebar } from '@/components/justd/ui'
import {
  IconChevronLgDown,
  IconCirclePerson,
  IconLogout,
  IconSettings,
  IconShield,
} from 'justd-icons'
import type { ReactNode } from 'react'

type SidebarProviderProps = { children: ReactNode }

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  return (
    <Sidebar.Provider>
      <AppSidebar />
      <Sidebar.Inset>
        <Sidebar.Nav isSticky={true}>
          <span className="flex items-center gap-x-3">
            <Sidebar.Trigger className="-mx-2" />
            <Separator className="h-6 sm:block hidden" orientation="vertical" />
          </span>

          <div className="flex sm:hidden items-center gap-x-2">
            <Menu>
              <Menu.Trigger
                aria-label="Profile"
                className="flex items-center gap-x-2 group"
              >
                <Avatar size="small" shape="circle" src="placeholder.png" />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content className="min-w-[--trigger-width]">
                <Menu.Item href="#">
                  <IconCirclePerson />
                  Profile
                </Menu.Item>
                <Menu.Item href="#">
                  <IconSettings />
                  Settings
                </Menu.Item>
                <Menu.Item href="#">
                  <IconShield />
                  Security
                </Menu.Item>
                <Menu.Item href="#">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>
        </Sidebar.Nav>
        <div className="p-4 lg:p-6">{children}</div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
