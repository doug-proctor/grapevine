import { sanityFetch } from "@/sanity/lib/fetch"
import { amenitiesQuery } from "@/sanity/lib/queries"
import { type Amenity } from "@/sanity.types"

const Amenity = ({ svg, name }: { svg?: string, name?: string }) => {
  return (
    <div className="flex-1 text-center">
      <div className="inline-block scale-105 mb-8" dangerouslySetInnerHTML={{ __html: svg! }} />
      <div>{name}</div>
    </div>
  )
}

export default async function Amenities() {
  const amenities = await sanityFetch({ query: amenitiesQuery }) as Amenity[]

  return (
    <section className="px-16 py-32 md:py-64 lg:px-32 bg-background-secondary grid gap-32 md:gap-64 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {amenities.map(amenity => (
        <Amenity key={amenity._id} name={amenity.name} svg={amenity.svg_icon} />
      ))}
    </section>
  )
}