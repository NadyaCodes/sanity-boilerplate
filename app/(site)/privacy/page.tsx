import { getPrivacyContent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import React from "react";

export default async function Privacy() {
  const content = await getPrivacyContent();
  return (
    <div>
      <h1>Privacy Policy</h1>
      <PortableText value={content.privacyContent} />
    </div>
  );
}
