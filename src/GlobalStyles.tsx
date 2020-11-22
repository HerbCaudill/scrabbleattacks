/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react'
import 'fontsource-ibm-plex-serif/200.css'
import 'fontsource-ibm-plex-serif/300.css'
import 'fontsource-ibm-plex-serif/400.css'
import 'fontsource-oswald/400.css'
import 'fontsource-oswald/500.css'
import 'fontsource-oswald/600.css'

export function GlobalStyles() {
  return (
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 30,
        },
      }}
    />
  )
}
