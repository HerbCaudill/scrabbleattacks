/** @jsxImportSource @emotion/react */

export const HorizontalRule = ({ size }: { size: number }) => (
  <div
    css={{
      borderBottom: '1px solid #eee',
      marginTop: size / 2,
      marginBottom: size,
    }}
  ></div>
)
