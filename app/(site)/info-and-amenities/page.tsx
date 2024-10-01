import { aboutQuery, amenitiesFullQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import { type Amenity } from "@/sanity.types"
import PageHeader from "@/app/components/PageHeader"
import MediaItem from "@/app/components/MediaItem"
import Amenities from "@/app/components/Amenities"
import Testimonials from "@/app/components/Testimonials"
import Faqs from "@/app/components/Faqs"
import Contact from "@/app/components/Contact"

export default async function Page() {
  const about = await sanityFetch({ query: aboutQuery })
  const amenities = await sanityFetch({ query: amenitiesFullQuery }) as Amenity[]

  return (
    <>
      <PageHeader image={about?.picture} title={about?.title} />

      {amenities.map((amenity, index) => (
        <MediaItem
          description={amenity.description}
          reverse={index % 2 !== 0}
          image={amenity.picture}
          title={amenity.name}
          key={amenity._id}
        />
      ))}

      <Amenities />

      <Testimonials />

      <Faqs />

      <Contact />
    </>
  )
}
