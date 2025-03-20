// import { title } from "process";
import { defineType, defineField } from "sanity";

export default defineType({
    name: "about",
    title: 'About me',
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: "string"
        }),
        defineField({
            name: 'description',
            title: 'Paragraph',
            type: 'text'
        }),
        defineField({
            name: 'image',
            title: 'about image',
            type: 'image'
        }),
    ]
})