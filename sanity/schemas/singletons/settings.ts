import { CogIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "name",
      title: "Hostel name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      description: "The hostel’s street address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ga_tracking_id",
      title: "Google Analytics tracking ID",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "channel_manager_id",
      title: "Channel manager ID",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "meta_description",
      description:
        "Used for the <meta> description tag for SEO",
      title: "Meta tag Description",
      type: "string",
    }),
    // defineField({
    //   name: "footer",
    //   description:
    //     "This is a block of text that will be displayed at the bottom of the page.",
    //   title: "Footer Info",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       type: "block",
    //       marks: {
    //         annotations: [
    //           {
    //             name: "link",
    //             type: "object",
    //             title: "Link",
    //             fields: [
    //               {
    //                 name: "href",
    //                 type: "url",
    //                 title: "Url",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     }),
    //   ],
    // }),

    // defineField({
    //   name: "ogImage",
    //   title: "Open Graph Image",
    //   type: "image",
    //   description: "Displayed on social cards and search engine results.",
    //   options: {
    //     hotspot: true,
    //     aiAssist: {
    //       imageDescriptionField: "alt",
    //     },
    //   },
    //   fields: [
    //     defineField({
    //       name: "alt",
    //       description: "Important for accessibility and SEO.",
    //       title: "Alternative text",
    //       type: "string",
    //       validation: (rule) => {
    //         return rule.custom((alt, context) => {
    //           if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
    //             return "Required";
    //           }
    //           return true;
    //         });
    //       },
    //     }),
    //     defineField({
    //       name: "metadataBase",
    //       type: "url",
    //       description: (
    //         <a
    //           href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
    //           rel="noreferrer noopener"
    //         >
    //           More information
    //         </a>
    //       ),
    //     }),
    //   ],
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      }
    },
  },
})
