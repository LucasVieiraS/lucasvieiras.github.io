import "@/styles/globals.css";
import "@/styles/slider.scss";

import type { AppProps } from "next/app";

import { JetBrains_Mono } from "next/font/google";

import { Root } from "@/components/Root";
import { RxBackpack, RxPerson, RxRocket, RxStarFilled } from "react-icons/rx";
import Head from "next/head";
import { useRouter } from "next/router";
import { enUS, ptBR } from "@/util/i18n";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useState } from "react";

const jetbainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {

  const [tabsOpen, setTabsOpen] = useState(false);

  const router = useRouter();
  const { locale } = router;

  const translation = locale == "pt-BR" ? ptBR : enUS;

  return (
    <>
      <Head>
        <title>Lucas Vieira da Silva</title>
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --font-sans: ${jetbainsMono.style.fontFamily};
        }`,
        }}
      />
      <div className="w-[100%] mx-auto min-h-screen flex items-center justify-center p-4 lg:p-8 text-zinc-50">
        <ScrollToTop />
        <Root.Frame>
          <Root.Sidebar>
            <Root.UserFrame onClick={
              () => {
                setTabsOpen(!tabsOpen)
              }
            } />
            <Root.SidebarElement
              data-active={router.pathname == "/about"}
              data-tabsopen={tabsOpen}
              route="about"
              icon={RxPerson}
              text={translation.aboutMe}
            />
            <Root.SidebarElement
              data-active={router.pathname == "/projects"}
              data-tabsopen={tabsOpen}
              route="projects"
              icon={RxStarFilled}
              text={translation.projects}
            />
            <Root.SidebarElement
              data-active={router.pathname == "/tech"}
              data-tabsopen={tabsOpen}
              route="tech"
              icon={RxRocket}
              text={translation.techStack}
            />
            <Root.SidebarElement
              data-active={router.pathname == "/contact"}
              data-tabsopen={tabsOpen}
              route="contact"
              icon={RxBackpack}
              text={translation.contact}
            />
          </Root.Sidebar>
          <Root.Content>
            <Root.Navbar>
              <Component {...pageProps} />
            </Root.Navbar>
          </Root.Content>
        </Root.Frame>
      </div>
    </>
  );
}
