export default function DevTool() {
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-[50%] left-0 bg-accent text-content-inverted p-8 opacity-20">
      <div className="sm:hidden">default</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block">xl</div>
    </div>
  )
}