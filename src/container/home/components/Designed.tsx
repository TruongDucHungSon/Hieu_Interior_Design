"use client";

import TitleSection from "@/components/tittle/TitleSection";
import DesignImage1 from "../../../assets/images/ds1.jpg";
import DesignImage2 from "../../../assets/images/ds2.jpg";
import DesignImage3 from "../../../assets/images/ds3.jpg";
import DesignImage4 from "../../../assets/images/ds4.jpg";
import CustomImage from "../../../components/customImage/CustomImage";
const DesignedSection = () => {
  return (
    <section className="my-10 lg:my-20 lg:mt-32 container">
      <div className="flex items-start flex-col gap-6 lg:flex-row lg:items-center justify-between mb-10 lg:mb-20">
        <TitleSection>Designed for you</TitleSection>
        <p className="w-full lg:w-[60%] text-[#797979] text-[14px] tracking-tight">
          We’ve designed and curated pieces that are a cut above your average
          home goods, because when you level up your everyday objects, you
          elevate your daily rituals. Let the magic happen.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] grid-rows-1 grid-flow-row gap-x-8 gap-y-8">
          <div className="w-full h-[300px] lg:[446px] lg:h-[600px]">
            <CustomImage src={DesignImage1.src} alt="Designed" />
          </div>
          <div className="w-full h-[300px] lg:[446px] lg:h-[600px]">
            <CustomImage src={DesignImage2.src} alt="Designed" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] grid-rows-1  grid-flow-row gap-8">
          <div className="w-full h-[300px]  lg:[446px] lg:h-[600px]">
            <CustomImage src={DesignImage3.src} alt="Designed" />
          </div>
          <div className="w-full h-[300px] lg:[446px] lg:h-[600px]">
            <CustomImage src={DesignImage4.src} alt="Designed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedSection;
