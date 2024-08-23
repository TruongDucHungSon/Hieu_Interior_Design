import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { SiZalo } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
const Header = () => {
  return (
    <header>
      <h2 className="text-[10px] lg:text-[12px] uppercase text-center w-full py-4 bg-[#000] text-white">
        Make room for better living
      </h2>
      <div className="container flex items-center justify-between mt-4 lg:mt-8">
        <div className="flex items-center justify-start gap-1 lg:gap-2 lg:w-[110px]">
          <Link href="/">
            <AiFillInstagram size={24} />
          </Link>
          <Link href="https://www.facebook.com/KofWoTH">
            <TiSocialFacebook size={24} />
          </Link>
          <Link href="/">
            <SiZalo size={24} />
          </Link>
        </div>
        <h1 className="font-fair text-xl text-center font-semibold w-[200px] ">
          TRAN HIEU
        </h1>
        <nav className="flex items-center justify-end w-[60px] lg:w-[110px] ">
          <LuMenu size={32} />
          <ul className="items-center gap-8 hidden">
            <li>
              <Link href="/">Home</Link>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
