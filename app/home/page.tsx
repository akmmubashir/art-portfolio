import React, { cache } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveImage from "../components/interactiveImage";
import { getHomeData } from "../utils/services/api/getServices";
import type { Metadata } from "next";
import { HomeData } from "../utils/types/data";

const fetchHomeData = cache(async (): Promise<Partial<HomeData>> => {
  try {
    const homeData = await getHomeData();
    return homeData || {};
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {};
  }
});

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const homeData = await fetchHomeData();
    const defaultImage = "/assets/common/heroImage.png";

    // Provide default values for all required fields
    const title = homeData?.data?.metaTitle || "Default Title";
    const description =
      homeData?.data?.metaDescription || "Default Description";
    const ogTitle = homeData?.data?.ogTitle || title;
    const ogDescription = homeData?.data?.ogDescription || description;
    const ogImage = homeData?.data?.ogImage?.url || defaultImage;

    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_DOMAIN ||
          "https://www.sachithearchitect.com"
      ),
      title,
      description,
      alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_DOMAIN,
      },
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
      title: "Home",
      description: "Home Description",
      alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_DOMAIN,
      },
      openGraph: {
        title: "Home",
        description: "Home Description",
        locale: "en",
        images: [{ url: "/assets/common/heroImage.png", alt: "Home" }],
      },
    };
  }
};

const HomePage = async () => {
  const homeData = await fetchHomeData();
  const defaultData = {
    pageTitle: "",
    ogTitle: "",
    ogDescription: "",
    metaTitle: "",
    metaDescription: "",
    heading: "",
    subHeading: "",
    ogImage: { url: "" },
  };

  const homeDataContent = homeData?.data || defaultData;

  return (
    <div className="h-screen bg-white dark:bg-[#353535] flex flex-col overflow-hidden">
      <Header />
      <InteractiveImage homeData={homeDataContent} />
      <Footer home />
    </div>
  );
};

export default HomePage;
