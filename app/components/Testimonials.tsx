import React from "react"
import Image from "next/image"
import { sanityFetch } from "@/sanity/lib/fetch"
import { testimonialsQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/utils"
import { type Testimonial } from "@/sanity.types"

const Star = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
  stroke="currentColor" strokeWidth="1" strokeLinecap="round"
  className="text-award inline lucide lucide-star">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>

const Stars = () => <><Star /><Star /><Star /><Star /><Star /></>

type Props = {
  image?: any,
  name?: string,
  comment?: string,
}

const Testimonial = ({image, name, comment}: Props) => {
  const src = urlForImage(image)?.height(188).width(188).url() as string

  return (
    <div className="text-16 p-16 sm:p-24 lg:p-32 space-y-8 max-w-[500px] mx-auto bg-background rounded-24">
      <div className="flex items-center">
        <div>
          <Image src={src} width={94} height={94} alt={image?.alt} className="mx-auto rounded-full" />
        </div>
        <div className="flex-1 ml-8 font-medium text-18">
          <div>
            {name}
          </div>
          <div>
            <Stars />
          </div>
        </div>
      </div>
      <div className="xtext-center">{comment}</div>
    </div>
  )
}

export default async function Amenities() {
  const testimonials = await sanityFetch({ query: testimonialsQuery }) as Testimonial[]

  return (
    <section className="px-16 py-32 md:py-64 space-y-32 sm:space-y-16 md:space-y-0 grid gap-16 md:gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map(testimonial => (
        <Testimonial
          comment={testimonial.comment}
          image={testimonial.picture}
          name={testimonial.name}
          key={testimonial._id}
        />
      ))}
    </section>
  )
}