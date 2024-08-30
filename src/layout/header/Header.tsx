// components/Header.tsx
"use client";

import { MENU_LIST } from "@/utils/constants";
import { map } from "lodash";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { useOutsideClick } from "./action";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false); // default to false
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Use the custom hook to close the menu when clicking outside
  useOutsideClick(menuRef, () => {
    if (showMenu) setShowMenu(false);
  });

  // Side effect to disable/enable scroll when the menu is shown/hidden
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Clean up by resetting the overflow when component unmounts or state changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <header className="relative">
      <h2 className="text-[10px] lg:text-[12px] uppercase text-center w-full py-4 bg-black text-white">
        Make room for better living
      </h2>
      <div className="container mx-auto flex items-center justify-between mt-4 lg:mt-8 px-4">
        <div className="flex items-center gap-2 lg:w-[110px]">
          <Link href="/">
            <AiFillInstagram size={24} />
          </Link>
          <Link href="https://www.facebook.com/KofWoTH">
            <FaFacebookSquare size={24} />
          </Link>
          <Link href="/">
            <FaLinkedin size={24} />
          </Link>
        </div>
        <Link
          href="/"
          className="font-fair text-[#b88e2f] text-xl font-semibold text-center w-[200px]"
        >
          TRAN HIEU
        </Link>
        {/* overlay */}
        <div
          className={`fixed inset-0 bg-black opacity-20 ${
            showMenu ? "" : "hidden"
          }`}
        ></div>
        {/* navigation */}
        <nav className="flex items-center justify-end w-[60px] lg:w-[110px]">
          <LuMenu size={32} onClick={toggleMenu} />
          <div
            ref={menuRef} // Attach ref to the menu div
            className={`${
              showMenu ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 w-[70%] lg:w-[600px] bg-white z-50 transition-all duration-500 ease-in-out p-8`}
          >
            <ul className="flex flex-col items-start justify-start h-full gap-8">
              <div className="flex items-center justify-between w-full">
                <Link href="/" className="text-[#b88e2f] text-xl font-bold">
                  Tran Hieu Interior Designer
                </Link>
                <IoMdClose size={26} onClick={toggleMenu} />
              </div>
              {/* list nav */}
              {map(MENU_LIST, (item) => (
                <li key={item.name} className="">
                  <Link
                    href={item.path}
                    className=" text-base lg:text-lg text-[#000] font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#000] after:transition-all after:duration-300 hover:after:w-full after:ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* footer nav */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
