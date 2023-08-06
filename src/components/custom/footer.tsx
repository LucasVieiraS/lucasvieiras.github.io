import { RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import SocialButton from "./social-button";
import { RiMailFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="w-full h-fit min-h-[5vh] bg-zinc-800 text-white px-8 md:px-24 py-5 grid md:grid-cols-2 items-center">
            <div className="w-full md:w-1/2 h-full text-center md:text-start flex flex-start items-center">
                <p>Made with 💚 by <span className="font-semibold">Lucas Vieira</span></p>
            </div>
            <div className="w-full h-full flex items-center leading-none justify-center md:justify-start gap-3 mt-2">
                <SocialButton
                    href="https://www.linkedin.com/in/lucasvieirasilva"
                    icon={RxLinkedinLogo}
                    width={6}
                />
                <SocialButton
                    href="https://www.github.com/lucasvieiras"
                    icon={RxGithubLogo}
                    width={6}
                />
                <SocialButton
                    href="https://www.instagram.com/lu_casvieira"
                    icon={RxInstagramLogo}
                    width={6}
                />
                <SocialButton
                  href="mailto:lucasvieirasilva.lpta@gmail.com"
                  icon={RiMailFill}
                />
            </div>
        </footer>
    )
}
