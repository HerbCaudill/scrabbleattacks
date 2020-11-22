/** @jsxImportSource @emotion/react */

import { TileSet } from 'scrabble'
import { Tile, TileClickHandler } from './Tile'

export const Board = (props: BoardProps) => {
  const { tiles, size, jiggleFactor, seed, onTileClick = NO_OP } = props

  return (
    <div css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tiles.map(({ letter, id: key, isFaceUp }) => (
        <div css={{ padding: size / 10 }} key={key}>
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

export interface BoardProps {
  width?: number
  height?: number
  size: number
  jiggleFactor?: number
  tiles: TileSet
  seed?: string
  onTileClick?: TileClickHandler
}

const NO_OP = () => {}
