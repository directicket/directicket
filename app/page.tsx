import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OtherBenefits from "@/components/shared/OtherBenefits";
import FeatureBento from "@/components/shared/FeatureBento";
import { TriangleAlert } from "lucide-react";

export default function Home() {
  return (
    <>
    <div className="wrapper flex flex-col">
      <HeroSection />
      <br/>

      {/* TAG */}
      <br />
      {/* <div className="pb-4 w-full flex items-center justify-center">
        <div className="w-fit rounded-lg bg-green-200 items-center justify-center">
          <h4 className="p-medium-14 py-2 px-2 text-green-800 w-full text-left justify-center">
            Feature Spotlight
          </h4>
        </div>
      </div> */}

      {/* TAG */}

      <FeatureBento />
      <br/>
      <OtherBenefits />
    </div>

    <div className="wrapper flex flex-col items-center justify-center scroll-container
    fixed bottom-0 h-fit mx-auto right-0 left-0 w-fit
    px-4 p-3 bg-lime-400 bg-blur">
        <div className="scrolling-text flex flex-row">
          <TriangleAlert className='text-black flex-row' height={20} width={20}/>
          <p className="p-medium-14 pl-1 flex-row text-black">
              HURRY! Early access is limited and closes <span className="underline">20/12</span>.
          </p>
        </div>
    </div>
    </>
  );
}