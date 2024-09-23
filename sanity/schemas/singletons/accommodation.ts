import { EyeClosedIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name: "accommodation",
    title: "Accommodation Page",
    type: "document",
    icon: EyeClosedIcon,
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
    ],
    preview: {
        prepare() {
            return {
                title: "Accommodation Page",
            };
        },
    },
});
