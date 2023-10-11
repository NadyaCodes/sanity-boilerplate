import { getSocial } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import * as twitterLogo from "@/public/icons/twitter.svg";
import * as facebookLogo from "@/public/icons/facebook.png";
import * as instagramLogo from "@/public/icons/instagram.svg";
import * as linkedinLogo from "@/public/icons/linkedin.png";
import * as youtubeLogo from "@/public/icons/youtube.png";
import * as tiktokLogo from "@/public/icons/tiktok.svg";

export default async function Socials() {
  const socialsArray = await getSocial();
  const logoObject = {
    twitter: twitterLogo.default,
    facebook: facebookLogo.default,
    instagram: instagramLogo.default,
    linkedin: linkedinLogo.default,
    youtube: youtubeLogo.default,
    tiktok: tiktokLogo.default,
  };
  return (
    <div className="flex flex-wrap h-fit place-self-center justify-end">
      {socialsArray.map((element) => {
        return (
          <a
            key={element._id}
            href={element.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline not-italic p-1.5 bg-emerald-800 rounded-lg m-2 hover:bg-emerald-500 transition-all"
          >
            {logoObject[element.name as keyof typeof logoObject] ? (
              <div className="w-6 h-6 flex items-center justify-center transition-all">
                <Image
                  src={logoObject[element.name as keyof typeof logoObject].src}
                  alt={element.name}
                  width={80}
                  height={80}
                  layout="intrinsic"
                  objectFit="cover"
                  style={{ filter: "brightness(10) grayscale(100%)" }}
                />
              </div>
            ) : (
              element.name
            )}
          </a>
        );
      })}
    </div>
  );
}
