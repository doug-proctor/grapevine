import Link from 'next/link'
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { accommodationQuery, aboutQuery } from "@/sanity/lib/queries";

export default async function Page() {
  // const accommodation = await sanityFetch({ query: accommodationQuery });
  // const about = await sanityFetch({ query: aboutQuery });

  return (
    <>
      <h1>Hello</h1>
      <p>This is page.</p>
      <p><Link href="accommodation">Accommodation</Link></p>
      <p><Link href="info-and-amenities">Info and amenities</Link></p>
    </>
  )
}