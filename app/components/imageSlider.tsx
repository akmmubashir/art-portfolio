"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import Image from "next/image";
import { ArrowNextIcon } from "./icons";

type Slide = {
  id: number;
  width: string;
  image?: { url: string };
};

type Props = {
  imageList?: Slide[];
  autoplayMs?: number;
  height?: string;
};

type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ImageSlider: React.FC<Props> = ({
  imageList = [],
  autoplayMs = 3000,
}) => {
  // Custom Arrow components for react-slick
  const PrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        aria-label="Previous slide"
        onClick={onClick}
        className="cursor-pointer max-md:hidden absolute left-[30px] md:top-1/2 max-md:bottom-[10px] -translate-y-1/2 z-20 transition max-md:left-[10px] hover:animate-pulse"
      >
        {/* Rotate next icon to point left for prev */}
        <span className="block rotate-180">
          <ArrowNextIcon
            className="stroke-black dark:stroke-white"
            strokeWidth="1"
            width="40"
            height="40"
          />
        </span>
      </button>
    );
  };

  const NextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        aria-label="Next slide"
        onClick={onClick}
        className="cursor-pointer max-md:hidden absolute right-[30px] md:top-1/2 max-md:bottom-[10px] -translate-y-1/2 z-20 transition max-md:right-[10px] hover:animate-pulse"
      >
        <ArrowNextIcon
          className="stroke-black dark:stroke-white"
          strokeWidth="1"
          width="40"
          height="40"
        />
      </button>
    );
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: imageList.length > 1,
    autoplaySpeed: autoplayMs,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipe: true,
    adaptiveHeight: false,
  };

  return (
    <div
      className={`relative w-full h-[600px] max-md:h-[460px] bg-[#f1f1f1] dark:bg-[#303030] rounded-[12px] overflow-hidden shadow-xl md:mt-[40px]`}
    >
      <Slider {...settings}>
        {imageList.map((image, idx) => (
          <div key={image.id ?? idx} className="overflow-hidden">
            <Image
              src={image?.image?.url || ""}
              alt={`slide-${image?.id ?? idx}`}
              width={1000}
              height={680}
              className="w-full h-[600px] max-md:h-[460px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
