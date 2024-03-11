import Image from "next/image";
import { MacbookScrollDemo } from "./MacbookDemo";
import { Landing } from "./Landing";
import { EvervaultCardDemo } from "./EvervaultCardDemo";
import { BentoGridDemo } from "./BentoGridDemo";
import Skills from "./Skills";
import { BackgroundBeamsDemo } from "./BeamsDemo";

export default function Home() {
  return (
    <main className="h-screen bg-neutral-100" id="main-body">

      <Landing />
      <MacbookScrollDemo />
      <EvervaultCardDemo />
      <BentoGridDemo />
      <hr className="mx-auto h-px border-0 bg-gray-700 w-6/12" />
      <Skills />
      <BackgroundBeamsDemo />
    </main>
  );
}
