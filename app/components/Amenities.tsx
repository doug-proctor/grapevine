import React from "react"
import Image from "next/image"
import { sanityFetch } from "@/sanity/lib/fetch"
import { amenitiesQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/utils"
import { type Amenity } from "@/sanity.types"

const Amenity = ({ image, name, className }: { image?: any, name?: string, className: string }) => {
  const src = urlForImage(image)?.height(80).width(80).url() as string

  return (
    <div className={`${className} text-center`}>
      <Image src={src} width={80} height={80} alt={image?.alt} className="mx-auto" />
      <div>{name}</div>
    </div>
  )
}

export default async function Amenities() {
  const amenities = await sanityFetch({ query: amenitiesQuery }) as Amenity[]

  return (
    <section className="px-16 py-32 md:py-64 lg:px-32 bg-background-secondary grid gap-32 md:gap-64 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {amenities.map(amenity => (
        <Amenity key={amenity._id} className="flex-1" name={amenity.name} image={amenity.icon} />
      ))}
    </section>
  )
}