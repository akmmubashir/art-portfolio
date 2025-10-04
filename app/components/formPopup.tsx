"use client";
import React, { useState } from "react";
import { ArrowIcon } from "./icons";
import ContactForm from "./contactForm";

const FormPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-[10px] cursor-pointer text-textDark dark:text-textLight"
      >
        <span className="max-md:hidden">start a project</span>
        <ArrowIcon className="fill-black dark:fill-white" />
      </button>
      {open ? (
        <div
          onClick={() => setOpen(false)}
          className="fixed h-screen top-0 left-0 right-0 z-50 w-full bg-black/60 flex items-center justify-center p-[20px]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[500px] max-md:w-full bg-white dark:bg-[#353535] p-[40px] max-md:p-[20px]"
          >
            <ContactForm closePopup={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default FormPopup;
