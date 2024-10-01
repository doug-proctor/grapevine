import { sanityFetch } from "@/sanity/lib/fetch"
import { faqsQuery } from "@/sanity/lib/queries"
import { type Faq } from "@/sanity.types"
import Heading from "@/app/components/Heading"

const Faq = ({ question, answer }: { question?: string, answer?: string }) => {
  return (
    <div className="">
      <div className="font-bold">{question}</div>
      <div>{answer}</div>
    </div>
  )
}

export default async function Amenities() {
  const faqs = await sanityFetch({ query: faqsQuery }) as Faq[]

  return (
    <section className="px-16 py-32 md:py-64 lg:px-32 bg-background-secondary">
      <div className="max-w-[700px] space-y-24 mx-auto">
        <Heading level="h2">Common questions</Heading>
        {faqs.map(faq => (
          <Faq key={faq._id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}