import {
  RxBell,
  RxEyeNone,
  RxGithubLogo,
  RxLinkedinLogo,
  RxPerson,
} from "react-icons/rx";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import { Button } from "../ui/button";

export function Socials() {
  return (
    <ul>
      <li className="p-0 m-0">
        <Button>
          <p className="text-sm font-medium leading-none gap-2 flex">
            <RxGithubLogo className="w-4 h-4" />
            Github
          </p>
        </Button>
      </li>
      <li className="p-0 m-0">
        <Button className="space-y-1">
          <p className="text-sm font-medium leading-none gap-2 flex">
            <RxLinkedinLogo className="w-4 h-4" />
            Linkedin
          </p>
        </Button>
      </li>
      <li className="p-0 m-0">
        <Button className="space-y-1">
          <p className="text-sm font-medium leading-none gap-2 flex">
            <MailIcon className="w-4 h-4" />
            E-Mail
          </p>
        </Button>
      </li>
    </ul>
  );
}
