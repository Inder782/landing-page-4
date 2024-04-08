import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section_4 = () => {
  return (
    <div className="grid grid-cols-2 mt-48 max-[1200px]:flex max-[1200px]:flex-col">
      <div className="order-1">
        <div className="relative mt-10 text-left p-8">
          <Image
            src="/Section_4/plane_departure.svg"
            width={55}
            height={52}
            alt="plane_dep"
            className="absolute right-96 top-0 max-[650px]:right-52 max-[450px]:-top-5"
          />
          <h1 className="font-bold text-6xl max-[650px]:text-center">
            Meet International students & teachers
          </h1>
        </div>
        <p className="mt-10 text-xl text-left p-8">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
        <div className="p-8 text-xl text-blue-600 font-semibold">
          <Link href="/">
            <span>Explore teachers and students -{"> "}</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center max-[1200px]:order-1">
        <Image
          src="/Section_4/image_sec_4.svg"
          width={800}
          height={52}
          alt="section_4"
        />
      </div>
    </div>
  );
};

export default Section_4;
