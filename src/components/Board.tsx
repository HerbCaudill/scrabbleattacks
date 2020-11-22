/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { TileSet } from 'scrabble'
import { Tile, TileClickHandler } from './Tile'

export const Board = (props: BoardProps) => {
  const { tiles, size, jiggleFactor, seed, onTileClick = () => {} } = props
  const styles = getStyles(props)

  return (
    <div css={styles.board}>
      {tiles.map(({ letter, id: key, isFaceUp }) => (
        <div css={styles.tile} key={key}>
          <Tile
            id={key}
            size={size}
            letter={letter}
            seed={`${seed}-${key}`}
            isFaceUp={isFaceUp}
            jiggleFactor={jiggleFactor}
            onClick={onTileClick}
          />
        </div>
      ))}
    </div>
  )
}

const getStyles = ({ size }: BoardProps) => {
  const p = size / 10
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
  size: number
  jiggleFactor?: number
  tiles: TileSet
  seed?: string
  onTileClick?: TileClickHandler
}
