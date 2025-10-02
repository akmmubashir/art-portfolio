import React, { cache } from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import { getProfessionalProjectsData } from "@/app/utils/services/api/getServices";
import { ProfessionalProjectsData } from "@/app/utils/types/data";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";

const GilroyBold = localFont({
  src: "../../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
// const GilroyMedium = localFont({
//   src: "../../../fonts/Gilroy-Medium.ttf",
//   variable: "--font-gilroy-medium",
// });

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

const page = async (props: { params: Promise<{ company: string }> }) => {
  const projectsData = await fetchProjectsData();
  const { company } = await props.params;
  const companies = projectsData?.data?.companies ?? [];

  const companyData = companies.find(
    (item) => item.companyName.toLowerCase().replace(" ", "-") === company
  );
  return (
    <div className="bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header
        innerPage
        bgImage={projectsData?.data?.bannerBg?.url}
        bgImageMob={projectsData?.data?.bannerBgMob?.url}
        backTo={{
          link: "/projects/professional",
          text: "Back To Professional Projects",
        }}
      />
      <div className="flex flex-col py-[60px] p-[50px] max-md:p-[40px_20px_60px_20px] gap-[40px] max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-[20px] max-md:gap-[10px]">
          <h1
            className="font-Gilroy font-bold text-[40px] max-md:text-[30px] leading-[40px] max-md:leading-[30px]"
            style={{ fontFamily: GilroyBold.style.fontFamily }}
          >
            {companyData?.companyName}
          </h1>
          <p>{companyData?.info}</p>
        </div>
      </div>
      <div className="md:hidden">
        <Navigation
          project
          backTo={{
            link: "/projects/professional",
            text: "Back To Professional",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
export default page;
