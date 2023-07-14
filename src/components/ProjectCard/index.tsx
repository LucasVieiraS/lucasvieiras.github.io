import Link from "next/link";
import React from "react";
import { RxArrowTopRight, RxEyeOpen } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface ProjectCardProps {
  link: string;
  name: string;
  imagePath: string;
  gradient?: string;
  live?: string;
}

export default function ProjectCard({ link, name, imagePath, gradient, live }: ProjectCardProps) {
  return (
    <div className="w-full h-[350px] bg-zinc-500 grid grid-rows-[1fr_3rem] overflow-hidden rounded-sm">
      <div className={twMerge("z-0", gradient)}>
        <div className="bg-center bg-contain bg-no-repeat w-full h-full z-[2]" style={{
          backgroundImage: `url(${imagePath})`
        }
        }></div>
      </div>
      <div className="bg-zinc-900 flex flex-row items-center justify-between p-1 leading-none text-center px-2 pl-3">
        <p className="text-md font-medium">{name}</p>
        <Link href={link} className="group flex items-center justify-center gap-3 no-underline text-zinc-300">
          <p>{live ? 'Live' : 'Github'}</p><RxArrowTopRight className="w-7 h-7 text-zinc-500 group-hover:text-violet-500" />
        </Link>
      </div>
    </div>
  );
}
