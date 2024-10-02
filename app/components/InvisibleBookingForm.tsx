import Link from "@/app/components/Link"

export default function InvisibleBookingForm({ ref, showSubmitButton }: { ref?: any, showSubmitButton?: boolean }) {
  return (
    <form ref={ref} action="https://beds24.com/booking2.php" target="_blank">
      <input type="hidden" name="propid" value="208827"/>
      {showSubmitButton && <Link isSubmit>Book now</Link>}
    </form>
  )
}