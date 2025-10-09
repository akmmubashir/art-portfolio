import React, { cache } from "react";
import { Metadata } from "next";
import { getProfessionalProjectsData } from "@/app/utils/services/api/getServices";
import { ProfessionalProjectsData } from "@/app/utils/types/data";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import { convertToSlug } from "@/app/components/commonMethod";
import CompanyProjectList from "../../components/companyProjectList";

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

export const generateMetadata = async (props: {
  params: Promise<{ company: string }>;
}): Promise<Metadata> => {
  const { company } = await props.params;
  try {
    const projectsData = await fetchProjectsData();
    const companies = projectsData?.data?.companies ?? [];

    const companyData = companies.find(
      (item) => convertToSlug(item.companyName) === company
    );
    const defaultImage = "/assets/common/heroImage.png";

    // Provide default values for all required fields
    const title =
      `${companyData?.companyName} Projects | Sachithanand P. Udayan - Architecture & Design Portfolio` ||
      "Default Title";
    const description = `Explore projects by Sachithanand P. Udayan with ${companyData?.companyName}, ${companyData?.location}. Discover innovative architectural and design works developed in collaboration with industry leaders.`;
    const ogTitle = `${companyData?.companyName} Projects | Sachithanand P. Udayan - Architecture & Design Portfolio`;
    const ogDescription = `Discover architectural and design projects by Sachithanand P. Udayan completed with ${companyData?.companyName} in ${companyData?.location} — blending creativity, innovation, and functionality.`;
    const ogImage = companyData?.companyImage?.url || defaultImage;

    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_DOMAIN ||
          "https://www.sachithearchitect.com"
      ),
      title,
      description,
      alternates: {
        canonical:
          process.env.NEXT_PUBLIC_BASE_DOMAIN +
          "/projects/professional/" +
          convertToSlug(companyData?.companyName || ""),
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
          process.env.NEXT_PUBLIC_BASE_DOMAIN +
          "/projects/professional/comapany-name",
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

const page = async (props: { params: Promise<{ company: string }> }) => {
  const projectsData = await fetchProjectsData();
  const { company } = await props.params;
  const companies = projectsData?.data?.companies ?? [];

  const companyData = companies.find(
    (item) => convertToSlug(item.companyName) === company
  );
  // console.log("companyData", companyData);

  return (
    <div className="bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header
        innerPage
        bgImage={companyData?.bgImage?.url}
        bgImageMob={companyData?.bgMobile?.url}
        backTo={{
          link: "/projects/professional",
          text: "Back To Professional Projects",
        }}
      />
      {companyData ? <CompanyProjectList companyData={companyData} /> : null}
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
