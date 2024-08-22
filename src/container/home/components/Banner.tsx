import Image from "next/image";
import Link from "next/link";
import BannerImage from "../../../assets/images/Banner.jpg";
const Banner = () => {
  return (
    <section className="relative">
      <h4 className="absolute text-md font-medium left-[-187px] top-[290px] rotate-[-90deg] translate-x-10 hidden lg:block">
        Book an orientation with
        <span className="font-bold pl-1">Tran Hieu Designer</span>
      </h4>
      <div className="flex items-start lg:items-center relative flex-col lg:flex-row gap-8 lg:justify-between mt-10 lg:mt-20">
        <div className="w-full lg:w-[40%] lg:pl-36">
          <h4 className="text-3xl lg:text-5xl font-fair  w-250px">We Love</h4>
          <p className="text-3xl lg:text-5xl font-fair ">Minimalism.</p>
          <p className="text-[#797979] text-sm font-medium mt-2 mb-5 lg:mt-4 lg:mb-8 uppercase tracking-wider">
            INTERIOR DESIGN
          </p>

          <Link
            href="/"
            className="px-6 py-3 rounded-10px border border-3px-[#000000] "
          >
            View Project
          </Link>
        </div>
        <div className="lg:w-[45%] w-full">
          <Image width={500} height={260} alt="Banner" src={BannerImage} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
