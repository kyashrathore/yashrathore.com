import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '../getAllPostPreviews'
import yashOGImaage from '@/img/yash-16*9.jpg'
import { yash } from '@/authors'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

const BlogSectionContainer = ({ children }) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-md flex justify-center">{children}</div>
    </div>
  )
}
const Heading = () => {
  return <h1 className="text-white text-5xl font-bold py-20">Yash Rathore' Blog</h1>
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
          <Heading />
          <ul className="">
            {posts.map(({ link, module: { default: Component, meta } }) => {
              return (
                <li key={link} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <div className="space-y-5 xl:col-span-4">
                      <div className="space-y-4">
                        <h2 className="text-2xl text-heading  leading-8 font-bold tracking-tight">
                          <Link href={link}>
                            <a className="text-heading">{meta.title}</a>
                          </Link>
                        </h2>
                        <dl class="">
                          <dt class="sr-only">Authors</dt>
                          <dd>
                            <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                              <li class="flex items-center space-x-2">
                                <img src={yash.avatar} alt="" class="w-10 h-10 rounded-full" />
                                <dl class="text-sm font-medium whitespace-no-wrap">
                                  <dt class="sr-only">Name</dt>
                                  <dd class="text-body">Yash Rathore</dd>
                                  <dt class="sr-only">Twitter</dt>
                                  <dd>
                                    <a
                                      href="https://twitter.com/kyashrathore"
                                      class="text-gray-600 hover:text-gray-700"
                                    >
                                      @kyashrathore
                                    </a>
                                  </dd>
                                </dl>
                              </li>
                            </ul>
                          </dd>
                        </dl>
                        <div className="prose max-w-none">
                          <Component />
                        </div>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base leading-6 font-medium text-gray-600">
                            <time dateTime={meta.date}>
                              {postDateTemplate.render(new Date(meta.date))}
                            </time>
                          </dd>
                        </dl>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link href={link}>
                          <a
                            className="text-gray-500 hover:text-heading"
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
