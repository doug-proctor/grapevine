import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <div>LOGO</div>
      <div>Menu</div>
      <div>
        Nav
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="accommodation">Accommodation</Link></li>
          <li><Link href="info-and-amenities">Info and amenities</Link></li>
          <li><a href="https://google.com">Book now</a></li>
        </ul>
      </div>
      <hr/>
    </div>
  )
}