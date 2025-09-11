"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Project {
  id: number;
  video?: { url: string };
  width?: string;
}

interface VideoTileProps {
  project: Project;
  altTitle?: string;
}
const VideoTile = (props: VideoTileProps) => {
  const { project } = props;
  return (
    <motion.div
      animate={{ y: [100, 0] }}
      transition={{ duration: 0.5 }}
      whileInView={{ y: [100, 0] }}
      className={`${
        project.width === "Full Width" ? "col-span-full" : "col-span-6"
      } max-md:col-span-full w-full h-full flex justify-center items-center`}
    >
      {project.video ? (
        <video
          src={project.video.url}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          controls
        ></video>
      ) : (
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">No video available</span>
        </div>
      )}
    </motion.div>
  );
};

export default VideoTile;
