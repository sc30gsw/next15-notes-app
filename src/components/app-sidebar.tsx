'use client'

import { Avatar, Button, Menu, Sidebar } from '@/components/justd/ui'
import { NoteAddingModal } from '@/features/notes/components/note-adding-modal'
import {
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconCreditCard,
  IconDashboard,
  IconEnvelope,
  IconLogout,
  IconMessage,
  IconSettings,
} from 'justd-icons'
import Link from 'next/link'
import type { ComponentProps } from 'react'

export const AppSidebar = (props: ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <div className="flex items-center justify-between group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2">
          <Link href="/" className="flex gap-2">
            <IconBrandApple className="size-5" />
            <strong className="font-medium group-data-[collapsible=dock]:hidden">
              Notes App
            </strong>
          </Link>
          <NoteAddingModal />
        </div>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Section>
          <Sidebar.Item isCurrent={true} icon={IconDashboard} href="#">
            Overview
          </Sidebar.Item>
          <Sidebar.Item icon={IconSettings} href="#">
            Settings
          </Sidebar.Item>
          <Sidebar.Item icon={IconCreditCard} href="#">
            Billing
          </Sidebar.Item>
          <Sidebar.Item icon={IconEnvelope} href="#" badge="49.67K">
            Newsletter
          </Sidebar.Item>
          <Sidebar.Item icon={IconMessage} href="#" badge={35}>
            Messages
          </Sidebar.Item>
        </Sidebar.Section>
      </Sidebar.Content>
      <Sidebar.Footer className="lg:flex lg:flex-row hidden items-center">
        <Menu>
          <Button
            appearance="plain"
            aria-label="Profile"
            data-slot="menu-trigger"
            className="group"
          >
            <Avatar size="small" shape="square" src="placeholder.png" />
            <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
              John Doe
              <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
            </span>
          </Button>
          <Menu.Content className="min-w-[--trigger-width]">
            <Menu.Item href="#">
              <IconCirclePerson />
              Profile
            </Menu.Item>
            <Menu.Item href="#">
              <IconSettings />
              Settings
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar>
  )
}
