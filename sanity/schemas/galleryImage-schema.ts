const galleryImage = {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default galleryImage;
