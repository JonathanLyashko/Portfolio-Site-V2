'use client'
import React from 'react'
import { redirect } from 'next/navigation';
import projects from './project-list.js';
import { CustomButton } from '@/components/ui/CustomMovingBackground';
import { cn } from "@/utils/cn";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const ProjectPage = ({ params }: { params: { id: string }}) => {

    var count = 0;
    var index = 0;
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].projectId == params.id) {
            index = i;
            //console.log(projects[index].projectTitle)
            count++;
        }
    };

    if (count != 0) {
        return (
            
            <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col h-fill sm:justify-center gap-4 px-4 overflow-auto"
            >

            <div className='bg-black bg-opacity-50 flex flex-col items-center rounded-3xl p-10 z-20'>
                <h1 className={cn("md:text-4xl text-xl text-center text-bold text-white relative z-20")}>
                    {projects[index].projectTitle}
                </h1>
                <h2 className="text-center mt-2 text-xl text-white relative z-20">
                    Jonathan Lyashko
                </h2>

                <div className='flex flex-col-reverse items-center justify-around mt-4'>
                    <div className='my-8 flex gap-4'>
                        <CustomButton src={projects[index].linkSrc} className='flex gap-2'>
                            Preview
                        </CustomButton>
                        <CustomButton target='_self' src="/#projects" className='bg-black border-2'>
                            Home
                        </CustomButton>
                    </div>
                    <div className="flex flex-1 w-60 overflow-hidden  rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                        <Image src={projects[index].imgSrc} alt="project image" width={1050} height={500} />
                    </div>

                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white'>
                    <div className='w-60 text-center sm:text-start'>
                        {projects[index].description}
                    </div>
                    <div className='w-60 flex flex-col items-center gap-2'>
                        {projects[index].tools.map((tool) => {
                            return <div key={tool} className='font-bold bg-black border-slate-400 border-2 rounded-lg text-center p-1'>{tool}</div>
                        })}
                    </div>
                </div>
                
                <hr className="mx-auto h-px my-12  border-0 bg-slate-400 w-8/12" />
                
                <div className='flex w-full flex-col items-center justify-center'>
                    <h2 className="text-center font-bold text-xl text-white relative z-20">
                        Features
                    </h2>
                    <div className='w-full flex flex-wrap gap-2 text-white items-center justify-center mt-4'>
                        {projects[index].features.map((feature) => {
                            return <div key={feature} className='font-bold bg-black border-slate-400 border-2 rounded-lg text-center p-1'>{feature}</div>
                        })}
                    </div>

                </div>
                

            </div>
            </motion.div>
          </AuroraBackground>
        )
    }
    redirect('/');
};

export default ProjectPage