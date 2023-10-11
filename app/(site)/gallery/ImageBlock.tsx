"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeaturedImage from "./FeaturedImage";

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
};

export default function ImageBlock({ imageObject }: Props) {
  const [featured, setFeatured] = useState<boolean>(false);

  return (
    <div className="transition-all">
      {featured === true ? (
        <FeaturedImage imageObject={imageObject} setFeatured={setFeatured} />
      ) : (
        <div onClick={() => setFeatured(true)}>
          <Image
            src={imageObject.image}
            alt={
              imageObject.alt || imageObject.name || "Description not available"
            }
            width={imageObject.width}
            height={imageObject.height}
            className="bg-slate-300 flex w-full items-center hover:scale-105 transition-all"
          />
        </div>
      )}
    </div>
  );
}
