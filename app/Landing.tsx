"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { Spotlight } from "../components/ui/Spotlight";
import { Button } from "../components/ui/moving-border";
import { Camera } from 'lucide-react';
import { ArrowDownFromLine } from "lucide-react";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export function Landing() {
  return (
    <div className="h-screen w-full bg-black bg-grid-white/[0.05] relative flex flex-col items-center justify-center">

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight
            className="-top-40 left-0 md:left-20 md:-top-20 lg:left-60 lg:-top-40"
            fill="white"
        />

        <div className="h-[40rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
            
            <div className="flex flex-col items-start">
                <div className="text-2xl sm:text-5xl ml-8 sm:ml-16 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 -mb-16">
                    Hey👋 I&apos;m
                </div>
                <h1 className="text-4xl sm:text-7xl font-bold italic relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    ./Jonathan
                </h1>

            </div>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-900 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-700 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>

        
        <div className="flex gap-6 items-center mb-8">   
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

            <ArrowDownFromLine color="white" size={40} />
            
        

    </div>
  );
}
