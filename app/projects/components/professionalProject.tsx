"use client";
import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { ProfessionalProjectsData } from "@/app/utils/types/data";
import Image from "next/image";
import Link from "next/link";
import { convertToSlug } from "@/app/components/commonMethod";
import { ArrowNextIcon, ClockIcon, LocationIcon } from "@/app/components/icons";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
const GilroyMedium = localFont({
  src: "../../fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
});

type Props = {
  projectsData?: ProfessionalProjectsData["data"];
  companiesList?: {
    id: number;
    companyName: string;
    location: string;
    info: string;
    website: string;
    role: string;
    companyImage?: {
      url: string;
    };
    bgImage?: {
      url: string;
    };
    bgMobile?: {
      url: string;
    };
    duration?: string;
    projects: [
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
            image?: {
              url: string;
            };
          }
        ];
        videos: [
          {
            id: number;
            width: string;
            video?: {
              url: string;
            };
          }
        ];
      }
    ];
  }[];
};

const ProfessionalProject = (props: Props) => {
  const { projectsData, companiesList } = props;

  return (
    <React.Fragment>
      <div className="flex-1 flex flex-col py-[60px] p-[50px] max-md:p-[40px_20px_60px_20px] gap-[40px] max-w-[1440px] mx-auto w-full">
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
            {projectsData?.heading || "Default Heading"}
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
            {projectsData?.description || "Default Description"}
          </motion.p>
        </div>
        <div className="max-md:pb-[40px] grid grid-cols-12 gap-[30px]">
          {companiesList?.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              key={item.id}
              href={`/projects/professional/${convertToSlug(item.companyName)}`}
              className="group col-span-4 max-md:col-span-full rounded-[20px_20px_50px_20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.companyImage?.url || ""}
                alt={`${
                  item.companyName.toLowerCase() || "company"
                }-company-image`}
                width={500}
                height={500}
              />
              <div className="p-[15px_20px] flex justify-between items-center gap-[6px]">
                <div className="flex flex-col gap-[6px]">
                  <h6 className="text-[20px] max-md:text-[16px] font-medium">
                    {item.companyName}
                  </h6>
                  <div className="flex flex-wrap items-center gap-[6px]">
                    <div>
                      <LocationIcon
                        className="stroke-[#000] dark:stroke-[#fff]"
                        width="18"
                        height="18"
                        strokeWidth="1.2"
                      />
                    </div>
                    <p className="text-[16px] max-md:text-[14px] font-medium">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-[6px]">
                    <div>
                      <ClockIcon
                        className="stroke-[#000] dark:stroke-[#fff]"
                        width="18"
                        height="18"
                        strokeWidth="1.2"
                      />
                    </div>
                    <p className="text-[16px] max-md:text-[14px] font-medium">
                      {item.duration}
                    </p>
                  </div>
                </div>
                <div className="group-hover:animate-bounce">
                  <ArrowNextIcon
                    className="stroke-[#000] dark:stroke-[#fff]"
                    strokeWidth="0.8"
                    width="30"
                    height="30"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfessionalProject;
