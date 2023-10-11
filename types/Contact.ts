import { PortableTextBlock } from "sanity";

export type Contact = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  alt: string;
  content: PortableTextBlock[]
}