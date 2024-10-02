import Link from "next/link"
import { type Settings } from "@/sanity.types"

export default function Footer({ settings } : { settings: Settings }) {
  return (
    <footer className="text-14 text-center text-content-inverted bg-accent px-16 py-32 sm:px-32 sm:flex sm:flex-row-reverse sm:justify-between">
      <ul className="text-center mb-32 sm:mb-0 space-y-8 sm:flex sm:space-x-16 sm:space-y-0">
        <li className="sm:block"><Link className="underline text-content-inverted" href="cookie-policy">Cookie policy</Link></li>
        <li className="sm:block"><Link className="underline text-content-inverted" href="privacy-policy">Privacy policy</Link></li>
      </ul>
      &copy; {settings.name} {(new Date()).getFullYear()}
    </footer>
  )
}
