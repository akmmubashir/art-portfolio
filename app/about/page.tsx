import React, { cache } from "react";
import { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { DownloadIcon } from "../components/icons";
import { getAboutData } from "../utils/services/api/getServices";
import { AboutData } from "../utils/types/data";

const GilroyBold = localFont({
  src: "../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
const fetchAboutData = cache(async (): Promise<Partial<AboutData>> => {
  try {
    const aboutData = await getAboutData();
    return aboutData || {};
  } catch (error) {
    console.error("Error fetching about data:", error);
    return {};
  }
});

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const aboutData = await fetchAboutData();
    const defaultImage = "/assets/common/heroImage.png";

    // Provide default values for all required fields
    const title = aboutData?.data?.metaTitle || "Default Title";
    const description =
      aboutData?.data?.metaDescription || "Default Description";
    const ogTitle = aboutData?.data?.ogTitle || title;
    const ogDescription = aboutData?.data?.ogDescription || description;
    const ogImage = aboutData?.data?.ogImage?.url || defaultImage;

    return {
      title,
      description,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        locale: "en",
        images: [
          {
            url: ogImage,
            alt: ogTitle,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "About",
      description: "About Description",
    };
  }
};

const page = async () => {
  const aboutData = await fetchAboutData();
  return (
    <div className="md:h-screen  bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col p-[100px_50px_30px_50px] max-md:p-[20px_20px_50px_20px]">
        <div className="grid grid-cols-12 gap-[100px] max-md:gap-[20px_0]">
          <div className="col-span-3 max-md:col-span-full">
            <Image
              src={
                aboutData?.data?.aboutImage?.url ||
                "/assets/common/aboutImage.png"
              }
              alt="aboutImage"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-9 max-md:col-span-full flex flex-col gap-[40px] max-md:gap-[10px_0]">
            <h1
              className="font-Gilroy font-bold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
              style={{ fontFamily: GilroyBold.style.fontFamily }}
            >
              {aboutData?.data?.heading || "Default Heading"}
            </h1>
            <p className="text-[#52575E] dark:text-white text-[20px] max-md:text-[14px] text-justify">
              {aboutData?.data?.description || "Default Description"}
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
