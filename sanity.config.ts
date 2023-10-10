import {defineConfig} from 'sanity'
import {deskTool} from "sanity/desk"
import schemas from './sanity/schemas'

const sanityConfig = defineConfig({
projectId: "yovup7dp",
dataset: "production",
title: "Sanity Boilerplate",
apiVersion: "2023-10-10",
basePath: "/admin",
plugins: [deskTool()],
schema: {
  types: schemas
}
})

export default sanityConfig