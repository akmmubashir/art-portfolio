import React from "react";
import { ArrowIcon, Logo } from "./icons";
import ThemeToggle from "./themeToggle";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-50 dark:bg-gray-800 w-full">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="">
            <Logo className="fill-black dark:fill-white" />
          </div>
          <div className="flex items-center gap-[0_20px]">
            <ThemeToggle />
            <button className="flex items-center gap-[10px] cursor-pointer text-black dark:text-white">
              start a project{" "}
              <ArrowIcon className="fill-black dark:fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
