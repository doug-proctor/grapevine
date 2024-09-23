import { InfoOutlineIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name: "privacy",
    title: "Privacy Policy Page",
    type: "document",
    icon: InfoOutlineIcon,
    fields: [
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Privacy Policy Page",
            };
        },
    },
});
