import { MdKeyboardArrowRight } from 'react-icons/md';
import BannerBlogImage from '../../../assets/images/blogBanner.jpg';
import CustomImage from '../../../components/customImage/CustomImage';
const SectionBanner = () => {
	return (
		<section>
			<div className="relative h-[200px] lg:h-[400px]">
				<CustomImage
					src={BannerBlogImage}
					width={1200}
					alt="Banner"
				/>
				<div className="abs-center text-center font-medium">
					<h3 className="text-3xl lg:text-5xl">Blog</h3>
					<p className="text-sm lg:text-base font-medium mt-5 flex-center-ver gap-2">
						Home <MdKeyboardArrowRight size={24} /> <span className="font-normal">Blog</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionBanner;
