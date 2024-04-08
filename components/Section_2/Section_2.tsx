import Image from "next/image";
import React from "react";

const Section_2 = () => {
  return (
    <div className="relative mt-48 ">
      <div className="text-center font-bold text-5xl">
        <h1>All the tools that you need</h1>

        <p className=" text-xl font-normal">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
      </div>
      <div className=" right-0 left-0 flex flex-col items-center justify-center p-8  z-20 ">
        <Image
          src="/Section_2/Desktop.svg"
          width={1320}
          height={52}
          alt="logo"
          className="z-20"
        />
        <Image
          src="/Section_2/lines.svg"
          width={1320}
          height={52}
          alt="logo"
          className="z-20"
        />
        <Image
          src="/Section_2/frame.svg"
          width={1320}
          height={52}
          alt="logo"
          className="z-20"
        />
        <Image
          src="/Section_2/blob.svg"
          width={500}
          height={52}
          alt="logo"
          className="absolute left-0 top-0 z-0 max-[1200px]:w-96 max-[850px]:w-48 max-[850px]:top-20 max-[450px]:w-32 max-[450px]:top-72 max-[350px]:hidden"
        />
        <Image
          src="/Section_2/blob_2.svg"
          width={500}
          height={52}
          alt="logo"
          className="absolute right-0 top-0 z-0 max-[1200px]:w-52 max-[850px]:w-36 max-[850px]:top-20 max-[450px]:w-28 max-[450px]:top-72 max-[350px]:hidden"
        />
      </div>
    </div>
  );
};

export default Section_2;
