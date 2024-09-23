import Link from 'next/link'
import { type About, type Accommodation} from "@/sanity.types";

export default function Header({ about, accommodation } : { about: About, accommodation: Accommodation}) {
  return (
    <div>
      <div>LOGO</div>
      <div>Menu</div>
      <div>
        Nav
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href={accommodation.slug?.current!}>{accommodation.title}</Link></li>
          <li><Link href={about.slug?.current!}>{about.title}</Link></li>
          <li><a href="https://google.com">Book now</a></li>
        </ul>
      </div>
      <hr/>
    </div>
  )
}