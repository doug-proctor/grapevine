import { sanityFetch } from "@/sanity/lib/fetch"
import { privacyQuery } from "@/sanity/lib/queries"
import { PortableTextBlock } from "next-sanity"
import PortableText from "@/app/components//PortableText"
import Heading from "@/app/components//Heading"

export default async function Page() {
  const privacy = await sanityFetch({ query: privacyQuery })

  return (
    <div>
      <Heading level="h1">Privacy policy</Heading>
      <PortableText
        // className="xyz"
        value={privacy?.content as PortableTextBlock[]}
      />
    </div>
  )
}