/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { totalScore } from 'scrabble'
import { Word } from './Word'

export const Side = (props: SideProps) => {
  const { name, words } = props
  const styles = getStyles()

  return (
    <div css={styles.side}>
      <div css={styles.name}>
        <div>{name}</div>
        <div css={styles.score}>
          <div>{totalScore(words)}</div>
        </div>
      </div>
      <div css={styles.words}>
        {words.map(word => (
          <div css={styles.word}>
            <Word word={word} size={40} />
          </div>
        ))}
      </div>
    </div>
  )
}

const getStyles = () => {
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
      fontSize: 35,
      marginBottom: 15,
      lineHeight: 1,
    }),
    score: css({
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 500,
      color: 'blue',
      fontSize: 20,
      marginLeft: 10,
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
  name: string
  words: string[]
  size: number
}
