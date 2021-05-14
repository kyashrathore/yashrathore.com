import Head from 'next/head'
import SectionContainer from '@/components/SectionContainer'
import yash from '@/img/yash.jpg'
import { useEffect } from 'react'
import scrollSpy from '@/utils/scrollSpy'
import SideNavigation from '@/components/SideNavigation'
import Projects from '@/components/Projects'
import Last5Blogs from '@/components/Last5Blogs'
import Snippets from '@/components/Snippets'
import Link from 'next/link'

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
      <SectionContainer>
        <main>
          <div className="divide-y divide-gray-200">
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

            <div className="grid xl:grid-flow-col grid-cols-1 gap-x-4 py-20">
              <div className="flex flex-col justify-start xl:justify-between  xl:self-start xl:sticky top-20 side">
                <div>
                  <h1 className="max-w-xl mb-8 font-bold text-white text-6xl main-heading">
                    Hello, I'am
                    <br />
                    Yash Rathore
                  </h1>
                  <p className=" max-w-lg text-white">
                    I’m a Software Engineer currently working at{' '}
                    <a
                      rel="noopener"
                      target="_blank"
                      className="text-gray-300 border-b border-gray-300"
                      href="https://recko.io"
                    >
                      Recko
                    </a>
                    , Bangalore. I mostly do front-end development, and I’m a{' '}
                    <a
                      rel="noopener"
                      target="_blank"
                      className="text-gray-300 border-b border-gray-300"
                      href="https://reactjs.org"
                    >
                      React.js
                    </a>{' '}
                    nerd. I can't shut up about NextJS and utility-first CSS. I also share what I
                    learn on my blog{' '}
                    <a
                      rel="noopener"
                      target="_blank"
                      className="text-gray-300 border-b border-gray-300"
                      href="/blog"
                    >
                      yashrathore.com/blog
                    </a>
                    .
                  </p>
                </div>{' '}
                <div>
                  <SideNavigation />
                  <div className="flex items-center w-full mt-20 xl:mt-0">
                    <img
                      alt="Yash's headshot"
                      src={yash}
                      className="w-12 h-12 mr-4 rounded-full filter grayscale tranform hover:scale-150"
                    />
                    <ul className="flex text-zenith overflow-hidden">
                      <li className="mr-2">
                        <a
                          href="https://twitter.com/kyashrathore"
                          rel="noopener"
                          target="_blank"
                          className="flex items-center text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-4 h-4 mr-2 fill-current"
                          >
                            <title>Twitter icon</title>
                            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path>
                          </svg>
                          <span className="text-sm">Twitter</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="https://github.com/kyashrathore/"
                          rel="noopener"
                          target="_blank"
                          className="flex items-center text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-4 h-4 mr-2 fill-current"
                          >
                            <title>GitHub icon</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                          </svg>
                          <span className="text-sm">GitHub</span>
                          <div className="w-16 p-2 ml-8"></div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div data-spySection="0" className="mt-20 xl:mt-0">
                  <Projects />
                </div>
                <div data-spySection="1" className="mt-20 xl:mt-0  divide-y divide-white">
                  <Last5Blogs />
                  <div>
                    <Link href="/blog">
                      <a className="text-white mt-4 block cursor-pointer hover:text-gray-500 font-bold">
                        View All Posts &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
                <div data-spySection="2" className="mt-20 xl:mt-0  divide-y divide-white  mb-64">
                  <Snippets />
                  <div>
                    <Link href="/blog">
                      <a className="text-white mt-4 block cursor-pointer hover:text-gray-500 font-bold">
                        View All Snippets &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SectionContainer>
    </>
  )
}
