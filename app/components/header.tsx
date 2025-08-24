import React from "react";
import { ArrowIcon, Logo } from "./icons";
import ThemeToggle from "./themeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white dark:bg-[#353535] sticky top-0 z-50 w-full p-[50px_50px_0px_50px] max-md:p-[20px_20px_10px_20px]">
      <div className="">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-[120px] max-md:w-[80px]">
            <Logo className="fill-black dark:fill-white" />
          </Link>
          <div className="flex items-center gap-[0_20px]">
            <ThemeToggle />
            <button className="flex items-center gap-[10px] cursor-pointer text-textDark dark:text-textLight">
              <span className="max-md:hidden">start a project</span>
              <ArrowIcon className="fill-black dark:fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
