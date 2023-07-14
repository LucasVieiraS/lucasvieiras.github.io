"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router"
import { enUS, ptBR } from "@/util/i18n"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function LanguageSwitch() {

  const router = useRouter()
  const { locale } = router

  const translation = locale == 'pt-BR' ? ptBR : enUS

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-black/20 border">{translation.language}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-black/20 border-2 text-white">
        <DropdownMenuCheckboxItem
          checked={locale == 'en-US'}
          onCheckedChange={() => {
            router.push(router.pathname, router.asPath, { locale: 'en-US' })
          }}
        >
          {translation.english}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale == 'pt-BR'}
          onCheckedChange={() => {
            router.push(router.pathname, router.asPath, { locale: 'pt-BR' })
          }}
        >
          {translation.portuguese}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}