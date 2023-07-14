import Image from "next/image";
import React, { ComponentProps, ReactNode } from "react";
import Slide from "./Slide";

export default function Slider() {

  const slides = [
    {
      src: "./logos/reactjs.png",
      key: 1,
      alt: "ReactJS",
    },
    {
      src: "./logos/nextjs.png",
      key: 2,
      alt: "NextJS",
    },
    {
      src: "./logos/vitejs.png",
      key: 3,
      alt: "ViteJS",
    },
    {
      src: "./logos/angular.png",
      key: 4,
      alt: "Angular",
    },
    {
      src: "./logos/ionic.png",
      key: 5,
      alt: "Ionic",
    },
    {
      src: "./logos/tailwind.png",
      key: 6,
      alt: "Tailwind",
    },
    {
      src: "./logos/bootstrap5.png",
      key: 7,
      alt: "Bootstrap",
    },
    {
      src: "./logos/typescript.png",
      key: 8,
      alt: "Typescript",
    },
    {
      src: "./logos/java.png",
      key: 9,
      alt: "Java",
    },
    {
      src: "./logos/spring.png",
      key: 10,
      alt: "Spring",
    },
    {
      src: "./logos/prisma.png",
      key: 11,
      alt: "Prisma",
    },
    {
      src: "./logos/mysql.png",
      key: 12,
      alt: "MySQL",
    },
    {
      src: "./logos/figma.png",
      key: 13,
      alt: "Figma",
    },
    {
      src: "./logos/ai.png",
      key: 14,
      alt: "Adobe Illustrator",
    },
    {
      src: "./logos/ps.png",
      key: 15,
      alt: "Adobe Photoshop",
    },
    {
      src: "./logos/python.png",
      key: 16,
      alt: "Python",
    },
    {
      src: "./logos/lua.png",
      key: 17,
      alt: "Lua",
    },
    {
      src: "./logos/git.png",
      key: 18,
      alt: "Git",
    },
    {
      src: "./logos/github.png",
      key: 19,
      alt: "Github",
    },
  ];

  function returnDupedTechStack() {
    let increment = 0
    slides.map((slide) => {
      increment += 1;
      slides.push(
        {
          src: slide.src,
          key: 19 + increment,
          alt: slide.alt
        }
      )
    })
    return slides.map((slide) => (
      <Slide key={slide.key}>
        <Image src={slide.src} key={slide.key} height={150} width={150} alt={slide.alt} />
      </Slide>
    ));
  }

  return (
    <>
      <div className="slider">
        <div className="slide-track">{returnDupedTechStack()}</div>
      </div>
    </>
  );
}
