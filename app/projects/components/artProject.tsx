"use client";
import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { ArtProjectsData } from "@/app/utils/types/data";
import ImageGrid from "./imageGrid";
import VideoGrid from "./videoGrid";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
const GilroyMedium = localFont({
  src: "../../fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
});
type Props = {
  projectsData?: ArtProjectsData["data"];
};

const ArtProject = (props: Props) => {
  const { projectsData } = props;
  return (
    <div className="flex-1 flex flex-col p-[50px] max-md:p-[40px_20px_60px_20px] gap-[40px] max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col gap-[20px] max-md:gap-[10px]">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="font-Gilroy font-bold text-[20px] max-md:text-[16px] leading-[20px] max-md:leading-[16px]"
          style={{ fontFamily: GilroyMedium.style.fontFamily }}
        >
          {projectsData?.subHeading}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="font-Gilroy font-bold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
          style={{ fontFamily: GilroyBold.style.fontFamily }}
        >
          {projectsData?.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          {projectsData?.description}
        </motion.p>
      </div>
      <div className="flex flex-col gap-[20px] max-md:pb-[40px]">
        <ImageGrid
          dataList={projectsData?.images || []}
          pageTitle={projectsData?.pageTitle}
        />
        <VideoGrid
          dataList={projectsData?.video || []}
          pageTitle={projectsData?.pageTitle}
        />
      </div>
    </div>
  );
};

export default ArtProject;
