'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Banner from './_components/SectionBanner';
import CarouselProduct from './_components/SectionCarouselProduct';
import DesignSection from './_components/SectionDesign';
import DesignedSection from './_components/SectionDesigned';
import ProjectSection from './_components/SectionProject';

const fadeInVariant = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (inView) setHasAnimated(true);
	}, [inView]);

	return (
		<motion.div
			ref={ref}
			variants={fadeInVariant}
			initial="initial"
			animate={hasAnimated ? 'animate' : 'initial'}
		>
			{children}
		</motion.div>
	);
};

const HomePage = () => {
	return (
		<main>
			<SectionWrapper>
				<Banner />
			</SectionWrapper>
			<SectionWrapper>
				<CarouselProduct />
			</SectionWrapper>
			<SectionWrapper>
				<DesignedSection />
			</SectionWrapper>
			<SectionWrapper>
				<ProjectSection />
			</SectionWrapper>
			<SectionWrapper>
				<DesignSection />
			</SectionWrapper>
		</main>
	);
};

export default HomePage;
