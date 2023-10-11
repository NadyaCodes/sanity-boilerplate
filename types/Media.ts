import { PortableTextBlock } from "sanity";

export type Media = {
  _id: string;
  _createdAt: Date;
  name: string;
  url: string;
  content: PortableTextBlock[]
}
