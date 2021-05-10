export default function SectionContainer({ children }) {
  return (
    <div className="bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-screen-xl">{children}</div>
    </div>
  )
}
