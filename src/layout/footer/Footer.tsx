import Link from 'next/link';
import { BiSolidContact } from 'react-icons/bi';

const Footer = () => {
	return (
		<footer className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between lg:gap-8 mt-20 mb-12 lg:mt-32 container">
			<div>
				<h2 className="text-[20px] lg:text-[42px] font-fair ">NỘI THẤT THUẬN HƯNG</h2>
				<p className="flex items-center gap-1 lg:gap-2 font-medium text-[14px] lg:text-[16px]">
					<BiSolidContact />
					Contact: 082-7509-503
				</p>
			</div>
			<div className="flex items-center gap-12">
				<p className="text-[14px] lg:text-[16px]">Ready to get started?</p>
				<Link
					href="/"
					className="px-4 text-sm py-2 lg:px-6 lg:py-3 rounded-10px border border-[3px]-[#000000] rounded-md"
				>
					Let’s Talk
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
