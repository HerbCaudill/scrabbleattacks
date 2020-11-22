/** @jsxImportSource @emotion/react */

export const Cursor: React.FC<{ scale?: number }> = ({ scale = 1 }) => (
  <div
    css={{
      display: 'inline-block',
      background: 'yellow',
      position: 'relative',
      animation: 'blink',
      top: scale * 0.2,
      width: 2,
      height: scale * 1.2,
    }}
  ></div>
)
