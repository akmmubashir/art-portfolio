import React from "react";
import VideoTile from "./videoTile";

export interface VideoProject {
  id: number;
  width?: string;
  video?: { url: string };
}

type Props = {
  dataList: VideoProject[];
  pageTitle?: string;
};

const VideoGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-12 gap-[10px] max-md:gap-[20px_0]">
      {props.dataList?.map((item) => (
        <VideoTile
          key={item.id}
          project={item}
          altTitle={`${props.pageTitle || ""}${item.id}`}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
