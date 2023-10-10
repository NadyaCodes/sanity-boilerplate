import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
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
    </div>
  );
}
