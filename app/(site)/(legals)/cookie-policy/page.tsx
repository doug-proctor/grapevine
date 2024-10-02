import { sanityFetch } from "@/sanity/lib/fetch"
import { cookieQuery } from "@/sanity/lib/queries"
import { PortableTextBlock } from "next-sanity"
import PortableText from "@/app/components/PortableText"
import Heading from "@/app/components/Heading"

export default async function Page() {
  const cookie = await sanityFetch({ query: cookieQuery })

  return (
    <div>
      <Heading level="h1">Cookie policy</Heading>
      <PortableText
        // className="xyz"
        value={cookie?.content as PortableTextBlock[]}
      />
    </div>
  )
}