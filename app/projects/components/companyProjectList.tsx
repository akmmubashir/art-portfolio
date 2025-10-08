"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import ProjectListTabs from "@/app/components/projectListTabs";
import { ClockIcon, GlobeIcon, LocationIcon } from "@/app/components/icons";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
const GilroyMedium = localFont({
  src: "../../fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
});

type Props = {
  companyData: {
    id: number;
    companyName: string;
    location: string;
    info: string;
    website: string;
    role: string;
    companyImage?: { url: string };
    bgImage?: { url: string };
    bgMobile?: { url: string };
    duration?: string;
    projects?: [
      {
        id: number;
        projectName: string;
        title: string;
        description: string;
        duration: string;
        images: [
          {
            id: number;
            width: string;
            image?: { url: string };
          }
        ];
        videos: [
          {
            id: number;
            width: string;
            video?: { url: string };
          }
        ];
      }
    ];
  };
};

const CompanyProjectList = (props: Props) => {
  const { companyData } = props;
  return (
    <div className="flex flex-col py-[60px] p-[50px] max-md:p-[40px_20px_60px_20px] gap-[40px] max-w-[1440px] mx-auto w-full">
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
          {companyData?.role || "Default Heading"}
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
          {companyData?.companyName || "Default Heading"}
        </motion.h1>
        <div className="flex flex-wrap items-center gap-[10px_20px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "tween",
              stiffness: 100,
              damping: 10,
            }}
            className="flex flex-wrap items-center gap-[6px]"
          >
            <div>
              <LocationIcon
                className="stroke-[#000] dark:stroke-[#fff]"
                width="22"
                height="22"
                strokeWidth="1.5"
              />
            </div>
            <p className="text-[16px] max-md:text-[14px] font-medium text-[#2a2a2a] dark:text-[#fff]">
              {companyData?.location || "Default Location"}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "tween",
              stiffness: 100,
              damping: 10,
            }}
            className="flex flex-wrap items-center gap-[6px]"
          >
            <div>
              <ClockIcon
                className="stroke-[#000] dark:stroke-[#fff]"
                width="22"
                height="22"
                strokeWidth="1.5"
              />
            </div>
            <p className="text-[16px] max-md:text-[14px] font-medium text-[#2a2a2a] dark:text-[#fff]">
              {companyData?.duration || "Default Duration"}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
              type: "tween",
              stiffness: 100,
              damping: 10,
            }}
            className="flex flex-wrap items-center gap-[6px]"
          >
            <div>
              <GlobeIcon
                className="stroke-[#000] dark:stroke-[#fff]"
                width="22"
                height="22"
                strokeWidth="1.5"
              />
            </div>
            <Link
              href={`https://${companyData?.website}` || "#"}
              target="_blank"
              className="text-[16px] max-md:text-[14px] font-medium underline underline-offset-2 text-[#2a2a2a] hover:text-[#000] dark:text-[#fff] dark:hover:text-[#f1f1f1]"
            >
              {companyData?.website || "Default Website"}
            </Link>
          </motion.div>
        </div>
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
          {companyData?.info}
        </motion.p>
      </div>
      {companyData?.projects?.length ? (
        <ProjectListTabs projectData={companyData?.projects} />
      ) : null}
    </div>
  );
};

export default CompanyProjectList;
