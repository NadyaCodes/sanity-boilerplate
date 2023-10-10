import {defineConfig} from 'sanity'
import {deskTool} from "sanity/desk"
import project from './sanity/schemas/project-schema'

const sanityConfig = defineConfig({
projectId: "yovup7dp",
dataset: "production",
title: "Sanity Boilerplate",
apiVersion: "2023-10-10",
basePath: "/admin",
plugins: [deskTool()],
schema: {
  types: [project]
}
})

export default sanityConfig