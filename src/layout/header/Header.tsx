// components/Header.tsx
'use client';

import { MENU_LIST } from '@/utils/constants';
import { map } from 'lodash';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { LuMenu } from 'react-icons/lu';
import { SiZalo } from 'react-icons/si';
import { useOutsideClick } from './action';
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
			document.body.style.overflow = 'hidden'; // Prevent scrolling
		} else {
			document.body.style.overflow = ''; // Enable scrolling
		}

		// Clean up by resetting the overflow when component unmounts or state changes
		return () => {
			document.body.style.overflow = '';
		};
	}, [showMenu]);

	return (
		<header className="relative">
			<h2 className="text-[10px] lg:text-[12px] uppercase text-center w-full py-4 bg-black/90 text-white">
				Make room for better living
			</h2>
			<div className="container mx-auto flex items-center justify-between mt-4 lg:my-8 px-4">
				<div className="lg:flex hidden items-center gap-2 lg:w-[110px]">
					<Link href="https://zalo.me/0345197586">
						<SiZalo size={24} />
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
					className="font-fair text-[#b88e2f] text-base lg:text-xl font-semibold text-center w-fit"
				>
					LOGO THUẬN HƯNG
				</Link>
				{/* overlay */}
				<div
					className={`fixed inset-0 bg-black transition-opacity duration-300 ${
						showMenu ? 'opacity-20 visible' : 'opacity-0 invisible'
					}`}
				/>
				{/* navigation */}
				<nav className="flex items-center justify-end w-[60px] lg:w-[110px]">
					<LuMenu
						size={32}
						onClick={toggleMenu}
					/>
					<div
						ref={menuRef} // Attach ref to the menu div
						className={`${
							showMenu ? 'visible opacity-100 left-0' : 'invisible opacity-0 -left-full'
						} fixed top-0 bottom-0 w-[70%] lg:w-[600px] bg-white z-50 transition-all duration-500 ease-in-out p-6 lg:p-8`}
					>
						<ul className="flex flex-col items-start justify-start h-full gap-8">
							<div className="flex items-center justify-between w-full">
								<Link
									href="/"
									className="text-[#b88e2f] font-fair text-lg font-bold"
								>
									LOGO THUẬN HƯNG
								</Link>
								<IoMdClose
									size={26}
									onClick={toggleMenu}
								/>
							</div>
							{/* list nav */}
							{map(MENU_LIST, (item) => (
								<li
									key={item.name}
									className=""
								>
									<Link
										href={item.path}
										className=" text-sm lg:text-lg text-[#000] font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#000] after:transition-all after:duration-300 hover:after:w-full after:ease-in-out"
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
