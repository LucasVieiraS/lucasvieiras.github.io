
import NonEditor from "@/components/NonEditor";
import Slider from "@/components/Slider";
import { ptBR, enUS } from "@/util/i18n";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Tech() {
  
  const router = useRouter()
  const { locale } = router

  const translation = locale == 'pt-BR' ? ptBR : enUS

  return (
    <>
      <Head>
        <title>{ `${translation.techStack} - Lucas Vieira da Silva` }</title>
        <meta name='description' content={translation.techStackMetaDescription} />
      </Head>
      <NonEditor>
      <div>
      <h1>{translation.techStackPageTitle}</h1>
      <p>{translation.techStackPageDescription}</p>
      <div className="ml-2">
        <h4>{translation.backendSectionTitle}</h4>
        <ul>
          <li>Spring</li>
          <li>Java</li>
          <li>PHP</li>
        </ul>
        <h4>{translation.frontendSectionTitle}</h4>
        <ul>
          <li>Angular</li>
          <li>Ionic</li>
          <li>React Native</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>Vite</li>
          <li>Astro</li>
        </ul>
        <h4>{translation.fullstackSectionTitle}</h4>
        <ul>
          <li>Laravel</li>
          <li>Flask</li>
          <li>Django</li>
        </ul>
        <h4>{translation.databaseSectionTitle}</h4>
        <ul>
          <li>SQL</li>
          <li>Prisma</li>
        </ul>
        <h4>{translation.otherSectionTitle}</h4>
        <ul>
          <li>Lua</li>
        </ul>
      </div>
    </div>
      </NonEditor>
      <Slider/>
    </>
  );
}
