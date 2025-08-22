import React from "react";
import { ArrowIcon, Logo } from "./icons";
import ThemeToggle from "./themeToggle";

const Header = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark sticky top-0 z-50 w-full">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="w-[120px] max-md:w-[80px]">
            <Logo className="fill-black dark:fill-white" />
          </div>
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
