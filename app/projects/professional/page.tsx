import React, { cache } from "react";
import { Metadata } from "next";
import { getProfessionalProjectsData } from "@/app/utils/services/api/getServices";
import { ProfessionalProjectsData } from "@/app/utils/types/data";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import CompanyProjectList from "../components/companyProjectList";
import ProfessionalProject from "../components/professionalProject";

const fetchProjectsData = cache(
  async (): Promise<Partial<ProfessionalProjectsData>> => {
    try {
      const projectsData = await getProfessionalProjectsData();
      return projectsData || {};
    } catch (error) {
      console.error("Error fetching projects data:", error);
      return {};
    }
  }
);

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
        canonical:
          process.env.NEXT_PUBLIC_BASE_DOMAIN + "/projects/professional",
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
        canonical:
          process.env.NEXT_PUBLIC_BASE_DOMAIN + "/projects/professional",
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
  const companies: Array<
    ProfessionalProjectsData["data"]["companies"][number]
  > = projectsData?.data?.companies ?? [];
  return (
    <div className="bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header
        innerPage
        bgImage={
          companies.length === 1
            ? companies[0].bgImage?.url
            : projectsData?.data?.bannerBg?.url
        }
        bgImageMob={
          companies.length === 1
            ? companies[0].bgMobile?.url
            : projectsData?.data?.bannerBgMob?.url
        }
        backTo={{
          link: "/projects",
          text: "Back To Projects",
        }}
      />
      {companies.length === 1 ? (
        companies[0] ? (
          <div className="col-span-12">
            <CompanyProjectList companyData={companies[0]} />
          </div>
        ) : null
      ) : (
        <ProfessionalProject
          projectsData={projectsData?.data}
          companiesList={companies}
        />
      )}
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
