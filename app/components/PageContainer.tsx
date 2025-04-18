export default function Component({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1600px] bg-[white]">
      {children}
    </div>
  )
}