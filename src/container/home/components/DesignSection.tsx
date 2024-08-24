"use client";

import CustomImage from "@/components/customImage/CustomImage";
import { DATA_DESIGNER } from "@/utils/constants";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const DesignSection = () => {
  return (
    <section className="my-20 lg:my-32 container">
      <div className="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:justify-between">
        <h4 className="font-fair text-xl lg:text-3xl">#Design</h4>
        <Link href={"https://www.facebook.com/KofWoTH/"}>
          <div className="flex items-center gap-1 text-[14px] uppercase font-medium">
            <FaFacebookSquare size={16} />
            Follow me on Facebook
          </div>
        </Link>
      </div>
      <div className="mt-10 lg:20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 cursor-pointer">
        {DATA_DESIGNER.map((item) => (
          <div key={item.id}>
            <CustomImage src={item.image} alt={`design-${item.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
