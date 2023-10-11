import { contentBlock } from "./contentBlock"

const audio = {
  name: "audio",
  title: "Audio",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "url",
      title: "URL",
      type: "url",
    },{...contentBlock}]

}

export default audio