"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

import Image from "next/image";
import { DATA_PRODUCT } from "../../../utils/constants";

const CarouselProduct = () => {
  return (
    <section className=" flex items-start flex-col-reverse gap-6 lg:flex-row lg:items-center justify-between mt-20 container">
      <div className="lg:w-[29%] w-full">
        <h4 className="text-3xl font-fair ">New Arrivals</h4>
        <p className="text-[#797979] text-[14px] tracking-tight my-5">
          We’ve designed and curated pieces that are a cut above your average
          home goods, because when you level up your everyday objects, you
          elevate your daily rituals.
        </p>
        <Link
          href="/"
          className="uppercase text-sm text-[#000]  border-b-[2px] border-[#000]"
        >
          View all
        </Link>
      </div>
      <Carousel className="lg:w-[65%] w-full">
        <CarouselContent>
          {DATA_PRODUCT.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2 lg:basis-1/3">
              <Image src={item.image} alt="Product" width={300} height={300} />
              <div className="flex items-center justify-between mt-3">
                <Link
                  href="/"
                  className="font-medium text-sm lg:text-base text-[#000]"
                >
                  {item.name}
                </Link>
                <p className="text-sm lg:text-base">{item.price}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
};

export default CarouselProduct;
