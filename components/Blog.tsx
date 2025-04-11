import { User, CalendarDaysIcon, MessagesSquareIcon } from "lucide-react";

import Heading from "@/components/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { blog } from "@/constants/blog";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading title="NOSSO BLOG" subtitle="Recente do blog" />

      <Carousel className="w-9/12 md:w-11/12">
        <CarouselContent className="-ml-1">
          {blog.map((post, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-slate-50 flex p-0">
                  <CardContent className="flex flex-col p-0">
                    <img src={post.cover} alt="" className="rounded-t-lg" />

                    <div className="flex justify-evenly gap-1 p-2">
                      <div className="flex flex-col md:flex-row justify-center items-center">
                        <User className="text-primary w-5 h-5" />
                        <span className="uppercase text-slate-700 text-xs md:text-sm xl:text-base font-semibold">
                          {post.type}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row justify-center items-center">
                        <CalendarDaysIcon className="text-primary w-5 h-5" />
                        <span className="uppercase text-slate-800 text-xs md:text-sm xl:text-base font-semibold">
                          {post.date}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row justify-center items-center">
                        <MessagesSquareIcon className="text-primary w-5 h-5" />
                        <span className="text-slate-700 text-xs md:text-sm xl:text-base font-semibold">
                          {post.com}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 p-4">
                      <span className=" lg:text-lg font-bold">
                        {post.title}
                      </span>
                      <p className="text-slate-600 font-semibold">
                        {post.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Blog;
