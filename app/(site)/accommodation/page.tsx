import { accommodationQuery, roomQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import { type Room } from "@/sanity.types"
import Testimonials from "@/app/components/Testimonials"
import PageHeader from "@/app/components/PageHeader"
import MediaItem from "@/app/components/MediaItem"
import Amenities from "@/app/components/Amenities"
import Contact from "@/app/components/Contact"
import Faqs from "@/app/components/Faqs"

export default async function Page() {
  const accommodation = await sanityFetch({ query: accommodationQuery })
  const rooms = await sanityFetch({ query: roomQuery }) as Room[]

  return (
    <>
      <PageHeader image={accommodation?.picture} title={accommodation?.title} />
      {rooms.map((room, index) => (
        <MediaItem
          link={{label: "Book now", href: process.env.NEXT_PUBLIC_BOOKING_URL! }}
          description={room.description}
          reverse={index % 2 !== 0}
          image={room.picture}
          title={room.type}
          key={room._id}
        />
      ))}
      <Amenities />
      <Testimonials />
      <Faqs />
      <Contact />
    </>
  )
}
