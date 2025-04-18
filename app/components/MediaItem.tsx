import Image from "next/image"
import Heading from "@/app/components/Heading"
import { urlForImage } from "@/sanity/lib/utils"
import Link from "@/app/components/Link"

type Props = {
  image?: any;
  title?: string;
  reverse?: boolean;
  description?: string;
  link?: { label: string; href: string };
}

export default function MediaItem({ image, title, description, link, reverse }: Props) {
  const src = urlForImage(image)?.height(1000).width(2000).url() as string

  return (
    <section className={`flex flex-col gap-0 md:flex-row ${reverse && "md:flex-row-reverse"}`}>
      <div className="basis-1/2 p-16 md:p-32">
        <Image
          src={src}
          width={1000}
          height={800}
          alt={image?.alt}
          className="object-cover h-full"
        />
      </div>
      <div className="basis-1/2 px-16 py-32 md:py-64 flex items-center">
        <div className="max-w-[500px] mx-auto space-y-16 text-center">
          {title && <Heading level="h2">{title}</Heading>}
          {description && <div>{description}</div>}
          {link && <Link href={link.href}>{link.label}</Link>}
        </div>
      </div>
    </section>
  )
}