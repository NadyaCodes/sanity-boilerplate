import { contentBlock } from "./contentBlock"

const contact = {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [        {
    name: "name",
    title: "Name",
    type: "string",
  }, 
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
    {...contentBlock}
  ]
}

export default contact