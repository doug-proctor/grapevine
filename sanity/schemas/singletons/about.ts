import { InfoOutlineIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "About Us Page",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This appears in the page heading, navigation, and accommodation module on the homepage",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "This appears in the accommodation module on the homepage",
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
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us Page",
      }
    },
  },
})
