import React, { cache } from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import { getArtProjectsData } from "@/app/utils/services/api/getServices";
import { ArtProjectsData } from "@/app/utils/types/data";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import ImageGrid from "../components/imageGrid";
import VideoGrid from "../components/videoGrid";
import ArtProject from "../components/artProject";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
const GilroyMedium = localFont({
  src: "../../fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
});

const fetchProjectsData = cache(async (): Promise<Partial<ArtProjectsData>> => {
  try {
    const projectsData = await getArtProjectsData();
    return projectsData || {};
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return {};
  }
});

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const projectsData = await fetchProjectsData();
    const defaultImage = "/assets/common/heroImage.png";

    // Provide default values for all required fields
    const title = projectsData?.data?.metaTitle || "Default Title";
    const description =
      projectsData?.data?.metaDescription || "Default Description";
    const ogTitle = projectsData?.data?.ogTitle || title;
    const ogDescription = projectsData?.data?.ogDescription || description;
    const ogImage = projectsData?.data?.ogImage?.url || defaultImage;

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
      title: "Projects",
      description: "Projects Description",
    };
  }
};

const page = async () => {
  const projectsData = await fetchProjectsData();
  return (
    <div className="bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header
        innerPage
        bgImage={projectsData?.data?.bannerBg?.url}
        bgImageMob={projectsData?.data?.bannerBgMob?.url}
        backTo={{
          link: "/projects",
          text: "Back To Projects",
        }}
      />
      <ArtProject projectsData={projectsData?.data} />
      <div className="md:hidden">
        <Navigation
          project
          backTo={{
            link: "/projects",
            text: "Back To Projects",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
export default page;
