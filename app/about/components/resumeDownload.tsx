"use client";
import React from "react";
import { DownloadIcon } from "@/app/components/icons";

const ResumeDownload = ({ resume }: { resume?: { url: string } }) => {
  return (
    <button
      onClick={() => window.open(resume?.url, "_blank")}
      className="cursor-pointer w-[160px] max-md:w-[120px]"
    >
      <DownloadIcon
        className="fill-black dark:fill-white"
        width="100%"
        height="100%"
      />
    </button>
  );
};

export default ResumeDownload;
