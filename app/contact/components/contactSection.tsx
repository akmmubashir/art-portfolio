"use client";
import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { ContactData } from "@/app/utils/types/data";
import ContactList from "./contactList";
import ContactForm from "@/app/components/contactForm";
import Navigation from "@/app/components/navigation";

const GilroyBold = localFont({
  src: "../../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});
type Props = {
  contactData?: ContactData["data"];
};

const ContactSection = (props: Props) => {
  const { contactData } = props;
  return (
    <div className="flex-1 flex flex-col p-[100px_50px_30px_50px] max-md:p-[20px_20px_50px_20px]">
      <div className="grid grid-cols-12 gap-[100px] max-md:gap-[40px_0]">
        <div className="col-span-5 max-md:col-span-full flex flex-col gap-[50px] max-md:gap-[20px_0]">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="font-Gilroy font-extrabold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
            style={{ fontFamily: GilroyBold.style.fontFamily }}
          >
            {contactData?.heading || "Default Heading"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-[#52575E] dark:text-white text-[20px] max-md:text-[14px] text-justify"
          >
            {contactData?.description || "Default Description"}
          </motion.p>
          {contactData?.social?.length ? (
            <ContactList
              contactData={{ data: { social: contactData.social } }}
            />
          ) : null}
        </div>
        <div className="col-span-7 max-md:col-span-full flex flex-col gap-[10px] max-md:gap-[10px_0]">
          <ContactForm />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="mt-auto mx-auto"
      >
        <Navigation beta />
      </motion.div>
    </div>
  );
};

export default ContactSection;
