'use client'

import type * as React from 'react'

import { Avatar, Button, Menu, Sidebar } from '@/components/justd/ui'
import {
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconCreditCard,
  IconDashboard,
  IconEnvelope,
  IconLogout,
  IconMessage,
  IconPeople,
  IconPersonAdd,
  IconSettings,
} from 'justd-icons'
import Link from 'next/link'

export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">
            Apple
          </strong>
        </Link>
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
        <Sidebar.Section collapsible={true} title="Team">
          <Sidebar.Item icon={IconPeople} href="#">
            Team Overview
          </Sidebar.Item>
          <Sidebar.Item icon={IconPersonAdd} href="#">
            Add New Member
          </Sidebar.Item>
          <Sidebar.Item href="#">Manage Roles</Sidebar.Item>
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
              Saul Hudson
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
