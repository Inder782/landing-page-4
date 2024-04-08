import { nav_bottom } from "@/statics/nav_bottom";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav_bottom = () => {
  return (
    <div className="bg-blue-950 flex justify-evenly gap-36 max-[1400px]:flex max-[1300px]:flex-col max-[1400px]:items-center p-10">
      <div className="max-[1400px]:mt-10 ">
        <Link href="/" className=" flex items-center font-bold gap-2 text-2xl ">
          <Image src="/nav_bottom/logo.svg" width={35} height={52} alt="logo" />
          <span className="text-white">teach</span>
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-20 max-[1400px]:flex max-[1300px]:flex-col max-[1400px]:items-center text-white">
        {nav_bottom.map((item) => (
          <div className="flex flex-col" key={item.key}>
            <Link href="/" className="font-bold mt-2">
              {" "}
              {item.item}
            </Link>
            <Link href="/" className="mt-7">
              {item.Link_1}
            </Link>
            <Link href="/" className="mt-3">
              {item.Link_2}
            </Link>
            <Link href="/" className="mt-3">
              {item.Link_3}
            </Link>
            <Link href="/" className="mt-3">
              {item.Link_4}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav_bottom;
