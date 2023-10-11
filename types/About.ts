import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  alt: string,
  content: PortableTextBlock[];
  resume: string;
}
