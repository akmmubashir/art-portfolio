"use client";
import React from "react";
import {
  AboutIcon,
  HomeIcon,
  ProjectsIcon,
  ContactIcon,
} from "../components/icons";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {
  home?: boolean;
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
  return (
    <React.Fragment>
      <div
        className={`flex items-center max-md:hidden ${
          !props.home
            ? "bg-black dark:bg-white p-[4px_20px] rounded-full gap-[10px]"
            : "gap-[40px] max-md:gap-[10px] "
        }`}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {props.home ? (
              pathname === item.href ? (
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
            ) : (
              <Link
                href={`${item.href}`}
                className={`text-[22px] max-md:text-[18px] font-medium underline-offset-4 lowercase p-[4px_14px] rounded-full ${
                  pathname === item.href
                    ? "text-black dark:text-white bg-white dark:bg-black"
                    : "text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white"
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
