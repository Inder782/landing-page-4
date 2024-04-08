import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { sec_6 } from "@/statics/sec_6";

const Section_6 = () => {
  return (
    <div className="mt-10 p-8">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold p-10">What everyone says</h1>
      </div>
      <div className="flex p-20">
        <Carousel className="mt-10 ">
          <CarouselContent className="flex items-center justify-around gap-20 w-5/7 max-[750px]:flex-col">
            {sec_6.map((item) => (
              <CarouselItem
                className="bg-slate-100 basis-1/3 max-[1000px]:basis-1/2 max-[750px]:h-96 max-[750px]:flex-col p-8  h-80 shadow-xl "
                key={item.key}
              >
                <div className=" " key={item.key}>
                  <p className="mt-10">{item.p_tag}</p>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src={item.profile}
                      width={52}
                      height={52}
                      alt="user_thumb"
                      className="mt-10"
                    />
                    <h1 className="font-bold mt-2">{item.name}</h1>
                    <span className="text-gray-400">{item.Post}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Section_6;
