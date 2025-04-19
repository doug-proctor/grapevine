import { sanityFetch } from "@/sanity/lib/fetch"
import { highlightsQuery } from "@/sanity/lib/queries"
import { type Highlight } from "@/sanity.types"

const Highlight = ({ svg, name }: { svg?: string, name?: string }) => {
  return (
    <div className="flex-1 text-center">
      <div className="inline-block scale-105 mb-8" dangerouslySetInnerHTML={{ __html: svg! }} />
      <div>{name}</div>
    </div>
  )
}

export default async function Component() {
  const highlights = await sanityFetch({ query: highlightsQuery }) as Highlight[]

  return (
    <section className="px-16 py-32 md:py-64 lg:px-32 bg-background-secondary grid gap-32 md:gap-64 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {highlights.map(highlight => (
        <Highlight key={highlight._id} name={highlight.name} svg={highlight.svg_icon} />
      ))}
    </section>
  )
}