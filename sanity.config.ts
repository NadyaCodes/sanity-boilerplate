import {defineConfig} from 'sanity'
import {deskTool} from "sanity/desk"

const sanityConfig = defineConfig({
projectId: "yovup7dp",
dataset: "production",
title: "Sanity Boilerplate",
apiVersion: "2023-10-10",
basePath: "/admin",
plugins: [deskTool()]
})

export default sanityConfig