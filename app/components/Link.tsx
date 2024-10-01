import React from "react"
import NextLink from "next/link"

type Props = {
  size?: "default" | "large";
  children: React.ReactNode;
  href?: string;
  externalHref?: string;
}

export default function Link({ size, children, href, externalHref }: Props) {
  const baseClassNames = "inline-block bg-accent hover:bg-accent-hover text-content-inverted px-16 py-12 text-16 leading-24 rounded-4 font-medium transition-colors"
  const sizeClassNames = size === "large" ? "px-24 py-16 text-16 leading-28" : "px-16 py-12 text-16 leading-24"

  if (href) {
    return (
      <NextLink href={href} className={`${baseClassNames} ${sizeClassNames}`}>
        {children}
      </NextLink>
    )
  }
}