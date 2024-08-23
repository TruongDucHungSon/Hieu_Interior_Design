import React from "react";

type TitleSectionProps = {
  children: React.ReactNode;
};
const TitleSection = ({ children }: TitleSectionProps) => {
  return <h4 className="text-4xl lg:text-6xl font-fair ">{children}</h4>;
};

export default TitleSection;
