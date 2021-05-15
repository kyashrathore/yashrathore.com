import getAllSnipets from '@/getAllSnippets'

const posts = getAllSnipets()

export default function Snippets() {
  return (
    <ul className="pt-8">
      {posts.map(({ module: { default: Component, meta } }) => {
        return (
          <li key={meta.title} className="py-8">
            <div className="space-y-4">
              <h2 className="text-2xl max-w-xl text-white  leading-8 font-bold tracking-tight">
                {meta.title}
              </h2>
              <p className="mb-6 text-body">{meta.description}</p>
              <div className="max-w-xl text-gray-500 text-sm snippet">
                <Component />
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
