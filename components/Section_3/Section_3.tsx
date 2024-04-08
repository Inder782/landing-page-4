import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section_3 = () => {
  return (
    <div className="grid grid-cols-2 mt-52 max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:text-center">
      <div className=" p-8">
        <div className=" relative">
          <Image
            src="/Section_3/vector.svg"
            width={300}
            height={52}
            alt="vector"
            className="absolute top-16 right-96 max-[800px]:right-52 max-[450px]:right-0"
          />
          <h1 className="font-bold text-7xl mt-20">
            An all-in-one app that makes it easier
          </h1>
        </div>
        <div className="flex flex-col mt-20 text-2xl">
          <div className="flex items-center">
            <Image
              src="/Section_3/check.svg"
              width={52}
              height={52}
              alt="check"
            />
            <h2>Est et in pharetra magna adipiscing ornare aliquam.</h2>
          </div>
          <div className="flex items-center">
            <Image
              src="/Section_3/check.svg"
              width={52}
              height={52}
              alt="check"
            />
            <h2>Tellus arcu sed consequat ac velit ut eu blandit.</h2>
          </div>
          <div className="flex items-center">
            <Image
              src="/Section_3/check.svg"
              width={52}
              height={52}
              alt="check"
            />
            <h2>Ullamcorper ornare in et egestas dolor orci.</h2>
          </div>
        </div>
        <div className="p-8">
          <Link href="/">
            <span className="font-semibold text-xl text-blue-600">
              Find more about the app -{">"}
            </span>
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src="Section_3/image_sec_3.svg"
          width={1360}
          height={52}
          alt="section_3"
        />
      </div>
    </div>
  );
};

export default Section_3;
