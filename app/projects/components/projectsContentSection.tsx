"use client";
import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Navigation from "@/app/components/navigation";
import { ProjectsData } from "../../utils/types/data";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});

type Props = {
  projectsData?: ProjectsData["data"];
};

const ProjectsContentSection = (props: Props) => {
  const { projectsData } = props;
  return (
    <div className="flex flex-wrap items-center justify-between max-md:justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="font-Gilroy font-bold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
        style={{ fontFamily: GilroyBold.style.fontFamily }}
      >
        {projectsData?.pageTitle || "Projects"}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="max-md:hidden"
      >
        <Navigation beta />
      </motion.div>
      <div className="md:hidden">
        <Navigation beta />
      </div>
    </div>
  );
};

export default ProjectsContentSection;
