"use client"

import React from "react"
import Link from "next/link"
import Logo from "@/app/components/Logo"

function Nav() {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="accommodation">Accommodation</Link></li>
        <li><Link href="info-and-amenities">Info and amenities</Link></li>
        <li><a href="https://google.com">Book now</a></li>
      </ul>
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  return (
    <header>
      <section className="flex justify-between px-[16px] py-2 items-center border-b-2">
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      </section>

      {isOpen && <Nav />}
    </header>
  )
}