import Image from "next/image";
import React from "react";

const Section_1 = () => {
  return (
    <div className="grid grid-cols-2 max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:text-center">
      <div className="mt-10 ">
        <div className="relative ">
          <h1 className="font-bold text-8xl p-8 max-[1200px]:text-6xl z-30">
            Teach Students worldwide
          </h1>
          <Image
            src="/Section_1/icons/underline.svg"
            width={250}
            height={52}
            alt="underline"
            className=" absolute top-28 left-10 max-[1200px]:absolute max-[1200px]:left-52 max-[1200px]:w-40 max-[1200px]:top-20 max-[430px]:w-30 max-[430px]:left-32 z-10"
          />
        </div>
        <p className="text-left w-11/12 p-8 max-[1200px]:text-center">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>
        <div className="flex p-8 gap-64 items-center max-[1200px]:flex max-[1200px]:justify-center max-[1200px]:gap-10">
          <button className="border border-orange-400 p-5 bg-orange-600 rounded-md">
            <span className="font-bold text-white">Sign Up now</span>
          </button>
          <button className="flex gap-2">
            <Image
              src="/Section_1/icons/play_circle.svg"
              width={25}
              height={25}
              alt="play_cirlce"
            />
            <span className="font-semibold text-blue-500">View Demo</span>
          </button>
        </div>
        <div className="flex items-center gap-20 p-8 max-[1200px]:gap-1 max-[1200px]:flex max-[1200px]:justify-start ">
          <h1 className="w-13  font-semibold text-gray-400">
            Trusted by leading companies
          </h1>
          <Image
            src="/Section_1/icons/1.svg"
            width={25}
            height={25}
            alt="company icons"
          />
          <Image
            src="/Section_1/icons/2.svg"
            width={25}
            height={25}
            alt="company icons"
          />
          <Image
            src="/Section_1/icons/3.svg"
            width={25}
            height={25}
            alt="company icons"
          />
          <Image
            src="/Section_1/icons/4.svg"
            width={25}
            height={25}
            alt="company icons"
          />
          <Image
            src="/Section_1/icons/5.svg"
            width={25}
            height={25}
            alt="company icons"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/Section_1/image.svg"
          width={600}
          height={52}
          alt="section_1_img"
          className=""
        />
      </div>
    </div>
  );
};

export default Section_1;
