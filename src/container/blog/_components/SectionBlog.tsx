'use client';

import CustomImage from '@/components/customImage/CustomImage';
import { Button } from '@/components/ui/button';
import { DATA_BLOG, DATA_RECENT_POSTS } from '@/utils/constants';
import { map } from 'lodash';
import Link from 'next/link';
import { CiCalendarDate } from 'react-icons/ci';
const SectionBlog = () => {
	return (
		<section className="container grid grid-cols-1 lg:grid-cols-[2.5fr,1fr] gap-8 py-10 lg:py-20">
			<div>
				<h4 className="text-xl lg:text-2xl font-bold">Blog</h4>
				{/* list blog */}
				{map(DATA_BLOG, (item) => (
					<div
						className="border-b pb-6 mt-12 rounded-xl"
						key={item.id}
					>
						<div className="h-[300px] lg:h-[500px]">
							<CustomImage
								src={item.image}
								alt="Blog"
							/>
						</div>
						<div className="flex-center-ver gap-2 mt-3">
							<CiCalendarDate size={24} />
							<p className="text-sm lg:text-base text-[#797979] "> {item.date}</p>
						</div>
						<div className="mt-4">
							<Link
								href={'/'}
								className="text-2xl lg:text-3xl font-medium "
							>
								{item.title}
							</Link>
							<p className="text-sm lg:text-base text-[#797979] mt-2 lg:mt-4">{item.description}</p>
							<Button className="mt-4">Read More</Button>
						</div>
					</div>
				))}
				{/* list recent posts */}
			</div>
			<div className="text-xl lg:text-2xl font-medium ">
				Recent Posts
				<div className="mt-10 flex-col-ver gap-4 lg:gap-8">
					{/* recent post */}
					{map(DATA_RECENT_POSTS, (item) => (
						<div
							className="flex-center-ver gap-3"
							key={item.id}
						>
							<div className="w-[40%] lg:h-24 lg:w-24 rounded-xl">
								<CustomImage
									src={item.image}
									alt="recent blog"
								/>
							</div>
							<div className="w-full lg:w-[200px]">
								<Link
									href="#"
									className="text-sm"
								>
									{item.title}
								</Link>
								<p className="text-[12px] text-[#797979]">{item.date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionBlog;
