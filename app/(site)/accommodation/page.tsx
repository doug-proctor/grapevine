import { sanityFetch } from "@/sanity/lib/fetch"
import { accommodationQuery } from "@/sanity/lib/queries"

export default async function Page() {
  const accommodation = await sanityFetch({ query: accommodationQuery })

  return (
    <div>
      <h1>{accommodation?.title}</h1>
      <p>Yarr</p>
    </div>
  )
}
