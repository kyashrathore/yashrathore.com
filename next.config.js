const { createLoader } = require('simple-functional-loader')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    modern: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
      },
    ]

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          resourceQuery: /preview/,
          use: [
            ...mdx,
            createLoader(function (src) {
              if (src.includes('<!--more-->')) {
                const [preview] = src.split('<!--more-->')
                return this.callback(null, preview)
              }

              const [preview] = src.split('<!--/excerpt-->')
              return this.callback(null, preview.replace('<!--excerpt-->', ''))
            }),
          ],
        },
        {
          resourceQuery: /rss/,
          use: mdx,
        },
        {
          use: [
            ...mdx,
            createLoader(function (src) {
              const content = [
                'import Post from "@/components/Post"',
                'export { getStaticProps } from "@/getStaticProps"',
                src,
                'export default Post',
              ].join('\n')

              if (content.includes('<!--more-->')) {
                return this.callback(null, content.split('<!--more-->').join('\n'))
              }

              return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
            }),
          ],
        },
      ],
    })

    return config
  },
})
