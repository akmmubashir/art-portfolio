"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";

type WorkItem = {
  id?: number;
  title?: string;
  subTitle?: string;
  color?: string;
  avatar?: { url: string };
  bgVector?: { url: string };
  bgImage?: { url: string };
  bgImageMob?: { url: string };
};

type Props = {
  dataList: WorkItem[];
};

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});

const WorksGrid = (props: Props) => {
  const { dataList } = props;
  return (
    <div className="grid grid-cols-12 gap-[0px] max-md:gap-[50px_0] p-[60px_0] max-md:p-[30px_0_20px_0]">
      {dataList?.map((item: WorkItem) => (
        <Link
          href={`/projects/${item.title?.toLowerCase().replace(/\s/g, "-")}`}
          className="col-span-3 max-md:col-span-full h-[calc(100vh-460px)] max-md:h-full relative group"
          key={item.id}
        >
          <div className="absolute top-[-40px] left-[50%] translate-x-[-50%] translate-y-[-10px] flex flex-col gap-[5px]">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              style={{ fontFamily: GilroyBold.style.fontFamily }}
              className={`font-Gilroy font-bold text-[36px] max-md:text-[20px] text-center capitalize max-md:hidden ${item.color} dark:text-white`}
            >
              {item.title}
            </motion.h2>
            <motion.h6
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className={`text-[16px] max-md:text-[14px] text-center uppercase max-md:hidden text-black dark:text-white`}
            >
              {item.subTitle}
            </motion.h6>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-full h-full flex justify-center items-center max-md:hidden"
          >
            <div className="w-[80%] h-full">
              <Image
                src={item.bgImage?.url || "/assets/works/Art.webp"}
                alt={item.title + "Bg"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
          <div className="w-full h-full flex justify-center items-center absolute bottom-[-10px] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 peer-hover:opacity-0 transition-opacity duration-300 max-md:hidden">
            <div className="w-3/4 h-full">
              <Image
                src={item.bgVector?.url || "/assets/works/art.png"}
                alt={item.title + "Image"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className={`w-[350px] aspect-square flex justify-center items-center absolute bottom-[-140px]  transition-transform duration-300
              hover:-translate-y-5 max-md:hidden 
              left-[50%] translate-x-[-50%]`}
          >
            <Image
              src={item.avatar?.url || "/assets/works/artGuy.png"}
              alt={item.title + "Avatar"}
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="md:hidden"
          >
            <Image
              src={item.bgImageMob?.url || "/assets/works/artMob.png"}
              alt={item.title + "MobileImage"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default WorksGrid;
