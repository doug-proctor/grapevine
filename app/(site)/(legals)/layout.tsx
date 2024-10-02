export default async function LegalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-16 max-w-[700px] mx-auto mb-96">{children}</main>
  )
}