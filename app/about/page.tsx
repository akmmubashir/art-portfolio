import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { DownloadIcon } from "../components/icons";

const GilroyBold = localFont({
  src: "../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});

const page = () => {
  return (
    <div className="md:h-screen p-[50px] max-md:p-[20px_20px_100px_20px] bg-white dark:bg-gray-800 flex flex-col md:overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col p-[100px_0_30px_0] max-md:p-[40px_0_40px_0]">
        <div className="grid grid-cols-12 gap-[100px] max-md:gap-[20px_0]">
          <div className="col-span-3 max-md:col-span-full">
            <Image
              src="/assets/common/aboutImage.png"
              alt="aboutImage"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-9 max-md:col-span-full flex flex-col gap-[40px] max-md:gap-[20px_0]">
            <h1
              className="font-Gilroy font-bold text-[60px] max-md:text-[36px] leading-[60px] max-md:leading-[36px]"
              style={{ fontFamily: GilroyBold.style.fontFamily }}
            >
              Lorem Ipsum
              <br />
              simply dummy
            </h1>
            <p className="text-[#52575E] dark:text-white text-[20px] max-md:text-[14px] text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum.
            </p>
            <button className="cursor-pointer w-[160px] max-md:w-[120px]">
              <DownloadIcon
                className="fill-black dark:fill-white"
                width="100%"
                height="100%"
              />
            </button>
          </div>
        </div>
        <div className="mt-auto mx-auto">
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
