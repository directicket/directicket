import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OtherBenefits from "@/components/shared/OtherBenefits";
import FeatureBento from "@/components/shared/FeatureBento";

export default function Home() {
  return (
    <>
    <div className="wrapper flex flex-col">
      <HeroSection />
      <br/>

      {/* TAG */}
      <br />
      <div className="pb-4 w-full flex items-center justify-center">
        <div className="w-fit rounded-lg bg-green-200 items-center justify-center">
          <h4 className="p-medium-14 py-2 px-2 text-green-800 w-full text-left justify-center">
            Feature Spotlight
          </h4>
        </div>
      </div>

      {/* TAG */}

      <FeatureBento />
      <br/>
      <OtherBenefits />
    </div>
    </>
  );
}