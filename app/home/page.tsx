import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveImage from "../components/interactiveImage";
import Navigation from "../components/navigation";

const HomePage = () => {
  return (
    <div className="h-screen p-[50px] max-md:p-[20px] bg-white dark:bg-gray-800 flex flex-col overflow-hidden">
      <Header />
      <InteractiveImage />
      <div className="md:hidden">
        <Navigation />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
