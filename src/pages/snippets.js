import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllSnippets from '../getAllSnippets'
import yashOGImaage from '@/img/yash-16*9.jpg'

const posts = getAllSnippets()

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
            <meta name="twitter:image" content={`https://yashrathore.com${yashOGImaage}`} />
            <meta property="og:url" content="https://yashrathore.com" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Yash Rathore" />
            <meta property="og:description" content="New blog from Yash Rathore" />
            <meta property="og:image" content={`https://yashrathore.com${yashOGImaage}`} />
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
                      <dd className="text-base leading-6 font-medium text-body">
                        <time dateTime={meta.date}>
                          {postDateTemplate.render(new Date(meta.date))}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl text-heading  leading-8 font-bold tracking-tight">
                          {meta.title}
                        </h2>
                        <p className="mb-6 text-body">{meta.description}</p>

                        <div className="snippet max-w-none">
                          <Component />
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium"></div>
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
