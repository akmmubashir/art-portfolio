// import React, { cache } from "react";
// import localFont from "next/font/local";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import Navigation from "../components/navigation";
// import ContactForm from "../components/contactForm";
// import { ContactData } from "../utils/types/data";
// import { getContactData } from "../utils/services/api/getServices";
// import { Metadata } from "next";
// import ContactList from "./components/contactList";

// const GilroyBold = localFont({
//   src: "../fonts/Gilroy-Bold.ttf",
//   variable: "--font-gilroy-bold",
// });

// const fetchContactData = cache(async (): Promise<Partial<ContactData>> => {
//   try {
//     const contactData = await getContactData();
//     return contactData || {};
//   } catch (error) {
//     console.error("Error fetching contact data:", error);
//     return {};
//   }
// });

// export const generateMetadata = async (): Promise<Metadata> => {
//   try {
//     const contactData = await fetchContactData();
//     const defaultImage = "/assets/common/heroImage.png";

//     // Provide default values for all required fields
//     const title = contactData?.data?.metaTitle || "Default Title";
//     const description =
//       contactData?.data?.metaDescription || "Default Description";
//     const ogTitle = contactData?.data?.ogTitle || title;
//     const ogDescription = contactData?.data?.ogDescription || description;
//     const ogImage = contactData?.data?.ogImage?.url || defaultImage;

//     return {
//       title,
//       description,
//       openGraph: {
//         title: ogTitle,
//         description: ogDescription,
//         locale: "en",
//         images: [
//           {
//             url: ogImage,
//             alt: ogTitle,
//           },
//         ],
//       },
//     };
//   } catch (error) {
//     console.error("Error generating metadata:", error);
//     return {
//       title: "Contact",
//       description: "Contact Description",
//     };
//   }
// };

// const page = async () => {
//   const contactData = await fetchContactData();
//   return (
//     <div className="md:h-screen bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
//       <Header />
//       <div className="flex-1 flex flex-col p-[100px_50px_30px_50px] max-md:p-[20px_20px_50px_20px]">
//         <div className="grid grid-cols-12 gap-[100px] max-md:gap-[40px_0]">
//           <div className="col-span-5 max-md:col-span-full flex flex-col gap-[50px] max-md:gap-[20px_0]">
//             <h1
//               className="font-Gilroy font-extrabold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
//               style={{ fontFamily: GilroyBold.style.fontFamily }}
//             >
//               {contactData?.data?.heading || "Default Heading"}
//             </h1>
//             <p className="text-[#52575E] dark:text-white text-[20px] max-md:text-[14px] text-justify">
//               {contactData?.data?.description || "Default Description"}
//             </p>
//             {contactData?.data?.social?.length ? (
//               <ContactList
//                 contactData={{ data: { social: contactData.data.social } }}
//               />
//             ) : null}
//           </div>
//           <div className="col-span-7 max-md:col-span-full flex flex-col gap-[10px] max-md:gap-[10px_0]">
//             <ContactForm />
//           </div>
//         </div>
//         <div className="mt-auto mx-auto">
//           <Navigation beta />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default page;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page