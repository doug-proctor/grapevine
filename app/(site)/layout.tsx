import "../globals.css";

import { type Settings, type Cookie, type Privacy, type Accommodation, type About } from '@/sanity.types';

import { SpeedInsights } from "@vercel/speed-insights/next";
// import type { Metadata } from "next";
// import {
//   // VisualEditing,
//   // toPlainText,
//   type PortableTextBlock,
// } from "next-sanity";
import { Inter } from "next/font/google";
// import { draftMode } from "next/headers";
import { Suspense } from "react";

import Header from '../components/Header'
import Footer from '../components/Footer'

// import AlertBanner from "./alert-banner";
// import PortableText from "./portable-text";

// import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { layoutQuery } from "@/sanity/lib/queries";
// import { resolveOpenGraphImage } from "@/sanity/lib/utils";

// export async function generateMetadata(): Promise<Metadata> {
//   const settings = await sanityFetch({
//     query: layoutQuery,
//     // Metadata should never contain stega
//     stega: false,
//   });
//   const title = settings?.title || "";
//   const description = settings?.description || "";
//
//   const ogImage = resolveOpenGraphImage(settings?.ogImage);
//   let metadataBase: URL | undefined = undefined;
//   try {
//     metadataBase = settings?.ogImage?.metadataBase
//         ? new URL(settings.ogImage.metadataBase)
//         : undefined;
//   } catch {
//     // ignore
//   }
//   return {
//     metadataBase,
//     title: {
//       template: `%s | ${title}`,
//       default: title,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await sanityFetch({ query: layoutQuery });

  // console.log("___________", data)

  const accommodation = data.find(doc => doc._type === "accommodation") as Accommodation
  const settings = data.find(doc => doc._type === "settings") as Settings
  const privacy = data.find(doc => doc._type === "privacy") as Privacy
  const cookie = data.find(doc => doc._type === "cookie") as Cookie
  const about = data.find(doc => doc._type === "about") as About

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
          {/*{draftMode().isEnabled && <AlertBanner />}*/}
          <Suspense>
            <Header />
            <main>{children}</main>
            <Footer settings={settings} />
          </Suspense>

          {/*{draftMode().isEnabled && <VisualEditing />}*/}
        <SpeedInsights />
      </body>
    </html>
  );
}
