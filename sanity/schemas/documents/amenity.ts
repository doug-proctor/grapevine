import { CheckmarkIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "amenity",
  title: "Amenity",
  icon: CheckmarkIcon,
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return "Required"
              }
              return true
            })
          },
        },
      ],
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      // validation: rule => rule.custom((_, context) => {
      //   if (context.document?.promoted) {
      //     return {
      //       message: "An image is required because the amenity is promoted to the Info & Amenities page",
      //     }
      //   }
      //   return true
      // })
    }),
  ],
})
