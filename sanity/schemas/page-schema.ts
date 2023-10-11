import { contentBlock } from "./contentBlock";

export interface CustomValidationRule {
  required: () => CustomValidationRule;
}


const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {name: "name", title: "Name", type: "string", validation: (Rule: CustomValidationRule) => Rule.required(),},
    {name: "slug", title: "Slug", type: "slug", options: {
      source: "name"
    }, validation: (Rule: CustomValidationRule) => Rule.required(),},
    {...contentBlock}
  ]
}

export default page