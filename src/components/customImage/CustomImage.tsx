import Image, { StaticImageData } from 'next/image';

type CustomImageProps = {
	src: StaticImageData;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
};
const CustomImage = ({ src, alt, width, height, className }: CustomImageProps) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={500 || width}
			height={500 || height}
			className="w-full h-full object-cover"
			loading="lazy"
		/>
	);
};

export default CustomImage;
