import { sec_5 } from "@/statics/sec_5";
import Image from "next/image";
import React from "react";

const Section_5 = () => {
  return (
    <div className="grid grid-cols-3 bg-blue-950 mt-20 max-[450px]:flex max-[450px]:flex-col">
      {sec_5.map((item) => (
        <div
          className="flex flex-col items-center gap-2 text-center mt-10"
          key={item.key}
        >
          <Image src={item.icons} width={52} height={52} alt="icon" />
          <span className="font-bold text-7xl text-orange-300">
            {item.number}
          </span>
          <span className="text-xl text-orange-300">{item.marker}</span>
        </div>
      ))}
    </div>
  );
};

export default Section_5;
