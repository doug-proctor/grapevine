import { sanityFetch } from "@/sanity/lib/fetch"
import { settingsQuery } from "@/sanity/lib/queries"
import { type Settings } from "@/sanity.types"
import MediaItem from "@/app/components/MediaItem"

function Icon({ icon, className }: { icon: string, className: string }) {
  switch (icon) {
  case "phone":
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className={`${className} lucide lucide-phone`}>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  case "email":
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className={`${className} lucide lucide-mail`}>
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  case "address":
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className={`${className} lucide lucide-map-pin`}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  case "instagram":
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className={`${className} lucide lucide-instagram`}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  case "facebook":
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className={`${className} lucide lucide-facebook`}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  default:
    return null
  }
}

export default async function Amenities() {
  const settings = await sanityFetch({query: settingsQuery}) as Settings

  return (
    <MediaItem title="Connect with us" mapApiKey={settings.google_maps_api_key}>
      <div className="mt-32 space-y-24">
        <div>
          <Icon icon="phone" className="inline relative -top-[2px] mr-[6px]"/>
          {settings.phone}
        </div>
        <div>
          <Icon icon="email"  className="inline relative -top-[2px] mr-[6px]" />
          {settings.email}
        </div>
        <div>
          <Icon icon="address"  className="inline relative -top-[2px] mr-[6px]" />
          {settings.address}
        </div>
        {settings.instagram_url && (
          <div>
            <a href={settings.instagram_url} className="text-accent hover:text-accent-hover">
              <Icon icon="instagram"  className="inline relative -top-[2px] mr-[6px]" />
              Instagram
            </a>
          </div>
        )}
        {settings.facebook_url && (
          <div>
            <a href={settings.facebook_url} className="text-accent hover:text-accent-hover">
              <Icon icon="facebook" className="inline relative -top-[2px] mr-[6px]"/>
                Facebook
            </a>
          </div>
        )}
      </div>
    </MediaItem>
  )
}