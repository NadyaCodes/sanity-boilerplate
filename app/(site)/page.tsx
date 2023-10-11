import { getDimensions } from "@/helpers/getDimensions";
import { getHomeContent, getPosts } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  const homeContent = await getHomeContent();

  const heroImageDimensions = getDimensions(homeContent.image);

  return (
    <div className="text-center">
      <h1 className="w-fit mx-auto">Welcome to my Boilerplate</h1>
      <div className="text-lg my-5">
        I have many featured posts which can be viewed here:
      </div>
      <div className="my-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
        {posts.map((element) => {
          return (
            <Link
              key={element._id}
              className="flex flex-col place-self-center w-full justify-between font-semibold border-2 border-slate-700 rounded-lg p-3 hover:scale-105 hover:shadow-md transition"
              style={{ maxWidth: "510px" }}
              href={`/posts/${element.slug}`}
            >
              <div className="">
                {element.image && (
                  <Image
                    src={element.image}
                    alt={
                      element.alt || element.name || "Description not available"
                    }
                    width={500}
                    height={335}
                    className="object-cover rounded-lg border border-gray-500"
                  />
                )}
              </div>

              <div className="">{element.name}</div>
            </Link>
          );
        })}
      </div>
      <h2>_____________</h2>
      <h1>{homeContent?.header}</h1>
      <div className="flex flex-row justify-around items-center">
        <div className="m-3">
          <PortableText value={homeContent.homeContent} />
        </div>
        <div className="">
          <div className="max-w-full">
            <Image
              src={homeContent.image}
              alt={
                homeContent.alt ||
                homeContent.header ||
                "No Description Available"
              }
              width={heroImageDimensions[0]}
              height={heroImageDimensions[1]}
              layout="responsive"
              className="rounded-lg border border-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
