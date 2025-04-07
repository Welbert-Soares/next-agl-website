import Heading from "./Heading";

import { coursesCard } from "@/constants/coursesCard";

const HomeAbout = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Heading
        title="NOSSOS CURSOS"
        subtitle="Explore Nossos Populares Cursos On-Line"
      />
      <div className="grid grid-cols-3">
        {coursesCard.map((course, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-slate-100 p-2"
          >
            <div className="flex ">
              <div className="w-18 h-18 bg-primary rounded-full p-2 flex items-center justify-center">
                <img src={course.cover} alt="" />
              </div>

              <span>{course.coursesName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
