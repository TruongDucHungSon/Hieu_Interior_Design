import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { SiZalo } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
const Header = () => {
  return (
    <header>
      <h2 className="text-[12px] uppercase text-center w-full py-5 bg-dark text-white">
        Make room for better living
      </h2>
      <div className="container flex items-center justify-between mt-4 lg:mt-8">
        <div className="flex items-center justify-center gap-2 w-[120px]">
          <AiFillInstagram size={22} />
          <TiSocialFacebook size={22} />
          <SiZalo size={22} />
        </div>
        <h1 className="font-fair text-lg text-center font-semibold w-[140px]">
          TRAN HIEU
        </h1>
        <nav className=" flex items-center justify-center w-[120px]">
          <LuMenu size={24} />
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
