import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const element = await getPost(params.slug);

  return (
    <div className="">
      <h1 className="w-fill text-center mx-auto pb-10">{element.name}</h1>
      <div>
        <PortableText value={element.content} />
      </div>
      {element.image && (
        <Image
          src={element.image}
          alt={element.alt || element.name || "Description not available"}
          width={1000}
          height={600}
          className="object-cover rounded-lg border border-gray-500"
        />
      )}
    </div>
  );
}
