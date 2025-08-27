import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import localFont from "next/font/local";

const GilroyBold = localFont({
  src: "../fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
});

const page = () => {
  return (
    <div className="h-screen bg-white dark:bg-[#353535] flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col p-[100px_50px_30px_50px] max-md:p-[20px_20px_50px_20px]">
        <h1
          className="font-Gilroy font-bold text-[60px] max-md:text-[30px] leading-[60px] max-md:leading-[32px]"
          style={{ fontFamily: GilroyBold.style.fontFamily }}
        >
          Projects
        </h1>
      </div>
      <Footer home />
    </div>
  );
};

export default page;
