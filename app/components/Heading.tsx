import React from "react"

export default function Heading({ level, className, children }: { level: "h1" | "h2", className?: string, children: React.ReactNode }) {

  if (level === "h1") {
    return <h1 className={`${className} text-32 md:text-56 font-semibold`}>{children}</h1>
  }

  if (level === "h2") {
    return <h2 className={`${className} text-24 lg:text-32 font-bold`}>{children}</h2>
  }
}