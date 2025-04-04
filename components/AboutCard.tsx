import React from "react";
import { homeAbout } from "@/constants/homeAbout";

const AboutCard = () => {
  return (
    <div className="hidden md:flex w-full p-8 gap-4 rounded-xl">
      <div className="flex">
        <img
          src="./images/imageBody.jpg"
          className="rounded-xl max-h-[750px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2">
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-nomal font-semibold text-secondary">
            APRENDA QUALQUER COISA
          </span>
          <span className="text-2xl font-semibold">
            Benefícios da experiência em aprendizagem online
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {homeAbout.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-4 bg-slate-100 hover:bg-secondary hover:text-white p-4 rounded-xl cursor-pointer"
            >
              <div className="flex justify-center items-center">
                <img src={item.cover} alt="" className="text-white" />
              </div>
              <div className="col-span-2">
                <span className="text-lg font-semibold ">{item.title}</span>
                <p className="text-nomal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
