import Link from 'next/link';
import BannerImage from '../../../assets/images/Banner.jpg';
import CustomImage from '../../../components/customImage/CustomImage';
const Banner = () => {
	return (
		<section className="relative container">
			<h4 className="absolute text-[#797979] text-md font-medium left-[-187px] top-[242px] rotate-[-90deg] translate-x-10 hidden lg:block">
				Book an orientation with
				<span className="font-bold text-[#000] pl-1">Tran Hieu Designer</span>
			</h4>
			<div className="flex w-full items-start lg:items-start relative flex-col-reverse lg:flex-row gap-8 lg:justify-between my-4 lg:my-20">
				<div className="w-full lg:w-[50%] mt-0 lg:pl-64 lg:mt-20">
					<div className="w-[300px] ">
						<h4 className="text-4xl lg:text-7xl font-fair ">We Love</h4>
						<p className="text-4xl lg:text-7xl font-fair ">Minimalism.</p>
					</div>
					<p className="text-[#797979] text-[12px] font-medium mt-2 mb-5 lg:mt-4 lg:mb-8 uppercase tracking-wider">
						INTERIOR DESIGN
					</p>

					<Link
						href="/"
						className="px-4 text-sm py-2 lg:px-6 lg:py-3 rounded-10px border border-[3px]-[#000000] rounded-md"
					>
						View Project
					</Link>
				</div>
				<div className="lg:w-[45%] w-full h-[360] md:h-[460px] lg:h-fit object-cover z-[-1]">
					<CustomImage
						src={BannerImage}
						alt="Banner"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
