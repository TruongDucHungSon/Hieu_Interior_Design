import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
};
const CustomImage = ({
  src,
  alt,
  width,
  height,
  className,
}: CustomImageProps) => {
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
