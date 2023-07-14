import Link from "next/link";
import React, { ComponentType } from "react";
import { IconType } from "react-icons";

interface SidebarElementInterface {
  text: string;
  icon: IconType;
  route: string;
}

export default function RootSidebarElement({
  text,
  icon: Icon,
  route,
  ...rest
}: SidebarElementInterface) {
  return (
    <Link {...rest} href={route} className="hidden data-[tabsopen=true]:flex lg:flex">
      <div {...rest} className="w-full hidden data-[tabsopen=true]:flex lg:flex h-8 rounded outline-1 outline-zinc-50/50 data-[active=true]:outline hover:outline items-center justify-start px-3 align-center leading-none group text-left hover:shadow-lg data-[active=true]:bg-zinc-600 hover:bg-zinc-600 p-2 mt-0 hover:cursor-pointer	">
      {Icon && (
        <Icon className="my-auto text-zinc-300 group-hover:text-zinc-50 w-4 h-4 mr-4" />
      )}
      <p className="font-semibold leading-none text-sm ml-1 text-zinc-300 group-hover:text-zinc-50 my-auto">
        {text}
      </p>
    </div>
    </Link>
  );
}
