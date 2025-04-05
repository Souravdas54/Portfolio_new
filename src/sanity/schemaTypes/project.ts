import { defineField, defineType } from "sanity";

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'text'
        }),
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image'
        }),
        defineField({
            title:'Image Link',
            name:'imagelink',
            type:'string',
        })

    ]
})