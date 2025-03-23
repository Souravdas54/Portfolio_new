import { defineType,defineField } from "sanity";

export default defineType({
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string"
        }),
        defineField({
            name:"location",
            title:"Location",
            type:"string"
        
        }),
        defineField({
            name:"email",
            title:"Email",
            type:"string"
        }),
        defineField({
            name:"phone",
            title:"Phone no.",
            type:"string"
        }),
    ]
})