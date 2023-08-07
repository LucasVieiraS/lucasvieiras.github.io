import Image from "next/image";
import Link from "next/link";

import { Rubik } from "next/font/google";

import Carousel from "@/components/custom/carousel";
import SocialButton from "@/components/custom/social-button";

import shape from "../../public/blur2.png";
import lucas from "../../public/peep.png";

import {
  RxAvatar,
  RxBackpack,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { RiMailFill } from "react-icons/ri"

import MenuButton from "@/components/custom/menu-button";
import ProjectCard from "@/components/custom/project-card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/custom/footer";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-black/95 flex-col items-center bg-main bg-cover bg-no-repeat min-w-screen ${rubik.className}`}
    >
      <div className="px-6 py-2 flex justify-start gap-2 w-full h-full bg-zinc-900/50">
        <MenuButton text="About Me" href="#about" icon={RxAvatar} />
        <MenuButton text="Projects" href="#projects" icon={RxBackpack} />
      </div>
      <div className="grid grid-cols-[0.7fr_0.3fr] w-full h-full overflow-hidden">
        <article className="prose prose-invert prose-md bg-[url('/blur2.png')] bg-cover bg-no-repeat bg-top md:bg-none">
          <div id="about" className="grid grid-cols-[1fr_.5fr] w-screen h-fit">
            <div className="p-8 md:p-24 pb-18 h-full">
              <h2>Who am I?</h2>
              <p className="prose-xl">
                My name is{' '}
                <span className="font-bold">Lucas Vieira da Silva</span>
              </p>
              <p>
                I&apos;m a full-stack software engineer from São Paulo, Brazil. My
                technology stack consists of basically{' '}
                <span className="font-semibold">Java</span>,{' '}
                <span className="font-semibold">Angular</span> and{' '}
                <span className="font-semibold">React</span>.
              </p>
              <div className="flex items-center justify-start gap-3 w-full h-fit mt-2">
                <SocialButton
                  href="https://www.linkedin.com/in/lucasvieirasilva"
                  icon={RxLinkedinLogo}
                />
                <SocialButton
                  href="https://www.github.com/lucasvieiras"
                  icon={RxGithubLogo}
                />
                <SocialButton
                  href="https://www.instagram.com/lu_casvieira"
                  icon={RxInstagramLogo}
                />
                <SocialButton
                  href="mailto:lucasvieirasilva.lpta@gmail.com"
                  icon={RiMailFill}
                />
              </div>
            </div>
            <div className="relative inline-block">
              <Image
                priority
                src={shape}
                alt="non-newtonian-fluid-like shape"
                className="w-full h-full hidden md:block max-w-full m-0"
              />
              <Image
                priority
                src={lucas}
                alt="A picture of Lucas in 2023."
                className="w-fit h-full aspect-square object-contain absolute bottom-0 left-0 m-0 -scale-x-100"
              />
            </div>
          </div>
          <div
            id="projects"
            className="w-screen h-fit bg-zinc-900 py-1 px-8 md:px-24 lg:px-24 pb-20"
          >
            <div className="w-full h-fit flex items-center justify-between">
              <h2>Projects</h2>
              <Link
                href="https://github.com/LucasVieiraS?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit h-fit"
              >
                <Button className="my-auto border border-black/40 bg-zinc-800 mt-12">
                  See All
                </Button>
              </Link>
            </div>
            <p>A few projects I&apos;ve developed over time</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
              <ProjectCard
                link="https://github.com/LucasVieiraS/InTune-Tuner"
                live="https://in-tune-tuner.vercel.app/"
                name="InTune"
                imagePath="https://github.com/LucasVieiraS/InTune-Tuner/raw/main/assets/images/preview1.png"
                gradient="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500"
              />
              <ProjectCard
                link="https://github.com/LucasVieiraS/Tabs.io"
                name="Tabs.io"
                imagePath="https://github.com/LucasVieiraS/Tabs.io/blob/main/assets/TabsSketch.png?raw=true"
                gradient="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900"
              />
              <ProjectCard
                link="https://github.com/LucasVieiraS/NLW-eSports"
                name="NLW eSports"
                imagePath="https://github.com/LucasVieiraS/NLW-eSports/raw/main/assets/mockup-preview.png?raw=true"
                gradient="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
              />
            </div>
          </div>
        </article>
      </div>
      <Footer />

    </main>
  );
}
