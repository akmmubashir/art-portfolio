"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageSlider from "./imageSlider";

type Props = {
  projectData?: [
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

const ProjectListTabs = (props: Props) => {
  const items = useMemo(() => props.projectData ?? [], [props.projectData]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userClicked, setUserClicked] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll only when the user clicks a tab
  useEffect(() => {
    if (userClicked && rootRef.current) {
      const top =
        rootRef.current.getBoundingClientRect().top + window.scrollY - 100; // offset by 100px
      window.scrollTo({ top, behavior: "smooth" });

      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }

      setUserClicked(false);
    }
  }, [activeIndex, userClicked]);

  return (
    <div ref={rootRef} className="grid grid-cols-12 gap-[30px] relative">
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="md:max-h-[300px] max-md:h-auto col-span-3 max-md:col-span-12 flex md:flex-col gap-[10px] md:overflow-auto max-md:overflow-x-auto overflow-hidden tabs-scroll p-[0_5px_0_0] max-md:p-[8px] max-md:-mx-[10px] max-md:px-[10px] snap-x snap-mandatory sticky top-[80px] z-[1] max-md:bg-white max-md:dark:bg-[#353535]"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="h-[60px] max-md:h-[40px] flex max-md:flex-none max-md:me-[8px] snap-start bg-none"
          >
            <button
              className={`p-[20px] max-md:p-[10px_14px] flex justify-center items-center w-full cursor-pointer transition-colors text-[18px] max-md:text-[14px] max-md:whitespace-nowrap ${
                activeIndex === index
                  ? "bg-[#2a2a2a] dark:bg-[#f1f1f1] text-white dark:text-[#2a2a2a]"
                  : "bg-white dark:bg-[#353535] hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] text-[#2a2a2a] dark:text-[#f1f1f1]"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setUserClicked(true); // mark as user-initiated
              }}
            >
              {item.projectName}
            </button>
          </div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="md:max-h-[300px] max-md:h-auto col-span-9 max-md:col-span-12 flex flex-col items-center md:overflow-auto max-md:overflow-visible md:p-[0_10px_0_0] relative"
      >
        <div className="flex flex-wrap gap-[6px_20px] justify-between items-center w-full md:sticky md:top-0 md:z-[1] bg-white dark:bg-[#353535] px-[2px] py-[6px] max-md:py-[8px]">
          <h6 className="text-[32px] max-md:text-[24px] font-medium text-[#1A1A1A] dark:text-[#fff]">
            {items[activeIndex]?.title || ""}
          </h6>
          <p className="text-[16px] max-md:text-[14px] font-medium text-[#2a2a2a] dark:text-[#fff] italic">
            {items[activeIndex]?.duration || ""}
          </p>
        </div>
        <p className="text-[16px] max-md:text-[14px] font-medium text-[#2a2a2a] dark:text-[#fff] w-full leading-[1.6] max-md:leading-[1.55]">
          {items[activeIndex]?.description || ""}
        </p>
      </motion.div>

      {/* Images */}
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="col-span-full"
      >
        {items[activeIndex]?.images.length > 1 ? (
          <ImageSlider
            imageList={items[activeIndex]?.images}
            autoplayMs={4000}
          />
        ) : items[activeIndex]?.images[0]?.image?.url ? (
          <Image
            src={items[activeIndex]?.images[0]?.image?.url || ""}
            alt={items[activeIndex]?.title + " image"}
            width={1000}
            height={680}
            className="w-full max-h-[600px] max-md:max-h-[460px] object-contain"
            loading="lazy"
          />
        ) : null}
      </motion.div>

      {/* Videos */}
      <div className="col-span-full grid grid-cols-12 gap-[30px] mt-[40px] max-md:mt-[20px]">
        {items[activeIndex]?.videos.length
          ? items[activeIndex]?.videos.map((video, index) => (
              <div
                key={index}
                className={`bg-[#f1f1f1] dark:bg-[#303030] rounded-[12px] overflow-hidden shadow-xl ${
                  video.width === "Full Width"
                    ? "col-span-full"
                    : "col-span-6 max-md:col-span-full"
                }`}
              >
                <video
                  src={video?.video?.url || ""}
                  controls
                  className={`w-full object-contain ${
                    video.width === "Full Width"
                      ? "md:max-h-[700px] max-md:h-auto"
                      : "md:max-h-[600px] max-md:h-auto"
                  } rounded-[12px]`}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProjectListTabs;
