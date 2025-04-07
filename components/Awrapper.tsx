import React from "react";

import { awrapper } from "@/constants/awrapper";

const Awrapper = () => {
  return (
    <div className="bg-[url(/images/waper.jpg)] bg-cover justify-evenly items-center mt-2 md:p-4 md:rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {awrapper.map((item, i) => {
          return (
            <div key={i} className="font-semibold">
              <div className="flex justify-center items-center">
                <img src={item.cover} alt="" className="w-10 h-10" />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-white text-xs md:text-2xl">
                  {item.data}
                </span>
                <span className="text-white text-xs">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Awrapper };
