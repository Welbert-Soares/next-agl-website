import { MessageCircleMoreIcon } from "lucide-react";

import Heading from "@/components/Heading";
import { testimonal } from "@/constants/testimonal";
import { Card, CardContent } from "./ui/card";

const Testimonal = () => {
  return (
    <div className="p-6">
      <Heading
        title="VEJA O QUE DIZEM SOBRE NÓS"
        subtitle="Depoimentos sobre nosso trabalho"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonal.map((testimony, i) => (
          <Card key={i} className="bg-slate-50 justify-center items-center">
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex w-20 h-20">
                  <img
                    src={testimony.cover}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                  <MessageCircleMoreIcon className="absolute bottom-0 right-0 bg-secondary rounded-full text-white p-1" />
                </div>

                <div className="flex flex-col font-semibold">
                  <span>{testimony.name}</span>
                  <span className="text-secondary">{testimony.post}</span>
                </div>
              </div>
              <p className="text-slate-600 lg:text-lg font-semibold">
                {testimony.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
