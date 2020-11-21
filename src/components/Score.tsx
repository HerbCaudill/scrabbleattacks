/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactNode } from 'react'

export const Score = (props: ScoreProps) => {
  const styles = getStyles(props)

  return (
    <div css={styles.score}>
      <div>{props.children}</div>
    </div>
  )
}

const getStyles = ({ size }: ScoreProps) => {
  return {
    score: css({
      background: 'blue',
      fontFamily: 'Oswald, sans-serif',
      color: 'white',
      height: size,
      width: size,
      lineHeight: 1,
      fontSize: size * 0.55,
      fontWeight: 500,
      borderRadius: '50%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `translate(-${size / 3}px,-${size / 5}px)`,
    }),
  }
}

export interface ScoreProps {
  size: number
  children: ReactNode
}
