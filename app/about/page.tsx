import React, { cache } from "react";
import { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
// import { DownloadIcon } from "../components/icons";
import { getAboutData } from "../utils/services/api/getServices";
import { AboutData } from "../utils/types/data";
import AboutSection from "./components/aboutSection";

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
    <div className="md:min-h-screen bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col p-[30px_50px_30px_50px] max-md:p-[20px_20px_50px_20px]">
        <AboutSection aboutData={aboutData?.data} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
