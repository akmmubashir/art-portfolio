"use client";
import React, { useEffect, useState } from "react";
import {
  AboutIcon,
  HomeIcon,
  ProjectsIcon,
  ContactIcon,
  CircleArrowIcon,
} from "../components/icons";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {
  home?: boolean;
  beta?: boolean;
  project?: boolean;
  backTo?: {
    link: string;
    text: string;
  };
};

const Navigation = (props: Props) => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      href: "/",
      icon: (
        <HomeIcon
          className={`stroke-black dark:stroke-white max-md:stroke-black max-md:dark:stroke-white`}
        />
      ),
    },
    {
      id: 2,
      name: "About",
      href: "/about",
      icon: (
        <AboutIcon className="stroke-black dark:stroke-white max-md:stroke-black max-md:dark:stroke-white" />
      ),
    },
    {
      id: 3,
      name: "Projects",
      href: "/projects",
      icon: (
        <ProjectsIcon className="stroke-black dark:stroke-white max-md:stroke-black max-md:dark:stroke-white" />
      ),
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
      icon: (
        <ContactIcon className="stroke-black dark:stroke-white max-md:stroke-black max-md:dark:stroke-white" />
      ),
    },
  ];
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering until component is mounted on client
  if (!isMounted) {
    return null;
  }

  return (
    <React.Fragment>
      <div
        className={`flex items-center max-md:hidden ${
          !props.home
            ? `${
                props.beta
                  ? ""
                  : "bg-black dark:bg-white p-[4px] rounded-full gap-[10px]"
              }`
            : "gap-[40px] max-md:gap-[10px] "
        }`}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {props.home ? (
              isMounted && pathname === item.href ? (
                <motion.div
                  animate={{ x: [-100, 0] }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-[60px] aspect-square rounded-full border flex items-center justify-center"
                >
                  {item.icon}
                </motion.div>
              ) : (
                <motion.a
                  href={`${item.href}`}
                  animate={{ y: [100, 0] }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-[22px] max-md:text-[18px] font-medium text-black dark:text-white hover:underline underline-offset-4 lowercase"
                >
                  {item.name}
                </motion.a>
              )
            ) : pathname === item.href && props.beta ? null : (
              <Link
                href={`${item.href}`}
                className={`text-[22px] max-md:text-[18px] font-medium underline-offset-4 lowercase p-[4px_14px] rounded-full ${
                  pathname === item.href
                    ? "text-black dark:text-white bg-white dark:bg-black"
                    : `${
                        props.beta
                          ? "text-black dark:text-white hover:underline"
                          : "text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white"
                      }`
                }`}
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
      {props.home ? (
        <div className="flex flex-col gap-[10px] md:hidden">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={`${item.href}`}
              animate={{ x: [-100, 0] }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
              className="text-[22px] max-md:text-[18px] font-medium text-black dark:text-white hover:underline underline-offset-4 capitalize"
            >
              {pathname === item.href ? null : item.name}
            </motion.a>
          ))}
        </div>
      ) : props.project ? (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-[20px] overflow-hidden flex items-center gap-[10px] justify-center">
          <div className="flex items-center justify-between gap-[20px] bg-white/10 dark:bg-gray-900/30 backdrop-blur-[3px] border-b border-white/20 dark:border-gray-900/20 p-[6px] aspect-square rounded-full shadow-lg">
            <Link
              href={menuItems[0].href}
              className={`aspect-square flex items-center justify-center font-medium capitalize p-[8px] rounded-full text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white`}
            >
              {menuItems[0].icon}
            </Link>
          </div>
          <Link
            href={props.backTo?.link || "/"}
            className="flex items-center justify-center gap-[20px] bg-white/10 dark:bg-gray-900/30 backdrop-blur-[3px] border-b border-white/20 dark:border-gray-900/20 p-[6px_12px] rounded-full shadow-lg w-full"
          >
            <div
              className={`flex items-center justify-center font-medium capitalize p-[4px] rounded-full text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white gap-[10px]`}
            >
              <div className="w-[32px] h-[32px]">
                <CircleArrowIcon className="stroke-black dark:stroke-white" />
              </div>
              <span className="text-[14px] text-black dark:text-white uppercase whitespace-nowrap">
                {props.backTo?.text || "Back To Projects"}
              </span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-[20px] overflow-hidden">
          <div
            className="flex items-center justify-between gap-[20px] bg-white/10 dark:bg-gray-900/30 
    backdrop-blur-[3px] border-b border-white/20 dark:border-gray-900/20 p-[6px_12px] rounded-full shadow-lg"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={`${item.href}`}
                className={`aspect-square flex items-center justify-center font-medium capitalize p-[8px] rounded-full ${
                  pathname === item.href
                    ? "text-white dark:text-black border-2 border-black dark:border-white"
                    : "text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white"
                }`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navigation;
