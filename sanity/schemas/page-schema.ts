interface CustomValidationRule {
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
  ]
}

export default page