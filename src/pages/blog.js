import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import yash from '../img/yash.png'
import ff from '../img/ff.png'
import { useEffect } from 'react'
import scrollSpy, { throttle } from '@/utils/scrollSpy'
const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')
const Typography = ({ as, children }) => {
  const As = as || 'h1'
  return <As>{children}</As>
}

const Project = () => {
  return (
    <a className="project block relative rounded overflow-hidden ring-1 ring-opacity-25 hover:ring-opacity-70 hover:ring-1 cursor-pointer ring-white max-w-xl mb-8">
      <img className="max-w-full absolute opacity-0" src={ff} />
      <div className="px-4 py-8">
        <span className="mb-2 mt-4 inline-block text-xs text-gray-100">React.js</span>

        <h3 className="text-white mb-2 text-xl font-semibold">Frontend Folks</h3>

        <p className="text-white mb-2 inline-block">
          About An immutable JavaScript library to create, calculate and format money.
        </p>
      </div>
    </a>
  )
}
const SideNavigation = () => {
  return (
    <div className="hidden xl:block">
      <div id="cursor"></div>
      <ul id="menu" className="mb-20">
        <li
          data-SpyLink="0"
          className="menu-item text-white mb-4 uppercase cursor-pointer text-sm hover:font-medium w-fit"
        >
          <a>Projects</a>
        </li>
        <li
          data-SpyLink="1"
          className="menu-item text-white mb-4 uppercase cursor-pointer text-sm hover:font-medium w-fit"
        >
          <a>Blog</a>
        </li>
        <li
          data-SpyLink="2"
          className="menu-item text-white mb-4 uppercase cursor-pointer text-sm hover:font-medium w-fit"
        >
          <a>Snippets</a>
        </li>
        <li
          data-SpyLink="3"
          className="menu-item text-white mb-4 uppercase cursor-pointer text-sm hover:font-medium w-fit"
        >
          <a>Resume</a>
        </li>
      </ul>
    </div>
  )
}
const BlogSectionContainer = ({ children }) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-screen-xl">{children}</div>
    </div>
  )
}
export default function Home() {
  useEffect(() => {
    const registerScrollSpy = scrollSpy()

    window.addEventListener('scroll', registerScrollSpy)
    return () => {
      window.removeEventListener('scroll', registerScrollSpy)
    }
  }, [])
  return (
    <>
      <BlogSectionContainer>
        <main>
          <Head>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@tailwindcss" />
            <meta name="twitter:creator" content="@tailwindcss" />
            <meta name="twitter:title" content="Yash Rathore" />
            <meta name="twitter:description" content="News content from the Tailwind CSS team." />
            <meta name="twitter:image" content={`https://blog.tailwindcss.com${twitterCard}`} />
            <meta property="og:url" content="https://blog.tailwindcss.com" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Yash Rathore" />
            <meta property="og:description" content="News content from the Tailwind CSS team." />
            <meta property="og:image" content={`https://blog.tailwindcss.com${twitterCard}`} />
            <title>Yash Rathore</title>
            <meta name="description" content="News content from the Tailwind CSS team." />
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
