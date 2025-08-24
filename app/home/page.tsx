import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import InteractiveImage from "../components/interactiveImage";

const HomePage = () => {
  return (
    <div className="h-screen bg-white dark:bg-[#353535] flex flex-col overflow-hidden">
      <Header />
      <InteractiveImage />
      <Footer home />
    </div>
  );
};

export default HomePage;
