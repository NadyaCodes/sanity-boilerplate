import { CustomValidationRule } from "./page-schema"

const social = {
  name: "social",
  title: "Social",
  type: "document",
  fields: [        {
    name: "name",
    title: "Name",
    type: "string",
    options: {
      list: [{ title: "Instagram", value: "instagram" },
      { title: "TikTok", value: "tiktok" },
      { title: "YouTube", value: "youtube" },
        { title: "Facebook", value: "facebook" },
        { title: "Twitter/X", value: "twitter" },
        { title: "LinkedIn", value: "linkedin" },
      ],
    },
    validation: (Rule: CustomValidationRule) => Rule.required(),
  }, 
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ]
}

export default social