import { InfoOutlineIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
    name: "cookie",
    title: "Cookie Policy Page",
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
                title: "Cookie Policy Page",
            };
        },
    },
});
