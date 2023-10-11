import { contentBlock } from "./contentBlock";

const home = {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {name: "name", title: "Name", type: "string"},
    {name: "header", title: "Header", type: "string"},
    {...contentBlock , name: "homeContent", title: "Homepage Content"},
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
    {name: "copywrite", title: "Copywrite", type: "string"},
    {...contentBlock, name: "termsContent", title: "Terms and Conditions Content"},
    {...contentBlock, name: "privacyContent", title: "Privacy Policy Content"}
  ]
}

export default home