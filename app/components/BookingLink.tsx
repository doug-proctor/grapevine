"use client"

import Link from "@/app/components/Link"

export default function BookingLink() {
  return (
    <form action="https://beds24.com/booking2.php" target="_blank">
      <input type="hidden" name="propid" value="208827" />
      <Link isSubmit>Book now</Link>
    </form>
  )
}