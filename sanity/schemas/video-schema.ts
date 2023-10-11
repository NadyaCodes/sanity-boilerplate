import { contentBlock } from "./contentBlock"

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
    },{...contentBlock}
  ]

}

export default video