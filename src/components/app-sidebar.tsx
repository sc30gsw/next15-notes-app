'use client'

import type * as React from 'react'

import { Avatar, Button, Heading, Menu, Sidebar } from '@/components/justd/ui'
import {
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconLogout,
  IconSettings,
} from 'justd-icons'
import Link from 'next/link'

export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
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
          <Button
            size="small"
            appearance="plain"
            className="text-blue-500 hover:bg-transparent hover:brightness-125 transition-all duration-200"
          >
            Add
          </Button>
        </div>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Section>
          <Sidebar.Item isCurrent={true} href="#">
            Overview
          </Sidebar.Item>
          <Sidebar.Item>
            <article>
              <div className="flex justify-between items-center">
                <Heading level={4}>タイトル</Heading>
                <Button
                  size="small"
                  appearance="plain"
                  className="text-red-500 hover:bg-transparent hover:brightness-125 transition-all duration-200"
                >
                  Delete
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm">ノート内容です</p>
                <p className="text-xs text-slate-500">
                  Updated at <strong>yyyy/mm/dd</strong>
                </p>
              </div>
            </article>
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
