"use client";
import React from "react";
import Image from "next/image";

type Props = {
  imageObject: {
    width: number;
    height: number;
    _id: string;
    _createdAt: string;
    name: string;
    image: string;
    alt: string;
  };
  setFeatured: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FeaturedImage({ imageObject, setFeatured }: Props) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10"
      onClick={() => {
        setFeatured(false);
      }}
    >
      <div className="bg-black absolute top-0 left-0 w-screen h-screen opacity-75" />
      <div className="relative">
        <div
          className="max-w-screen w-screen md:min-w-[500px] md:w-full h-auto"
          onClick={() => {
            setFeatured(false);
          }}
        >
          <Image
            src={imageObject.image}
            alt={
              imageObject.alt || imageObject.name || "Description not available"
            }
            layout="responsive"
            width={imageObject.width}
            height={imageObject.height}
            style={{ animation: "scaleIn 0.6s ease-in forwards" }}
            className="transition-all"
          />
        </div>
      </div>
    </div>
  );
}
