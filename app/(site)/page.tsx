import { sanityFetch } from "@/sanity/lib/fetch"
import { accommodationQuery, aboutQuery, homeQuery } from "@/sanity/lib/queries"

import Testimonials from "@/app/components/Testimonials"
import PageHeader from "@/app/components/PageHeader"
import Amenities from "@/app/components/Amenities"
import MediaItem from "@/app/components/MediaItem"
import Contact from "@/app/components/Contact"
import Faqs from "@/app/components/Faqs"

export default async function Page() {
  const accommodation = await sanityFetch({ query: accommodationQuery })
  const about = await sanityFetch({ query: aboutQuery })
  const home = await sanityFetch({ query: homeQuery })

  return (
    <>
      <PageHeader
        image={home?.picture}
        title={home?.title}
        showRoomCta={true}
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

      <Testimonials />

      <Faqs />

      <Contact />
    </>
  )
}