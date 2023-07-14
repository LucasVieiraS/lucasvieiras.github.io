import Link from "next/link";
import React, { ReactNode } from "react";
import { RxGithubLogo, RxReload } from "react-icons/rx";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { useRouter } from "next/router";
import { enUS, ptBR } from "@/util/i18n";

export default function RootNavbar({ children }: { children: ReactNode }) {

  const router = useRouter()
  const { locale } = router

  const translation = locale == 'pt-BR' ? ptBR : enUS

  return (
    <div className="flex flex-col w-full">
      <nav className="flex gap-1 h-12 w-full px-5 py-1 border-b border-b-zinc-700">
        <div className="w-[50%] h-full text-left flex justify-start">
          <p className="my-auto leading-none font-medium text-sm">
            {translation.navbarTitle}
          </p>
        </div>
        <div className="w-[50%] h-full flex justify-end gap-2">
          <LanguageSwitch />
          <Link href="https://github.com/LucasVieiraS/LucasVieiraS.github.io" rel="noopener noreferrer" target="_blank">
            <button className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 hover:shadow-lg text-zinc-50 h-full rounded-lg shadow-sm border border-black/20 my-auto leading-none font-regular text-sm flex gap-2 items-center">
              <RxGithubLogo className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </nav>
      <div className="w-full h-full p-4">{children}</div>
    </div>
  );
}
