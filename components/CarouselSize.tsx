import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { coursesCard } from "@/constants/coursesCard";
import { Button } from "./ui/button";

const CarouselSize = () => {
  return (
    <Carousel className="w-10/12 md:w-11/12">
      <CarouselContent className="-ml-1">
        {coursesCard.map((course, i) => (
          <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-slate-100">
                <CardContent className="flex flex-col items-center justify-center p-2 gap-4">
                  <div className="flex justify-center items-center w-full gap-2">
                    <div className="flex justify-center items-center bg-primary rounded-full p-2">
                      <img
                        src={course.cover}
                        alt=""
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                    <p className="w-9/12 flex text-center lg:text-base xl:text-lg font-bold">
                      {course.coursesName}
                    </p>
                  </div>

                  {course.courTeacher.map((teacher, i) => (
                    <div
                      key={i}
                      className="flex flex-col w-full items-center gap-5"
                    >
                      <div className="flex gap-2">
                        <img
                          src={teacher.dcover}
                          alt=""
                          className="rounded-full w-10 h-10"
                        />
                        <span className="flex items-center font-semibold text-sm text-slate-700">
                          {teacher.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold">
                        {teacher.totalTime}
                      </span>
                      <Button className="w-2/3">Inscreva-se</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export { CarouselSize };
