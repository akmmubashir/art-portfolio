import React from "react";
import { ArrowIcon, CircleArrowIcon, Logo } from "./icons";
import ThemeToggle from "./themeToggle";
import Link from "next/link";
import FormPopup from "./formPopup";

interface Props {
  innerPage?: boolean;
  bgImage?: string;
  bgImageMob?: string;
}
const Header = ({ innerPage, bgImage }: Props) => {
  return (
    <React.Fragment>
      {!innerPage ? (
        <div className="bg-white dark:bg-[#353535] sticky top-0 z-50 w-full p-[50px_50px_0px_50px] max-md:p-[15px_20px] max-md:bg-white/10 max-md:dark:bg-gray-900/30 max-md:backdrop-blur-[3px] max-md:border-b max-md:border-white/20 max-md:dark:border-gray-900/20">
          <div className="">
            <div className="flex justify-between items-center">
              <Link href="/" className="w-[120px] max-md:w-[80px]">
                <Logo className="fill-black dark:fill-white" />
              </Link>
              <div className="flex items-center gap-[0_20px]">
                <ThemeToggle />
                <FormPopup />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-[#F3F3F3] dark:bg-[#000] w-full min-h-[400px] max-h-[530px]"
        >
          <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-[3px] border-b border-white/20 dark:border-gray-900/20 p-[30px_50px] max-md:p-[15px_20px] max-md:fixed max-md:w-full top-0 z-50">
            <div className="flex justify-between items-center">
              <Link
                href="/projects"
                className="flex items-center gap-[10px] maxmd:gap-[5px] max-md:hidden"
              >
                <div className="w-[40px] h-[40px]">
                  <CircleArrowIcon className="stroke-black dark:stroke-white" />
                </div>
                <span className="text-[14px] text-black dark:text-white uppercase whitespace-nowrap">
                  Back To Projects
                </span>
              </Link>
              <Link href="/" className="w-[120px] max-md:w-[80px] md:hidden">
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
      )}
    </React.Fragment>
  );
};

export default Header;
