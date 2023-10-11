import { getTermsContent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import React from "react";

export default async function Terms() {
  const content = await getTermsContent();

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <PortableText value={content.termsContent} />
    </div>
  );
}
