import { getContact } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { getDimensions } from "@/helpers/getDimensions";

export default async function Contact() {
  const contactInfo = await getContact();

  return (
    <div className="">
      <h1 className="text-center">Contact me</h1>
      <div>
        {contactInfo.map((element) => {
          let dimensions = [300, 300];
          if (element.image) {
            dimensions = getDimensions(element.image);
          }
          return (
            <div
              className="flex flex-col md:flex-row mb-20 max-w-5xl flex-grow justify-between mx-auto"
              key={element._id}
            >
              <div className="m-2">
                <PortableText value={element.content} />
              </div>
              {element.image && (
                <Image
                  src={element.image}
                  alt={
                    element.alt || element.name || "No Description Available"
                  }
                  width={dimensions[0]}
                  height={dimensions[1]}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
