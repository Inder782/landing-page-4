import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { footer, footer_2 } from "@/statics/footer";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-blue-950 text-white  max-[650px]:text-center  ">
      <Separator />
      <div className="flex justify-between p-8 max-[650px]:flex max-[650px]:flex-col">
        <div>
          <h1>@uteach @ 2023. All rights reserved</h1>
        </div>
        <div className="flex gap-8 items-center  max-[650px]:flex max-[650px]:flex-col max-[650px]:mt-10">
          {footer_2.map((item) => (
            <div key={item.key}>
              <Link href="/">{item.title}</Link>
            </div>
          ))}
          {footer.map((item) => (
            <div key={item.key} className="flex gap-2 items-center">
              <Image src={item.icon} width={20} height={20} alt="icon" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
