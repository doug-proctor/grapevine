import { CheckmarkIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "highlight",
  title: "Highlight",
  icon: CheckmarkIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "svg_icon",
      title: "SVG icon",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
})
