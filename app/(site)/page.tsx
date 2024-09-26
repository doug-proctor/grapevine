import { sanityFetch } from "@/sanity/lib/fetch"
import { accommodationQuery, aboutQuery, homeQuery } from "@/sanity/lib/queries"
import MediaItem from "@/app/components/MediaItem"
import Amenities from "@/app/components/Amenities"
import PageHeader from "@/app/components/PageHeader"

export default async function Page() {
  const accommodation = await sanityFetch({ query: accommodationQuery })
  const about = await sanityFetch({ query: aboutQuery })
  const home = await sanityFetch({ query: homeQuery })

  return (
    <>
      <PageHeader
        title={home?.title}
        image={home?.picture}
      />

      <MediaItem
        title={accommodation?.title}
        image={accommodation?.picture}
        description={accommodation?.description}
        button={{ href: "accommodation", text: "View rooms" }}
      />

      <MediaItem
        title={about?.title}
        image={about?.picture}
        description={about?.description}
        button={{ href: "info-and-amenities", text: "Info & amenities" }}
        reverse={true}
      />

      <Amenities />

      {/* Gallery */}

      {/* Testimonials */}

      {/* Find us */}
    </>
  )
}