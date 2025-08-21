import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveImage from "../components/interactiveImage";

const HomePage = () => {
  return (
    <div className="h-screen p-[50px] bg-white text-black dark:bg-gray-800 dark:text-white flex flex-col overflow-hidden">
      <Header />
      <InteractiveImage />
      <Footer />
    </div>
  );
};

export default HomePage;
