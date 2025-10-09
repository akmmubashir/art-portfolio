"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";

type SocialItem = {
  id: number;
  name: string;
  link: string;
  dayIcon?: { url: string };
  nightIcon?: { url: string };
};

type ContactListProps = {
  contactData: {
    data: {
      social: SocialItem[];
    };
  };
};

const ContactList: React.FC<ContactListProps> = ({ contactData }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Ensure we only render on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !contactData.data.social?.length) {
    return (
      <div className="flex gap-[20px]">
        {contactData.data.social?.map((item) => (
          <div
            key={item.id}
            className="w-[40px] aspect-square rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-[20px]">
      {contactData.data.social.map((item: SocialItem, index: number) => {
        const iconUrl =
          theme === "dark" ? item.nightIcon?.url : item.dayIcon?.url;
        const altText = `${item.name} icon`;

        if (!iconUrl) return null;

        return (
          <motion.a
            key={item.id}
            href={item.link}
            className="cursor-pointer flex items-center justify-center w-[40px] aspect-square rounded-full bg-black dark:bg-white hover:bg-[#464646] dark:hover:bg-[#f1f1f1] text-white dark:text-black hover:text-white dark:hover:text-white p-[8px]"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <Image
              src={iconUrl}
              alt={altText}
              width={40}
              height={40}
              className="w-full h-auto"
              // priority
              loading="eager"
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default ContactList;
