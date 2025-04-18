import React from "react"
import Image from "next/image"
import Heading from "@/app/components/Heading"
import Link from "@/app/components/Link"
import { urlForImage } from "@/sanity/lib/utils"
import HostelWorldImage from "@/app/hostel.png"

const testimonials = [
  "“Great value for money, clean, and perfect location in center of Dingle.” — Eric 🇨🇦",
  "“The staff were really helpful, patient and understanding.” — James 🇮🇪",
  "“The location is so close to everything and it was really well priced.” — Nicholas 🇦🇺",
  "“Small breakfast was included, people we're amazingly nice and friendly. I will come back again...” — Kerber 🇩🇪",
  "“Staff are very friendly and helpful, it's a good place to meet other travellers” — Shay 🇮🇪",
  "“Value for money. Proximity to the centre of town. Facilities on site” — Ngaire 🇦🇺",
  "“Breakfast is included. The location is perfect. Very comfortable kitchen” — Elena 🇺🇦",
  "“Excellent location, wonderful staff, clean facilities and comfortable beds” — Meighan 🇮🇪",
  "“Very well run by very cool, nice, professional people. Always happy to answer questions” — Meighan 🇮🇪",
]

const randomTestimonial = () => testimonials[Math.floor(Math.random() * testimonials.length)]

type Props = {
  image?: any,
  title?: string,
  showCta?: boolean,
}

export default function Header({ title, image, showCta } : Props) {
  const src = urlForImage(image)?.height(1000).width(2000).url() as string

  return (
    <header className="overflow-hidden relative">
      <Image
        src={src}
        width={1000}
        height={800}
        alt={image.alt}
        className="object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full"
      />
      <div className="bg-[black] bg-opacity-75 absolute top-0 bottom-0 left-0 right-0 h-full w-full" />
      <div className="py-80 md:py-112 lg:py-128 px-16 md:px-32 lg:px-48 mx-auto text-center text-content-inverted z-10 relative">
        <Heading level="h1">{title}</Heading>
        <>
          <p className="mt-16 text-[20px]">{randomTestimonial()}</p>
          <div className="mt-32 space-x-16">
            <Image
              className="rounded-4 inline"
              src={HostelWorldImage}
              alt={image.alt}
              height={50}
            />
          </div>
          {showCta && (
            <div className="mt-16 sm:mt-32">
              <Link href={process.env.NEXT_PUBLIC_BOOKING_URL!} size="large">
                  Book now
              </Link>
            </div>
          )}
        </>
      </div>
    </header>
  )
}