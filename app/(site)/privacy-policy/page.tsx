import { sanityFetch } from "@/sanity/lib/fetch";
import { privacyQuery } from "@/sanity/lib/queries";
import { PortableTextBlock } from "next-sanity";
import PortableText from "../portable-text";

export default async function Page() {
  const privacy = await sanityFetch({ query: privacyQuery });

  return (
    <div>
      <h1>Privacy policy</h1>
      <PortableText
        // className="xyz"
        value={privacy?.content as PortableTextBlock[]}
      />
    </div>
  )
}