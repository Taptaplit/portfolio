import Image from "next/image";
import Link from "next/link";
import React from "react";
import { myLoader } from "../pages";

function Header() {
  return (
    <div className="w-[100vw] p-4 px-20 2xl:px-40 bg-transparent absolute flex justify-between items-center">
      <Link href="/">
        <div className="hover:cursor-pointer flex items-center">
          <div className="w-[34px] h-[35px] relative overflow-hidden mr-2">
            <Image loader={myLoader} src="/logo.svg" layout="fill" objectFit="cover"></Image>
          </div>
          <p className="relative left-[-15%] text-xl italic mt-1 text-[#3592EF] font-medium">aptaplit</p>
        </div>
      </Link>
      <div className="flex font-poppins">
        <Link href="/projects">
          <p className="mx-6 hover:opacity-50 hover:cursor-pointer">Projects</p>
        </Link>
        <Link href="/timeline">
          <p className="mx-6 hover:opacity-50 hover:cursor-pointer">Timeline</p>
        </Link>
        <Link href="/support">
          <p className="ml-6 hover:opacity-50 hover:cursor-pointer">Support Me</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;