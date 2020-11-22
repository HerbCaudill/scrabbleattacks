/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react'

export const Cursor: React.FC<{ size: number }> = ({ size }) => {
  const blink = keyframes`
    from, to { opacity: 1 }
    50% { opacity: 0 }
  `
  return (
    <div
      css={{
        display: 'inline-block',
        background: 'orange',
        position: 'relative',
        animation: `1000ms ${blink} step-end infinite`,
        left: size * 0.1,
        top: size * 0.1,
        width: size * 0.05,
        height: size * 1.1,
      }}
    ></div>
  )
}
