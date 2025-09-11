import React from "react";
import ImageTile from "./imageTile";

interface ProjectImage {
  id: number;
  width: string;
  image?: { url: string };
}

type Props = {
  dataList: ProjectImage[];
  pageTitle?: string;
};

const ImageGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-12 gap-[10px] max-md:gap-[20px_0]">
      {props.dataList?.map((item) => (
        <ImageTile
          key={item.id}
          project={item}
          altTitle={`${props.pageTitle || ""}${item.id}`}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
