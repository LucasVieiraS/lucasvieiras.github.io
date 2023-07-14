
import NonEditor from "@/components/NonEditor";
import { Socials } from "@/components/Socials";
import { ptBR, enUS } from "@/util/i18n";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Contact() {
  
  const router = useRouter()
  const { locale } = router

  const translation = locale == 'pt-BR' ? ptBR : enUS

  return (
    <>
      <Head>
        <title>{ `${translation.contact} - Lucas Vieira da Silva` }</title>
        <meta name='description' content={translation.contactMetaDescription} />
      </Head>
      <NonEditor>
        <h1>Redes Sociais</h1>
        <p>Minhas principais redes sociais profissionais</p>
        <Socials />
        <p>Sinta-se livre para me contatar em qualquer rede social</p>
      </NonEditor>
    </>
  );
}
