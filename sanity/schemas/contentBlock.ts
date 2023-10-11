export const contentBlock = {
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
}