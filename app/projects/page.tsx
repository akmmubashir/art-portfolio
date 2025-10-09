import React, { cache } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import WorksGrid from "./components/workGrid";
import { Metadata } from "next";
import { getProjectsData } from "../utils/services/api/getServices";
import { ProjectsData } from "../utils/types/data";
import ProjectsContentSection from "./components/projectsContentSection";

const fetchProjectsData = cache(async (): Promise<Partial<ProjectsData>> => {
  try {
    const projectsData = await getProjectsData();
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
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_DOMAIN ||
          "https://www.sachithearchitect.com"
      ),
      title,
      description,
      alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_DOMAIN + "/projects",
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
      title: "Projects",
      description: "Projects Description",
      alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_DOMAIN + "/projects",
      },
      openGraph: {
        title: "Projects",
        description: "Projects Description",
        locale: "en",
        images: [{ url: "/assets/common/heroImage.png", alt: "Projects" }],
      },
    };
  }
};

const page = async () => {
  const projectsData = await fetchProjectsData();
  return (
    <div className="min-h-screen bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col p-[30px_50px] max-md:p-[20px_20px_50px_20px]">
        <ProjectsContentSection projectsData={projectsData?.data} />
        <WorksGrid dataList={projectsData?.data?.list || []} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
