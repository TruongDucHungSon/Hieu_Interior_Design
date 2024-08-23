"use client";

import CustomImage from "@/components/customImage/CustomImage";
import { DATA_PROJECT } from "@/utils/constants";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
const ProjectSection = () => {
  return (
    <section className="py-10 lg:py-20 lg:pt-32 bg-[#000]">
      <div className="container">
        <h4 className="text-[14px] text-[#797979] lg:text-[16px] flex justify-end w-full mb-6 lg:mb-12">
          We design your <span className="text-white pl-1">home.</span>
        </h4>
        <div>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {DATA_PROJECT.map((item) => (
                <CarouselItem key={item.id} className="relative">
                  <div className="w-full h-[500px] lg:h-[695px] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#000] before:opacity-[0.4] z-[-1]">
                    <CustomImage src={item.image} alt="Product" />
                  </div>
                  <div className="text-base absolute left-14 bottom-[30px] w-full">
                    <p className="text-sm lg:text-base text-[#797979] tracking-widest uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm text-[42px] lg:text-[74px] leading-[80px]  text-[#fff] font-fair">
                      {item.price}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
