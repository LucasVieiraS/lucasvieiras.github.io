import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function UserFrame({...props}: any) {
  return (
    <div className="w-full h-12 rounded outline-1 outline-zinc-50/50 bg-zinc-600 lg:bg-zinc-900 outline lg:outline-none transition-all lg:hover:outline lg:hover:outline-1 flex items-center justify-evenly content-center align-center py-2 leading-none text-center group hover:shadow-lg lg:hover:bg-zinc-600 p-2 mt-2 hover:cursor-pointer	">
      <Image
        width={25}
        height={25}
        alt="Lucas Vieira's Github Profile Picture"
        src="https://avatars.githubusercontent.com/u/79713436?v=4.png"
        className="rounded-md"
      ></Image>
      <p className="font-semibold text-sm text-zinc-100 my-auto px-4 whitespace-nowrap">Lucas Vieira da Silva</p>
      <RxHamburgerMenu {...props} className="my-auto rounded bg-zinc-800 outline outline-1 p-1 outline-white lg:bg-zinc-600 group-hover:bg-zinc-900 lg:outline-none group-hover:text-zinc-50 w-6 h-6 lg:w-4 lg:h-4" />
    </div>
  );
}
