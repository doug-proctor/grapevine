// import {sanityFetch} from "@/sanity/lib/fetch";
// import {postQuery, settingsQuery} from "@/sanity/lib/queries";
// import {notFound} from "next/navigation";

import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutQuery } from "@/sanity/lib/queries";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const about = await sanityFetch({ query: aboutQuery });

  // const [post, settings] = await Promise.all([
  // sanityFetch({ query: postQuery, params }),
  // sanityFetch({ query: settingsQuery }),
  // ]);

  // if (!post?._id) {
  //   return notFound();
  // }

  return (
    <div>
      <h1>{about?.title}</h1>
      <p>Yarr!!!</p>
    </div>
  )
}
