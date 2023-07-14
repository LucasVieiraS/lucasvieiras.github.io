import NonEditor from "@/components/NonEditor";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ptBR, enUS } from "@/util/i18n";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxArrowRight, RxEyeOpen } from "react-icons/rx";

export default function Projects() {
  const router = useRouter();
  const { locale } = router;

  const translation = locale == "pt-BR" ? ptBR : enUS;

  return (
    <>
      <Head>
        <title>{`${translation.projects} - Lucas Vieira da Silva`}</title>
        <meta
          name="description"
          content={translation.projectsMetaDescription}
        />
      </Head>
      <NonEditor>
        <h1>{translation.projectsPageTitle}</h1>
        <p>{translation.projectsPageDescription}</p>
        <p>{translation.projectsSectionTitle}</p>
        <div className="lg:bg-zinc-900 flex flex-row items-center justify-between lg:p-1 h-10 leading-none text-center lg:px-2 lg:pl-3 mb-2">
          <p className="text-sm font-regular my-auto leading-none gap-2 hidden lg:flex">
            {translation.projects} <RxArrowRight className="w-4 h-4" /> README.md
          </p>
          <Link
            href="https://github.com/LucasVieiraS?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
            className="text-zinc-50 group w-full lg:w-fit"
          >
            <Button className="bg-zinc-900 lg:bg-zinc-800 group-hover:bg-violet-600 border border-black/20 h-8 gap-2 w-full lg:w-fit">
              <RxEyeOpen className="w-4 h-4" />
              Ver Tudo
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <ProjectCard
            link="https://github.com/LucasVieiraS/InTune-Tuner"
            live="https://in-tune-tuner.vercel.app/"
            name="InTune"
            imagePath="https://github.com/LucasVieiraS/InTune-Tuner/raw/main/assets/images/preview1.png"
            gradient="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
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
      </NonEditor>
    </>
  );
}
