"use client"

import React from "react"
import Logo from "@/app/components/Logo"
import Link from "@/app/components/Link"
import { Menu, X } from "lucide-react"

function Nav({ closeMenu }: { closeMenu: () => void }) {
  return (
    <nav className="external-css-component_site-nav fixed top-64 bottom-0 left-0 right-0 bg-background z-50">
      <ul className="text-24 md:text-32 font-bold text-center space-y-24 w-full pt-96">
        <li>
          <Link legacyBehavior href="/">
            <a className="inline-block text-accent hover:text-accent-hover transform hover:scale-175" onClick={closeMenu}>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="accommodation">
            <a className="inline-block text-accent hover:text-accent-hover transform hover:scale-175" onClick={closeMenu}>Accommodation</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="info-and-amenities">
            <a className="inline-block text-accent hover:text-accent-hover transform hover:scale-175" onClick={closeMenu}>Info and amenities</a>
          </Link>
        </li>
        <li>
          <a className="inline-block text-accent hover:text-accent-hover transform hover:scale-175" href={process.env.NEXT_PUBLIC_BOOKING_URL!}>Book now</a>
        </li>
      </ul>
    </nav>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  return (
    <header className="bg-background md:fixed top-0 left-0 right-0 z-50">
      <section className="flex justify-between px-8 sm:px-16 items-center min-h-64">
        <Logo />
        <div className="flex gap-16 ml-8">
          <Link href={process.env.NEXT_PUBLIC_BOOKING_URL!}>
            Book
            <span className="hidden min-[510px]:inline"> now</span>
          </Link>
          <button className="flex items-center font-medium text-accent hover:text-accent-hover" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
            <div className="hidden min-[500px]:block">Menu</div>
          </button>
        </div>
      </section>

      {isOpen && <Nav closeMenu={() => setIsOpen(false)} />}
    </header>
  )
}