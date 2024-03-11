import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from "next/link";
import slogan from "../public/Slogan.svg"

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-black w-full">
      <MacbookScroll
        title={
          <span>
            I&apos;m a Computer Engineering student <br /> at the University of Waterloo
          </span>
        }
        src='/WorldBlue.png'
        showGradient={false}
      />
    </div>
  );
}
