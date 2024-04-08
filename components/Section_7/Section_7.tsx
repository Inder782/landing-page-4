import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section_7 = () => {
  return (
    <div className="grid grid-cols-2 mt-20 max-[700px]:flex max-[700px]:flex-col">
      <div className="p-10">
        <div className=" relative p-8">
          <h1 className="font-bold text-7xl ">All the cool features</h1>
          <Image
            src="/Section_7/vector_sec_7.svg"
            width={250}
            height={52}
            alt="underline_sec_7"
            className="absolute right-40 max-[450px]:right-0 max-[1700px]:right-96 max-[1400px]:right-56 max-[1000px]:right-32"
          />
        </div>
        <p className="mt-10 w-6/7 p-8">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <div className="mt-10 text-xl font-semibold text-blue-700 p-8">
          <Link href="/" className="mt-10">
            View all the features -{">"}
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="Section_7/right_sec_7.svg"
          width={600}
          height={52}
          alt="sec_7_image"
        />
      </div>
    </div>
  );
};

export default Section_7;
