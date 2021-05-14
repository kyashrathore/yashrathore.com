import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '../getAllPostPreviews'
import yash from '@/img/yash.jpeg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

const BlogSectionContainer = ({ children }) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-screen-xl">{children}</div>
    </div>
  )
}
export default function Blog() {
  return (
    <>
      <BlogSectionContainer>
        <main>
          <Head>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@kyashrathore" />
            <meta name="twitter:creator" content="@kyashrathore" />
            <meta name="twitter:title" content="Yash Rathore" />
            <meta name="twitter:description" content="New blog from Yash Rathore" />
            <meta name="twitter:image" content={`https://yashrathore.com${yash}`} />
            <meta property="og:url" content="https://yashrathore.com" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Yash Rathore" />
            <meta property="og:description" content="New blog from Yash Rathore" />
            <meta property="og:image" content={`https://yashrathore.com${yash}`} />
            <title>Yash Rathore</title>
            <meta name="description" content="New blog from Yash Rathore" />
          </Head>
          <ul className="">
            {posts.map(({ link, module: { default: Component, meta } }) => {
              return (
                <li key={link} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-white">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl text-white  leading-8 font-bold tracking-tight">
                          <Link href={link}>
                            <a className="text-white">{meta.title}</a>
                          </Link>
                        </h2>
                        <div className="prose max-w-none text-gray-500">
                          <Component />
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link href={link}>
                          <a
                            className="text-white hover:text-gray-500"
                            aria-label={`Read "${meta.title}"`}
                          >
                            Read more &rarr;
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </main>
      </BlogSectionContainer>
    </>
  )
}
