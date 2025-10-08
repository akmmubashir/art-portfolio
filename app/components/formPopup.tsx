"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "./icons";
import ContactForm from "./contactForm";

const FormPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
        <motion.div
          onClick={() => setOpen(false)}
          className="fixed h-screen top-0 left-0 right-0 z-50 w-full bg-black/60 flex items-center justify-center p-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="w-[500px] max-md:w-full bg-white dark:bg-[#353535] p-[40px] max-md:p-[20px]"
          >
            <ContactForm closePopup={() => setOpen(false)} />
          </motion.div>
        </motion.div>
      ) : null}
    </React.Fragment>
  );
};

export default FormPopup;
