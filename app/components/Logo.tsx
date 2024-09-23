import Image from "next/image"
import Link from "next/link"
import logo from "@/app/logo.png"

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="The Grapevine Hostel logo" width={240} />
    </Link>
  )
}