import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default ({ children, className }) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + ' overflow-auto'}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                const { style, ...tokenProps } = getTokenProps({ token, key })
                return <span key={key} {...tokenProps} />
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
