import Banner from "./components/Banner";
import CarouselProduct from "./components/CarouselProduct";
import DesignSection from "./components/DesignSection";
import DesignedSection from "./components/Designed";
import ProjectSection from "./components/Project";

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
