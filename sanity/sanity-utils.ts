import { createClient, groq } from "next-sanity"
import type { Post } from "@/types/Post"
import clientConfig from "./config/client-config"

export async function getPosts(): Promise<Post[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
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

export async function getPost(slug: string): Promise<Post> {


  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      alt,
      url,
      content
    }`, { slug }
  )
  
}