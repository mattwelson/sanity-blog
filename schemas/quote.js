import FormatQuote from "react-icons/lib/md/format-quote"

export default {
  name: "quote",
  type: "object",
  title: "Quote",
  icon: FormatQuote,
  fields: [
    {
      name: "quoteText",
      type: "blockContentSimple",
      title: "Quote",
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "attribution",
      type: "string",
      title: "Attribution",
      description: "Optional",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: "quoteText",
      subtitle: "attribution",
    },
  },
}
