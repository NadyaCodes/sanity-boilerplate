import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    page: string;
  };
};

export default async function CustomPage({ params }: Props) {
  const page = await getPage(params.page);
  return (
    <div className="">
      <h1>{page.name}</h1>
      <div className="">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
