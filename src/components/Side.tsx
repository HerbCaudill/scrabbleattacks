/** @jsxImportSource @emotion/react */
import { totalScore } from 'scrabble'
import { Word } from './Word'

export const Side = (props: SideProps) => {
  const { name, words, size, isLocalPlayer } = props
  const borderColor = isLocalPlayer ? '#ddd' : '#eee'
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: '1px solid',
        borderColor,
        padding: size / 2,
        borderRadius: size / 3,
        marginBottom: size / 2,
      }}
    >
      {/* player score  & name */}
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontFamily: '"IBM Plex Serif", serif',
          fontWeight: 300,
          fontSize: size,
          marginBottom: size / 2,
          lineHeight: 1,
        }}
      >
        {/* player score */}
        <div
          css={{
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 500,
            color: 'blue',
            fontSize: 20,
            marginRight: 10,
            border: '3px solid blue',
            borderRadius: '50%',
            height: 30,
            width: 30,
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 1,
          }}
        >
          <div>{totalScore(words)}</div>
        </div>

        {/* player name */}
        <div>{name}</div>
      </div>

      {/* words */}

      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {words.map(word => (
          <div css={{ marginRight: 20, marginBottom: 10 }} key={word}>
            <Word word={word} size={size} />
          </div>
        ))}
      </div>
    </div>
  )
}

export interface SideProps {
  isLocalPlayer: boolean
  name: string
  words: string[]
  size: number
}
