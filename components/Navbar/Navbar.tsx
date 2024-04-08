import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex justify-between items-center p-5 ">
        <Link href="/" className="flex items-center gap-3 ">
          <Image
            src="/Navbar/logo.svg"
            width={25}
            height={52}
            alt="logo"
            className="ml-12 max-[1200px]:ml-0"
          />
          <h1 className="text-2xl font-bold ">teach</h1>
        </Link>

        <div className="flex gap-20 ml-44 font-semibold max-[1200px]:hidden">
          <Link href="/">Products</Link>
          <Link href="/">Solutions</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Products </Link>
        </div>
      </div>
      <div className="flex gap-16 mr-20 max-[1200px]:hidden">
        <button>Log In</button>
        <button className="border-2 border-black p-3 rounded-md">
          Sign Up Now
        </button>
      </div>
      <div className="min-[1200px]:hidden mr-8">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/hamburger.svg"
              width={52}
              height={52}
              alt="hamburger"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
