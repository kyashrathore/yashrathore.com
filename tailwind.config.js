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
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#A78BFA',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
      typography: (theme) => ({
        default: {
          css: {
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },

            p: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.white'),
              textDecoration: 'none',
              borderBottom: '1px solid white',
              cursor: theme('cursor.pointer'),
            },
            li: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.white'),
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
