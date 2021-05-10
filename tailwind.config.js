const defaultTheme = require('tailwindcss/defaultTheme')
const mdx = require('@mdx-js/mdx')

module.exports = {
  purge: {
    mode: 'all',
    content: ['./src/**/*.{js,mdx}', './next.config.js'],
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
          purple: '#5f39d4',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.white'),
              fontSize: theme('fontSize.6xl'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.white'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.white'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.white'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.white'),
            },
            code: {
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
            pre: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.white'),
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
