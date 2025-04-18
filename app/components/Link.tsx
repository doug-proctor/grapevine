import React from "react"
import NextLink from "next/link"

type Props = {
  size?: "default" | "large";
  children: React.ReactNode;
  legacyBehavior?: boolean;
  href?: string;
}

export default function Link({ size, children, href, legacyBehavior = false }: Props) {
  const baseClassNames = "inline-block bg-accent hover:bg-accent-hover text-content-inverted hover:text-content-inverted px-16 py-12 text-16 leading-24 rounded-4 font-medium transition-colors"
  let sizeClassNames = "px-16 py-12 text-16 leading-24"

  if (size === "large") {
    sizeClassNames += " md:px-24 md:py-16 md:text-16 md:leading-28"
  }

  if (href) {
    return (
      <NextLink legacyBehavior={legacyBehavior} href={href} className={`${baseClassNames} ${sizeClassNames}`}>
        <button>{children}</button>
      </NextLink>
    )
  }
}