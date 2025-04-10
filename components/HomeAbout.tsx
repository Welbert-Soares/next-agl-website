
import Heading from "@/components/Heading";

import { CarouselSize } from "@/components/CarouselSize";

const HomeAbout = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Heading
        title="NOSSOS CURSOS"
        subtitle="Explore Nossos Populares Cursos On-Line"
      />
      <CarouselSize />
    </div>
  );
};

export default HomeAbout;
