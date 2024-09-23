import { sanityFetch } from "@/sanity/lib/fetch";
import { accommodationQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const accommodation = await sanityFetch({ query: accommodationQuery });

  // const [post, settings] = await Promise.all([
    // sanityFetch({ query: postQuery, params }),
    // sanityFetch({ query: settingsQuery }),
  // ]);

  return (
    <div>
      <h1>{accommodation?.title}</h1>
      <p>Yarr</p>
    </div>
  )
}
