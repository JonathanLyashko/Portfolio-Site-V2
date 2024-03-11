import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconDeviceGamepad2,
  IconScissors,
  IconPill,
  IconChartInfographic,
  IconHomeRibbon,
  IconTools,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function BentoGridDemo() {
  return (

    <div className=" w-full pt-12 bg-neutral-100 bg-dot-black/[0.1]">
      <h2 className="text-black text-4xl font-bold text-center">
        My Projects
      </h2>
      <h3 className="text-black mt-4 mb-12 text-2xl font-bold text-center">
        Have a look at some of the things I&apos;ve built
      </h3>
      <BentoGrid className="max-w-4xl mx-auto pb-24">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            endPoint={item.id}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

    </div>

  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    id: 'SnakeGame',
    title: "Rust Based Snake Game",
    description: "Moder take on a true classic. Blazing fast and memory safe.",
    header: <div className="flex flex-1 w-full h-full overflow-hidden min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                <Image src={'/SnakeGameScreenshot.png'} alt="project image" width={1050} height={500} />
            </div>,
    icon: <IconDeviceGamepad2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 'RockPaperScissors',
    title: "Gesture Controlled Rock Paper Scissors",
    description: "Machine learning used for a little fun. Think the model enojoys playing?",
    header: <div className="flex flex-1 w-full h-full overflow-hidden min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                <Image src={'/RPSScreenshot.png'} alt="project image" width={1050} height={500} />
            </div>,
    icon: <IconScissors className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 'MedicationDispenser',
    title: "Automated Medication Dispenser",
    description: "Built to safegaurd patients with memory loss from unintended dosage.",
    header: <div className="flex flex-1 w-full h-full overflow-hidden min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                <Image src={'/DispenserScreenshot.png'} alt="project image" width={1050} height={500} />
            </div>,
    icon: <IconPill className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 'JobTrk',
    title: "JobTrk",
    description:
      "Track all your job applications in one full stack web app. Ditch the clutter.",
    header: <div className="flex flex-1 w-full h-full overflow-hidden min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                <Image src={'/JobTrkScreenshot.png'} alt="project image" width={1050} height={500} />
            </div>,
    icon: <IconChartInfographic className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: '',
    title: "Portfolio Website",
    description: "Look around!",
    header: <div className="flex flex-1 w-full h-full overflow-hidden min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                <Image src={'/PortfolioScreenshot.png'} alt="project image" width={1050} height={500} />
            </div>,
    icon: <IconHomeRibbon className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: '',
    title: "Coming Soon...",
    description: "Come back soon to find out what I'm working on right now.",
    header: <Skeleton />,
    icon: <IconTools className="h-4 w-4 text-neutral-500" />,
  },
];
