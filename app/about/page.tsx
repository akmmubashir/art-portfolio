import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const page = () => {
  return (
    <div className="md:h-screen p-[50px] bg-white dark:bg-gray-800 flex flex-col md:overflow-hidden">
      <Header />
      <div className="flex-1 flex flex-col">
        <div>About</div>
        <div className="mt-auto mx-auto">
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
