"use client";

import Editor from "@/components/Editor";
import NonEditor from "@/components/NonEditor";
import Slider from "@/components/Slider";
import { home } from "@/util/editorConfig/home";

export default function Home() {
  // <Editor editorConfig={home}/>
  return (
    <>
      <Slider />
    </>
  );
}
