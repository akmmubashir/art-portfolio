"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ImageSlider from "./imageSlider";
import Image from "next/image";

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
  console.log(items[activeIndex]?.videos);
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset scroll to top when changing tabs
  useEffect(() => {
    // Scroll inner content container (if it is scrollable)
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    // Ensure the whole section is brought to the top of the viewport
    if (rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [activeIndex]);

  return (
    <div ref={rootRef} className="grid grid-cols-12 gap-[30px] relative">
      <div className="md:max-h-[300px] max-md:h-auto col-span-3 max-md:col-span-12 flex md:flex-col gap-[10px] md:overflow-auto max-md:overflow-x-auto overflow-hidden tabs-scroll p-[0_5px_0_0] max-md:p-[8px] max-md:-mx-[10px] max-md:px-[10px] snap-x snap-mandatory sticky top-[80px] z-[1] max-md:bg-white max-md:dark:bg-[#353535]">
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
              onClick={() => setActiveIndex(index)}
            >
              {item.projectName}
            </button>
          </div>
        ))}
      </div>
      <div
        ref={contentRef}
        className="md:max-h-[300px] max-md:h-auto col-span-9 max-md:col-span-12 flex flex-col items-center md:overflow-auto max-md:overflow-visible md:p-[0_10px_0_0] relative"
      >
        <div className="flex gap-[10px] justify-between items-center w-full md:sticky md:top-0 md:z-[1] bg-white dark:bg-[#353535] px-[2px] py-[6px] max-md:py-[8px]">
          <h6 className="text-[32px] max-md:text-[24px] font-medium text-[#1A1A1A] dark:text-[#fff]">
            {items[activeIndex]?.title || ""}
          </h6>
          <p className="text-[16px] max-md:text-[14px] font-medium text-[#2a2a2a] dark:text-[#fff]">
            {items[activeIndex]?.duration || ""}
          </p>
        </div>
        <p className="text-[16px] max-md:text-[14px] font-medium text-[#2a2a2a] dark:text-[#fff] w-full leading-[1.6] max-md:leading-[1.55]">
          {items[activeIndex]?.description || ""}
        </p>
      </div>
      <div className="col-span-full">
        {items[activeIndex]?.images.length > 1 ? (
          <ImageSlider
            imageList={items[activeIndex]?.images}
            autoplayMs={4000}
          />
        ) : items[activeIndex]?.images[0]?.image?.url ? (
          <Image
            src={items[activeIndex]?.images[0]?.image?.url || ""}
            alt={items[activeIndex]?.title + "image"}
            width={1000}
            height={680}
            className="w-full h-[600px] max-md:h-[460px] object-contain"
          />
        ) : null}
      </div>
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
