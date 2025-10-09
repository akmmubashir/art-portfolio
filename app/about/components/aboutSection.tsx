"use client";
import Image from "next/image";
import React from "react";
import ResumeDownload from "./resumeDownload";
import Navigation from "@/app/components/navigation";
import { AboutData } from "@/app/utils/types/data";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});

type Props = {
  aboutData?: AboutData["data"];
};

const AboutSection = (props: Props) => {
  const { aboutData } = props;
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-[100px] max-md:gap-[20px_0] flex-1 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="col-span-3 max-md:col-span-full"
        >
          <Image
            src={aboutData?.aboutImage?.url || "/assets/common/aboutImage.png"}
            alt="aboutImage"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="col-span-9 max-md:col-span-full flex flex-col gap-[40px] max-md:gap-[10px_0]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="font-Gilroy font-bold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
            style={{ fontFamily: GilroyBold.style.fontFamily }}
          >
            {aboutData?.heading || "Default Heading"}
          </motion.h1>
          <p className="text-[#52575E] dark:text-white text-[20px] max-md:text-[14px] text-justify">
            {aboutData?.description || "Default Description"}
          </p>
          <ResumeDownload resume={aboutData?.resume} />
        </motion.div>
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
        className="mt-auto mx-auto max-md:hidden"
      >
        <Navigation />
      </motion.div>
      <div className="mt-auto mx-auto md:hidden">
        <Navigation />
      </div>
    </React.Fragment>
  );
};

export default AboutSection;
