/** @jsxImportSource @emotion/react */
import { Letter, wordScore } from 'scrabble'
import { Tile } from './Tile'
import { Score } from './Score'

export const Word = (props: WordProps) => {
  const { size, word } = props

  return (
    <div css={{ position: 'relative', display: 'inline-flex' }}>
      <div css={{ display: 'flex' }}>
        {word.split('').map((letter, i) => {
          const seed = `${word}-${i}`
          return (
            <Tile
              key={i}
              id={i}
              size={size}
              letter={letter as Letter}
              seed={seed}
              isFaceUp={true}
              jiggleFactor={10}
            />
          )
        })}
      </div>
      <Score size={size * 0.6}>{wordScore(word)}</Score>
    </div>
  )
}

export interface WordProps {
  size: number
  word: string
}
