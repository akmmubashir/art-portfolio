import React, { cache } from "react";
import Image from "next/image";
import { Metadata } from "next";
import localFont from "next/font/local";
import { getProfessionalProjectsData } from "@/app/utils/services/api/getServices";
import { ProfessionalProjectsData } from "@/app/utils/types/data";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import Link from "next/link";
import { ArrowNextIcon, LocationIcon } from "@/app/components/icons";
// import ImageGrid from "../components/imageGrid";
// import VideoGrid from "../components/videoGrid";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
const GilroyMedium = localFont({
  src: "../../fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
});

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

const page = async () => {
  const projectsData = await fetchProjectsData();
  const companies: Array<
    ProfessionalProjectsData["data"]["companies"][number]
  > = projectsData?.data?.companies ?? [];
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
      <div className="flex-1 flex flex-col py-[60px] p-[50px] max-md:p-[40px_20px_60px_20px] gap-[40px] max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-[20px] max-md:gap-[10px]">
          <h2
            className="font-Gilroy font-bold text-[20px] max-md:text-[16px] leading-[20px] max-md:leading-[16px]"
            style={{ fontFamily: GilroyMedium.style.fontFamily }}
          >
            {projectsData?.data?.subHeading}
          </h2>
          <h1
            className="font-Gilroy font-bold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
            style={{ fontFamily: GilroyBold.style.fontFamily }}
          >
            {projectsData?.data?.heading || "Default Heading"}
          </h1>
          <p>{projectsData?.data?.description || "Default Description"}</p>
        </div>
        <div className="max-md:pb-[40px] grid grid-cols-12 gap-[30px]">
          {companies.length <= 1 ? (
            <p>1 company found</p>
          ) : (
            <>
              {companies.map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/professional/${item.companyName
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="col-span-4 max-md:col-span-full rounded-[20px_20px_50px_20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={item.companyImage?.url || ""}
                    alt={`${
                      item.companyName.toLowerCase() || "company"
                    }-company-image`}
                    width={500}
                    height={500}
                  />
                  <div className="p-[15px_20px] flex justify-between items-center gap-[6px]">
                    <div className="flex flex-col gap-[6px]">
                      <h6 className="text-[20px] max-md:text-[16px] font-medium">
                        {item.companyName}
                      </h6>
                      <div className="flex flex-wrap items-center gap-[6px]">
                        <div>
                          <LocationIcon
                            className="stroke-[#000] dark:stroke-[#fff]"
                            width="18"
                            height="18"
                            strokeWidth="1.2"
                          />
                        </div>
                        <p className="text-[16px] max-md:text-[14px] font-medium">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <ArrowNextIcon
                        className="stroke-[#000] dark:stroke-[#fff]"
                        strokeWidth="0.8"
                        width="30"
                        height="30"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
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
