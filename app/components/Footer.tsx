import Link from 'next/link'
import { type Settings } from "@/sanity.types"

export default function Footer({ settings } : { settings: Settings }) {
  return (
    <footer>
      <hr/>
      &copy; {settings.name} {(new Date()).getFullYear()}
      <ul>
        <li><Link href="privacy-policy">Privacy policy</Link></li>
        <li><Link href="cookie-policy">Cookie policy</Link></li>
      </ul>
    </footer>
  )
}
