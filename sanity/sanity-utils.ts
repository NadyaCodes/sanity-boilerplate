import { createClient, groq } from "next-sanity"
import type { Post } from "@/types/Post"
import type { Page } from "@/types/Page"
import type { About } from "@/types/About"
import type { GalleryImage } from "@/types/GalleryImage"
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

export async function getExtraPages(): Promise<Page[]> {
  

  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      content
    }`
  )
}


export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      content
    }`, { slug }
  )
  
}

export async function getAbout(): Promise<About> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "about"][0]{
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      alt,
      content,
      "resume": resume.asset->url
    }`
  )
}

export async function getGallery(): Promise<GalleryImage[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "galleryImage"]  | order(name asc){
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      alt
    }`
  )
}