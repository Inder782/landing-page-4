import Image from "next/image";
import React from "react";

const Section_8 = () => {
  return (
    <div className="relative bg-yellow-500">
      <div className="relative mt-30 top-96 p-10 text-center z-20 min-[800px]:top-52">
        <h1 className="text-3xl font-bold "> Join a world of learning</h1>
        <p className="mt-10">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </p>
        <button className="bg-orange-600 p-6 rounded-md text-xl font-bold text-white mt-10">
          Sign up Now
        </button>
      </div>{" "}
      <div className="relative  z-10 bg-yellow-500 w-full flex  items-center max-[800px]:flex-col min-[800px]:flex min-[800px]:justify-between">
        <Image
          src="/Section_8/card_sec_8_2.svg"
          width={250}
          height={52}
          alt="images"
          className="-mt-80 min-[800px]:w-96 min-[800px]:-mt-40  "
        />

        <Image
          src="/Section_8/card_sec_8.svg"
          width={250}
          height={52}
          alt="images"
          className="mt-96 min-[800px]:w-96 min-[800px]:-mt-96"
        />
      </div>
    </div>
  );
};

export default Section_8;
