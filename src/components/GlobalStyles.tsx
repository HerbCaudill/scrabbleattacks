/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react'

export function GlobalStyles() {
  return (
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 30,
          backgroundColor: '#DFDBE5',
          backgroundImage: `url(/images/table.svg)`,
          backgroundSize: 50,
        },
      }}
    />
  )
}
