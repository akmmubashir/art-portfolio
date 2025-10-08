import React, { cache } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { ContactData } from "../utils/types/data";
import { getContactData } from "../utils/services/api/getServices";
import { Metadata } from "next";
import ContactSection from "./components/contactSection";

const fetchContactData = cache(async (): Promise<Partial<ContactData>> => {
  try {
    const contactData = await getContactData();
    return contactData || {};
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return {};
  }
});

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const contactData = await fetchContactData();
    const defaultImage = "/assets/common/heroImage.png";

    // Provide default values for all required fields
    const title = contactData?.data?.metaTitle || "Default Title";
    const description =
      contactData?.data?.metaDescription || "Default Description";
    const ogTitle = contactData?.data?.ogTitle || title;
    const ogDescription = contactData?.data?.ogDescription || description;
    const ogImage = contactData?.data?.ogImage?.url || defaultImage;

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
      title: "Contact",
      description: "Contact Description",
    };
  }
};

const page = async () => {
  const contactData = await fetchContactData();
  return (
    <div className="md:h-screen bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header />
      <ContactSection contactData={contactData.data} />
      <Footer />
    </div>
  );
};

export default page;
