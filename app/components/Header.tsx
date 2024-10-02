"use client"

import React from "react"
import Link from "next/link"
import Logo from "@/app/components/Logo"
import InvisibleBookingForm from "@/app/components/InvisibleBookingForm"

function Nav({ closeMenu }: { closeMenu: () => void }) {

  const formRef = React.useRef<null | HTMLFormElement>(null)

  const submitForm = () => formRef.current?.submit()

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
          <a className="inline-block text-accent hover:text-accent-hover transform hover:scale-175" href="#" onClick={submitForm}>Book now</a>
        </li>
      </ul>
      <InvisibleBookingForm ref={formRef} />
    </nav>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  return (
    <header className="bg-background md:fixed top-0 left-0 right-0 z-50">
      <section className="flex justify-between px-16 items-center min-h-64">
        <Logo />
        <button className="font-medium text-accent hover:text-accent-hover" onClick={() => setIsOpen(!isOpen)}>Menu</button>
      </section>

      {isOpen && <Nav closeMenu={() => setIsOpen(false)} />}
    </header>
  )
}