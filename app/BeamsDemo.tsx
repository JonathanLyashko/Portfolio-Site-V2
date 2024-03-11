"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl z-20 mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Let&apos;s connect.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md font-semibold text-center relative z-10">
          I love collaborating on projects! If you have an idea for something you&apos;d like to build together, reach out. If you want to talk about some of my past work, reach out. If you want to talk to me about an opportunity you think is important, <span className="italic">reach out.</span>
        </p>
        <br />
        <p className="text-neutral-500 italic max-w-lg mx-auto my-2 text-md font-bold text-center relative z-10">
          Let&apos;s build something the world needs.
        </p>
      </div>

        <div className="flex gap-8 justify-around">
            <div className="w-100 h-100 z-20 border-slate-400 border-2 rounded-full overflow-hidden">
                <Image src='/redHeadshot.jpeg' width={100} height={100} alt="profile picture" />
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="relative z-10 text-lg  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Jonathan Lyashko
                </p>
                <p className="relative z-10 text-lg  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
                    University of Waterloo
                </p>
                <p className="relative z-10 text-lg  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
                    jlyashko@uwaterloo.ca
                </p>
            </div>
        </div>

        <div className="flex gap-6 items-center my-8 z-20">   
            <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
                src="https://www.linkedin.com/in/jonathan-lyashko"
            >
                <IconBrandLinkedin size='30' />
            </Button>
            
            <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
                src="https://www.github.com/JonathanLyashko"
            >
                <IconBrandGithub size='30' />
            </Button>
        </div> 


      <BackgroundBeams />
    </div>
  );
}
