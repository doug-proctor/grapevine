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
        showCta={true}
      />
      <MediaItem
        image={accommodation?.picture}
        title={accommodation?.title}
        description={accommodation?.description}
        link={{ label: "View rooms", href: "/accommodation" }}
      />
      <MediaItem
        reverse
        image={about?.picture}
        title={about?.title}
        description={about?.description}
        link={{ label: "Info & amenities", href: "/info-and-amenities" }}
      />
      <Amenities />
      <Testimonials />
      <Faqs />
      <Contact />
    </>
  )
}