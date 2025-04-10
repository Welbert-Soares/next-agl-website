import { Card, CardContent } from "@/components/ui/card";

import Heading from "@/components/Heading";
import { cursesAvailable } from "@/constants/coursesAvailable";

const CardCourses = () => {
  return (
    <div>
      <Heading title="CURSOS" subtitle="Conheça nossos cursos" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-6">
        {cursesAvailable.map((courses, i) => (
          <Card
            key={i}
            className="flex justify-center items-center group bg-slate-100 hover:bg-primary transition-colors duration-300 hover:text-white"
          >
            <CardContent className="flex flex-col justify-center items-center text-center gap-2">
              <div className="flex justify-center">
                <img
                  src={courses.cover}
                  alt=""
                  className="w-20 h-20 group-hover:hidden transition-opacity duration-300"
                />
                <img
                  src={courses.hoverCover}
                  alt=""
                  className="w-20 h-20 hidden group-hover:flex transition-opacity duration-300"
                />
              </div>
              <span className="font-bold md:text-lg">{courses.courseName}</span>
              <span className="text-primary group-hover:text-white font-semibold">
                {courses.course}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { CardCourses };
