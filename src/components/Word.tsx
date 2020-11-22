/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Letter, wordScore } from 'scrabble'
import { Tile } from './Tile'
import { Score } from './Score'

export const Word = (props: WordProps) => {
  const { size = 50, word } = props
  const styles = getStyles(props)

  return (
    <div css={styles.word}>
      <div css={styles.wordInner}>
        {word.split('').map((letter, i) => {
          const seed = `${word}-${i}`
          return (
            <Tile
              key={i}
              size={size}
              letter={letter as Letter}
              seed={seed}
              isFaceUp={true}
            />
          )
        })}
      </div>
      <Score size={size * 0.6}>{wordScore(word)}</Score>
    </div>
  )
}

const getStyles = (props: WordProps) => {
  return {
    word: css({
      position: 'relative',
      display: 'inline-flex',
    }),
    wordInner: css({
      display: 'flex',
    }),
  }
}

export interface WordProps {
  size: number
  word: string
}
