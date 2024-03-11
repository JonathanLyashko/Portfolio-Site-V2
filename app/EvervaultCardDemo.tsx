import React from "react";
import { EvervaultCard, Icon } from "../components/ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    
    <div className="flex flex-col bg-neutral-100 gap-4 mb-48">

        <div className="mt-32 mb-16">
            <h2 className="text-black text-4xl font-bold text-center">
                I focus on three key areas of development
            </h2>

        </div>
        

        <div className="flex justify-around flex-wrap gap-8">
            <div className="border border-black/[0.2] flex flex-col items-start max-w-sm w-80 mx-auto p-4 relative h-[25rem]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

                <EvervaultCard text="Fullstack Development" />

                <h2 className=" text-black mt-4 text-sm font-light">
                    Building applications accessible by anyone, anywhere.
                </h2>
                <p className="text-sm border font-light border-black/[0.2] rounded-full mt-4 text-black  px-2 py-0.5">
                    1
                </p>
            </div>

            <div className="border border-black/[0.2] flex flex-col items-start max-w-sm w-80 mx-auto p-4 relative h-[25rem]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

                <EvervaultCard text="Machine Learning" />

                <h2 className=" text-black mt-4 text-sm font-light">
                    Training models for classification, generation, and detection.
                </h2>
                <p className="text-sm border font-light border-black/[0.2] rounded-full mt-4 text-black  px-2 py-0.5">
                    2
                </p>
            </div>

            <div className="border border-black/[0.2] flex flex-col items-start max-w-sm w-80 mx-auto p-4 relative h-[25rem]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

                <EvervaultCard text="Systems Programming" />

                <h2 className=" text-black mt-4 text-sm font-light">
                    Leveraging data structures and algorithms for real world applications.
                </h2>
                <p className="text-sm border font-light border-black/[0.2] rounded-full mt-4 text-black  px-2 py-0.5">
                    3
                </p>
            </div>

        </div>

    </div>


  );
}
