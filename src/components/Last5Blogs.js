import Link from 'next/link'
import getAllPostPreviews from '@/getAllPostPreviews'

const posts = getAllPostPreviews().slice(0, 5)

export default function Blog() {
  return (
    <ul className="pt-8">
      {posts.map(({ link, module: { default: Component, meta } }) => {
        return (
          <li key={link} className="py-8">
            <article className="">
              <div className="space-y-4">
                <h2 className="text-2xl max-w-lg text-white  leading-8 font-bold tracking-tight">
                  <Link href={link}>
                    <a className="text-white">{meta.title}</a>
                  </Link>
                </h2>
                <div className="prose max-w-l">
                  <Component />
                </div>
              </div>
              <div className="text-base leading-6 font-medium pt-2">
                <Link href={link}>
                  <a
                    className="text-body hover:text-heading  font-medium"
                    aria-label={`Read "${meta.title}"`}
                  >
                    Read more &rarr;
                  </a>
                </Link>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
