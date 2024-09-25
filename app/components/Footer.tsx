import Link from "next/link"
import { type Settings } from "@/sanity.types"

export default function Footer({ settings } : { settings: Settings }) {
  return (
    <footer className="text-14 text-center text-content-inverted bg-background-inverted px-16 py-32">
      <ul className="text-center mb-32 space-y-8">
        <li><Link className="underline" href="cookie-policy">Cookie policy</Link></li>
        <li><Link className="underline" href="privacy-policy">Privacy policy</Link></li>
      </ul>
      &copy; {settings.name} {(new Date()).getFullYear()}
    </footer>
  )
}
