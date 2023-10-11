import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default async function About() {
  const aboutInfo = await getAbout();
  return (
    <div className="">
      <h1>{aboutInfo.name}</h1>
      <div className="flex justify-around items-center">
        <div className="">
          <PortableText value={aboutInfo.content} />
        </div>
        <div className="flex flex-col">
          <Image
            src={aboutInfo.image}
            alt={aboutInfo.alt}
            height={500}
            width={500}
            className="rounded"
          />

          <a
            href={aboutInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold no-underline p-4 border-2 border-transparent rounded bg-emerald-800 text-white hover:bg-white hover:text-emerald-800 hover:border-emerald-800 hover:shadow-md hover:shadow-purple-800 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
