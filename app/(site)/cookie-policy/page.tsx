import { sanityFetch } from "@/sanity/lib/fetch";
import { cookieQuery } from "@/sanity/lib/queries";
import { PortableTextBlock } from "next-sanity";
import PortableText from "../portable-text";

export default async function Page() {
  const cookie = await sanityFetch({ query: cookieQuery });

  return (
    <div>
      <h1>Cookie policy</h1>
      <PortableText
        // className="xyz"
        value={cookie?.content as PortableTextBlock[]}
      />
    </div>
  )
}