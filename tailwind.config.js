const defaultTheme = require('tailwindcss/defaultTheme')
const mdx = require('@mdx-js/mdx')

module.exports = {
  purge: {
    mode: 'all',
    content: ['./src/**/*.{js,mdx}', './next.config.js'],
    darkMode: false, // or 'media' or 'class'
    options: {
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content)

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []

            return broadMatches.concat(innerMatches)
          },
        },
      ],
    },
  },
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      scale: {
        ...defaultTheme.scale,
        200: '2',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        heading: 'white',
        body: '#dadfe1',
      },
      typography: (theme) => ({
        default: {
          css: {
            h1: {
              color: theme('colors.heading'),
            },
            h2: {
              color: theme('colors.heading'),
            },
            h3: {
              color: theme('colors.heading'),
            },

            p: {
              color: theme('colors.body'),
            },
            a: {
              color: theme('colors.body'),
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.body'),
              cursor: theme('cursor.pointer'),
            },
            li: {
              color: theme('colors.body'),
            },
            blockquote: {
              color: theme('colors.body'),
              borderLeftColor: theme('colors.body'),
            },
          },
        },
      }),
    },
  },
  variants: {
    ringWidth: ['hover'],
    ringOpacity: ['hover'],
    fontWeight: ['hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ])
    },
  ],
}
