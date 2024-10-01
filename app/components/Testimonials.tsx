import React from "react"
import Image from "next/image"
import { sanityFetch } from "@/sanity/lib/fetch"
import { testimonialsQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/utils"
import { type Testimonial } from "@/sanity.types"

type Props = {
  image?: any,
  name?: string,
  comment?: string,
  className: string,
}

const Testimonial = ({ image, name, comment, className }: Props) => {
  const src = urlForImage(image)?.height(188).width(188).url() as string

  return (
    <div className={`${className} text-center text-16 md:px-16 space-y-8 max-w-[500px] mx-auto`}>
      <Image src={src} width={94} height={94} alt={image?.alt} className="mx-auto rounded-full" />
      <div>{comment}</div>
      <div className="text-content-secondary italic">{name}</div>
    </div>
  )
}

export default async function Amenities() {
  const testimonials = await sanityFetch({ query: testimonialsQuery }) as Testimonial[]

  return (
    <section className="px-16 py-32 md:py-64 space-y-32 sm:space-y-16 md:space-y-0 bg-background-primary grid gap-16 md:gap-24 grid-cols-1 md:grid-cols-2 min-[800px]:grid-cols-3">
      {testimonials.map(testimonial => (
        <Testimonial
          comment={testimonial.comment}
          image={testimonial.picture}
          name={testimonial.name}
          key={testimonial._id}
          className="flex-1"
        />
      ))}
    </section>
  )
}