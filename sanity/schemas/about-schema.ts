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
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike Through", value: "strike-through" },
            ],
          },
        },
      ],
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
  ],
};

export default about;
