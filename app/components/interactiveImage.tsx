"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";

const InteractiveImage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();

    // Calculate normalized positions (-1 to 1)
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;

    // Example transform: move and rotate
    if (imageRef.current) {
      imageRef.current.style.transform = `
        translate(${x * 30}px, ${y * 30}px)
        rotateX(${y * 15}deg)
        rotateY(${x * 15}deg)
      `;
    }
  };

  const handleMouseLeave = () => {
    // Reset transform on leave
    if (imageRef.current) {
      imageRef.current.style.transform =
        "translate(0, 0) rotateX(0) rotateY(0)";
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <React.Fragment>
      <div
        className="grid grid-cols-12 flex-1"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="col-span-2 max-md:col-span-full">
          <div className="absolute top-[160px] max-md:top-[140px] flex flex-col items-center">
            {/* <h1 className="text-[250px] font-semibold text-[#2a2a2a]">
              portfolio
            </h1> */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex"
            >
              <motion.h1 className="text-[250px] max-md:text-[70px] font-semibold">
                Portfolio
              </motion.h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4,
                ease: "easeOut",
              }}
              className="absolute left-[180px] top-[240px] max-md:top-[64px] pe-[40px] bg-white dark:bg-gray-800 text-[100px] font-semibold text-black dark:text-white leading-[120px]"
            >
              architecture
            </motion.h2>
          </div>
          <div className="absolute z-30 bottom-[180px] max-md:bottom-[180px] flex max-md:flex-col gap-[30px] max-md:gap-[10px] ">
            {["home", "cv", "works", "contact"].map((item, index) => (
              <motion.a
                key={index}
                href={`/${item}`}
                animate={{ x: [-100, 0] }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="text-[26px] max-md:text-[18px] uppercase font-medium text-gray-800 dark:text-white hover:underline underline-offset-4"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="col-span-10 max-md:col-span-full"
        >
          <div className="w-full h-full relative">
            <Image
              src="/assets/common/heroImage.png"
              className="w-full h-full md:object-contain max-md:object-cover absolute bottom-[-40px] max-md:bottom-[70px] right-[-160px] max-md:right-0"
              alt="heroImage"
              width={2000}
              height={2000}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="transition-transform duration-200 ease-out absolute right-[490px] top-[150px] max-md:right-[40px] max-md:top-[300px]"
      >
        <div className="flex gap-4 relative">
          <div className="absolute bottom-[-80px] left-[-60px] w-[50px] max-md:w-[80px] h-full pt-[30px]">
            <Image
              src="/assets/common/birdB.png"
              alt="interactiveImage1"
              className="w-full h-full object-contain"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[50px] max-md:w-[40px]">
            <Image
              src="/assets/common/birdW.png"
              alt="interactiveImage2"
              className="w-full h-full object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default InteractiveImage;
