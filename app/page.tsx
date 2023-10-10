import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="text-center py-10">
      <h1 className="text-6xl font-extrabold my-10 bg-gradient-to-r from-emerald-950 to-emerald-800 w-fit mx-auto bg-clip-text text-transparent drop-shadow-2xl py-5">
        Welcome to my Boilerplate
      </h1>
      <div className="text-lg my-5">
        I have many featured projects which can be viewed here:
      </div>
      <div className="my-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
        {projects.map((element) => {
          return (
            <div
              key={element._id}
              className="flex flex-col place-self-center w-full justify-between font-semibold border-2 border-slate-700 rounded-lg p-3 hover:scale-105 hover:shadow-md transition"
              style={{ maxWidth: "510px" }}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
