import React from "react";
import localFont from "next/font/local";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import ContactForm from "../components/contactForm";
import {
  CallIcon,
  EmailIcon,
  InstagramIcon,
  WhatsappIcon,
  //   FacebookIcon,
} from "../components/icons";
import Link from "next/link";
const GilroyBold = localFont({
  src: "../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});

const page = () => {
  const socialData = [
    {
      id: 1,
      name: "Email",
      link: "mailto:example@gmail.com",
      icon: (
        <EmailIcon
          className="stroke-white dark:stroke-black"
          strokeWidth="1.4"
        />
      ),
    },
    {
      id: 2,
      name: "Phone",
      link: "tel:123456789",
      icon: (
        <CallIcon
          className="stroke-white dark:stroke-black"
          strokeWidth="1.4"
        />
      ),
    },
    {
      id: 3,
      name: "Whatsapp",
      link: "https://wa.me/123456789",
      icon: (
        <WhatsappIcon
          className="stroke-white dark:stroke-black"
          strokeWidth="1.4"
        />
      ),
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com",
      icon: (
        <InstagramIcon
          className="stroke-white dark:stroke-black"
          strokeWidth="1.4"
        />
      ),
    },
    // {
    //   id: 5,
    //   name: "Facebook",
    //   link: "https://www.facebook.com",
    //   icon: <FacebookIcon className="stroke-white dark:stroke-black" strokeWidth="1.4" />,
    // },
  ];
  return (
    <div className="md:h-screen bg-white dark:bg-[#353535] flex flex-col md:overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col p-[100px_50px_30px_50px] max-md:p-[20px_20px_50px_20px]">
        <div className="grid grid-cols-12 gap-[100px] max-md:gap-[40px_0]">
          <div className="col-span-5 max-md:col-span-full flex flex-col gap-[50px] max-md:gap-[20px_0]">
            <h1
              className="font-Gilroy font-extrabold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
              style={{ fontFamily: GilroyBold.style.fontFamily }}
            >
              Let&apos;s work
              <br />
              together
            </h1>
            <p className="text-[#52575E] dark:text-white text-[20px] max-md:text-[14px] text-justify">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-[20px]">
              {socialData.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="cursor-pointer flex items-center justify-center w-[40px] aspect-square rounded-full bg-black dark:bg-white hover:bg-[#353535] dark:hover:bg-[#c5c5c5] text-white dark:text-black hover:text-white dark:hover:text-white "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-7 max-md:col-span-full flex flex-col gap-[10px] max-md:gap-[10px_0]">
            <ContactForm />
          </div>
        </div>
        <div className="mt-auto mx-auto">
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
