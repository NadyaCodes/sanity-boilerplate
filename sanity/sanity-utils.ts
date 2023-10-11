import { createClient, groq } from "next-sanity"
import type { Post } from "@/types/Post"
import type { Page } from "@/types/Page"
import type { About } from "@/types/About"
import type { GalleryImage } from "@/types/GalleryImage"
import type { Media } from "@/types/Media"
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

export async function getVideos(): Promise<Media[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "video"]  | order(name asc){
      _id,
      _createdAt,
      name,
      url,
      content
    }`
  )
}

export async function getAudio(): Promise<Media[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "audio"]  | order(name asc){
      _id,
      _createdAt,
      name,
      url,
      content
    }`
  )
}