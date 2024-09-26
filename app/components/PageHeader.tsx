import React from "react"
import Image from "next/image"
import Heading from "@/app/components/Heading"
import Link from "@/app/components/Link"
import { urlForImage } from "@/sanity/lib/utils"

type Props = {
  image?: any,
  title?: string,
}

export default function Header({ title, image } : Props) {
  const src = urlForImage(image)?.height(1000).width(2000).url() as string

  return (
    <header className="overflow-hidden relative">
      <div className="py-80 md:py-112 lg:py-128 px-16 md:px-32 lg:px-48 mx-auto text-center text-content-inverted">
        <Heading level="h1" className="mb-32">Cozy hostel in the heart of Dingle</Heading>
        <Link href="/accommodation" size="large">View rooms</Link>
      </div>

      <Image
        src={src}
        width={1000}
        height={800}
        alt={image.alt}
        className="object-cover absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10"
      />

      <div className="bg-[black] bg-opacity-75 absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10" />
    </header>
  )
}