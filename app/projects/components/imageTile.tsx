"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Project {
  id: number;
  image?: { url: string };
  width?: string;
}

interface ImageTileProps {
  project: Project;
  altTitle?: string;
}
const ImageTile = (props: ImageTileProps) => {
  const { project } = props;
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        project.width === "Full Width" ? "col-span-full" : "col-span-6"
      } max-md:col-span-full w-full h-full flex justify-center items-center`}
    >
      {project.image ? (
        <Image
          src={project.image.url}
          alt={props.altTitle || ""}
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}
    </motion.div>
  );
};

export default ImageTile;
