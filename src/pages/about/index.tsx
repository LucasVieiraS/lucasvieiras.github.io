import NonEditor from "@/components/NonEditor";
import { ptBR, enUS } from "@/util/i18n";
import Head from "next/head";
import { useRouter } from "next/router";

export default function About() {

  const router = useRouter()
  const { locale } = router

  const translation = locale == 'pt-BR' ? ptBR : enUS

  return (
    <>
      <Head>
        <title>{`${translation.aboutMe} - Lucas Vieira da Silva`}</title>
        <meta name='description' content={translation.aboutMeMetaDescription} />
      </Head>
      <NonEditor>
        <h1>{translation.aboutMePageTitle}</h1>
        <h2>{translation.aboutMeSectionTitle}</h2>
        <p>{translation.aboutMeSectionContent}</p>
        <h2>{translation.techInterestSectionTitle}</h2>
        <p>{translation.techInterestSectionContent}</p>
        <p>{translation.robloxSectionContent}</p>
        <p>{translation.listSectionContent}</p>
        <ul>
          <li>
            <strong>{translation.listItem1Title}</strong> {translation.listItem1Content}
          </li>
          <li>
            <strong>{translation.listItem2Title}</strong> {translation.listItem2Content}
          </li>
          <li>
            <strong>{translation.listItem3Title}</strong> {translation.listItem3Content}
          </li>
        </ul>
        <h2>{translation.hobbiesSectionTitle}</h2>
        <p>{translation.hobbiesSectionContent}</p>
        <p>{translation.conclusionSectionContent}</p>
      </NonEditor>
    </>
  );
}
