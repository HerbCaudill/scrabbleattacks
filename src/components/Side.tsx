/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { totalScore } from 'scrabble'
import { Word } from './Word'

export const Side = (props: SideProps) => {
  const { name, words, size, isLocalPlayer } = props
  const styles = getStyles(props)

  return (
    <div css={styles.side}>
      <div css={styles.name}>
        <div css={styles.score}>
          <div>{totalScore(words)}</div>
        </div>
        <div>{name}</div>
      </div>
      <div css={styles.words}>
        {words.map(word => (
          <div css={styles.word} key={word}>
            <Word word={word} size={size} />
          </div>
        ))}
      </div>
    </div>
  )
}

const getStyles = ({ size }: SideProps) => {
  return {
    side: css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }),
    name: css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontFamily: '"IBM Plex Serif", serif',
      fontWeight: 300,
      fontSize: size,
      marginBottom: size / 2,
      lineHeight: 1,
    }),
    score: css({
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
    }),
    words: css({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }),
    word: css({
      marginRight: 20,
      marginBottom: 10,
    }),
  }
}

export interface SideProps {
  isLocalPlayer: boolean
  name: string
  words: string[]
  size: number
}
