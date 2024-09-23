import Link from 'next/link'
import { sanityFetch } from "@/sanity/lib/fetch";
import { accommodationQuery, aboutQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const accommodation = await sanityFetch({ query: accommodationQuery });
  const about = await sanityFetch({ query: aboutQuery });

  return (
    <>
      <h1>Hello</h1>
      <p>This is page.</p>
      <p><Link href={accommodation.slug?.current!}>{accommodation.title}</Link></p>
      <p><Link href={about.slug?.current!}>{about.title}</Link></p>
    </>
  )
}