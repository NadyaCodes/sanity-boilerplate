import { contentBlock } from "./contentBlock";

const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {...contentBlock},
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
  ],
};

export default about;
