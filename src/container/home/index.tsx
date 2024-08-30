import Banner from "./_components/SectionBanner";
import CarouselProduct from "./_components/SectionCarouselProduct";
import DesignSection from "./_components/SectionDesign";
import DesignedSection from "./_components/SectionDesigned";
import ProjectSection from "./_components/SectionProject";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <CarouselProduct />
      <DesignedSection />
      <ProjectSection />
      <DesignSection />
    </main>
  );
};

export default HomePage;
