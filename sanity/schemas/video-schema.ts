const video = {
  name: "video",
  title: "Videos",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "url",
      title: "URL",
      type: "url",
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
    },]

}

export default video