"use client"
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision"
import { PluginOptions, defineConfig } from "sanity"
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash"
import {
  // presentationTool,
  // defineDocuments,
  // defineLocations,
  type DocumentLocation,
} from "sanity/presentation"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api"
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings"
import { assistWithPresets } from "@/sanity/plugins/assist"

// Singleton schemas
import accommodation from "@/sanity/schemas/singletons/accommodation"
import settings from "@/sanity/schemas/singletons/settings"
import privacy from "@/sanity/schemas/singletons/privacy"
import cookie from "@/sanity/schemas/singletons/cookie"
import about from "@/sanity/schemas/singletons/about"

// Document schemas
import testimonial from "@/sanity/schemas/documents/testimonial"
import amenity from "@/sanity/schemas/documents/amenity"
import author from "@/sanity/schemas/documents/author"
import post from "@/sanity/schemas/documents/post"
import faq from "@/sanity/schemas/documents/faq"

import { resolveHref } from "@/sanity/lib/utils"

const homeLocation = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation

// const SANITY_STUDIO_PREVIEW_URL = (
//     process.env.SANITY_STUDIO_PREVIEW_URL
//     || 'http://localhost:3000'
// )

export default defineConfig({
  basePath: studioUrl, projectId, dataset,
  schema: {
    types: [
      // Singletons
      accommodation,
      settings,
      privacy,
      cookie,
      about,

      // Documents
      testimonial,
      amenity,
      author,
      post,
      faq,
    ],
  },
  plugins: [
    // presentationTool({
    //   resolve: {
    //     mainDocuments: defineDocuments([
    //       {
    //         route: "/posts/:slug",
    //         filter: `_type == "post" && slug.current == $slug`,
    //       },
    //     ]),
    //     locations: {
    //       settings: defineLocations({
    //         locations: [homeLocation],
    //         message: "This document is used on all pages",
    //         tone: "caution",
    //       }),
    //       post: defineLocations({
    //         select: {
    //           title: "title",
    //           slug: "slug.current",
    //         },
    //         resolve: (doc) => ({
    //           locations: [
    //             {
    //               title: doc?.title || "Untitled",
    //               href: resolveHref("post", doc?.slug)!,
    //             },
    //             homeLocation,
    //           ],
    //         }),
    //       }),
    //     },
    //   },
    //   // previewUrl: { previewMode: { enable: "/api/draft" } },
    //   previewUrl: SANITY_STUDIO_PREVIEW_URL,
    // }),
    structureTool({
      structure: pageStructure([
        settings,
        accommodation,
        about,
        privacy,
        cookie,
      ])
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name, cookie.name, privacy.name, accommodation.name, about.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Sets up AI Assist with preset prompts
    // https://www.sanity.io/docs/ai-assist
    assistWithPresets(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
})
