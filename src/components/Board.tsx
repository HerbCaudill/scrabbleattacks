/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Tile } from './Tile'
import { TileSet } from 'scrabble'

export const Board = (props: BoardProps) => {
  const { tiles, size = 75, jiggleFactor, seed } = props
  const styles = getStyles(props)

  return (
    <div css={styles.board}>
      {tiles.map(({ letter, isFaceUp }, i) => (
        <div css={styles.tile} key={i}>
          <Tile
            size={size}
            letter={letter}
            seed={`${seed}-${i}`}
            isFaceUp={isFaceUp}
            jiggleFactor={jiggleFactor}
          />
        </div>
      ))}
    </div>
  )
}

const getStyles = ({ size }: Partial<BoardProps>) => {
  const p = size! / 10
  return {
    board: css({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }),
    tile: css({
      paddingTop: p,
      paddingBottom: p,
      paddingLeft: p * 2,
      paddingRight: p,
    }),
  }
}

export interface BoardProps {
  width?: number
  height?: number
  size?: number
  jiggleFactor?: number
  tiles: TileSet
  seed?: string
}
