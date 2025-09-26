import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex-1 h-full">
      <Header />
      <div className="flex-1 items-center ">
        <h1 className="text-[60px] max-md:text-[30px]">Professional</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
