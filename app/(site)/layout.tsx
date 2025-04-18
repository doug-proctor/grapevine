import "../globals.css"

import { type Settings } from "@/sanity.types"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { Poppins } from "next/font/google"
import { Suspense } from "react"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import DevTool from "@/app/components/DevTool"

import { sanityFetch } from "@/sanity/lib/fetch"
import { layoutQuery, settingsQuery } from "@/sanity/lib/queries"
import { resolveOpenGraphImage } from "@/sanity/lib/utils"

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  }) as Settings

  const title = settings?.tab_title || ""
  const description = settings?.meta_description || ""

  const ogImage = resolveOpenGraphImage(settings?.ogImage)
  let metadataBase: URL | undefined = undefined
  try {
    // @ts-ignore
    metadataBase = settings?.ogImage?.metadataBase
    // @ts-ignore
      ? new URL(settings.ogImage.metadataBase)
      : undefined
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    // description: toPlainText(description),
    description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

const poppins = Poppins({
  variable: "--font-poppins",
  weight: [
    "400", // normal
    "500", // medium
    "800"  // bold
  ],
  subsets: ["latin"],
  display: "swap",
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await sanityFetch({ query: layoutQuery })

  const settings = data.find(doc => doc._type === "settings") as Settings

  return (
    <html lang="en" className={`${poppins.variable} text-18 text-content`}>
      <body className="md:mt-64">
        <Suspense>
          <Header />
          <main>{children}</main>
          <Footer settings={settings} />
        </Suspense>
        <SpeedInsights />
        <GoogleAnalytics gaId={settings.ga_tracking_id!} />
        {process.env.NODE_ENV === "development" && <DevTool />}
      </body>
    </html>
  )
}
