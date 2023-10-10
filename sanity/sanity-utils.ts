import { createClient, groq } from "next-sanity"
import type { Project } from "@/types/Project"

export async function getProjects(): Promise<Project[]> {

  const client = createClient({
    projectId: "yovup7dp",
    dataset: "production",
    apiVersion: "2023-10-10"
  })

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      alt,
      url,
      content
    }`
  )
}