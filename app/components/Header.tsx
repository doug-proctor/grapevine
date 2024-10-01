"use client"

import React from "react"
import Link from "next/link"
import Logo from "@/app/components/Logo"

function Nav({ closeMenu }: { closeMenu: () => void }) {

  return (
    <nav className="external-css-component_site-nav fixed top-64 bottom-0 left-0 right-0 bg-background z-50">
      <ul className="text-32 font-bold text-center space-y-24 w-full pt-96">
        <li>
          <Link legacyBehavior href="/">
            <a onClick={closeMenu}>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="accommodation">
            <a onClick={closeMenu}>Accommodation</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="info-and-amenities">
            <a onClick={closeMenu}>Info and amenities</a>
          </Link>
        </li>
        <li>
          <a href="https://google.com">Book now</a>
        </li>
      </ul>
    </nav>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  return (
    <header>
      <section className="flex justify-between px-16 items-center min-h-64">
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      </section>

      {isOpen && <Nav closeMenu={() => setIsOpen(false)} />}
    </header>
  )
}