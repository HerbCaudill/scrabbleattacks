/** @jsxImportSource @emotion/react */
import { Board } from 'components/Board'
import { Fragment, useState } from 'react'
import { initialTiles, TileSet } from 'scrabble'
import { HorizontalRule } from './HorizontalRule'
import { Side } from './Side'

export const Game = ({ localPlayerName, players, size = 36 }: GameProps) => {
  const [tiles, setTiles] = useState(initialTiles('1'))

  const onTileClick = (key: number) => {
    setTiles(tiles => flipTile(tiles, key))
  }

  return (
    <div>
      {players.map(player => (
        <Fragment key={player.name}>
          <Side
            isLocalPlayer={player.name === localPlayerName}
            size={size}
            key={player.name}
            words={player.words}
            name={player.name}
          ></Side>
          <HorizontalRule size={size} />
        </Fragment>
      ))}

      <Board
        size={size}
        jiggleFactor={40}
        seed="1"
        tiles={tiles}
        onTileClick={onTileClick}
      />
    </div>
  )
}

export interface Player {
  name: string
  words: string[]
}

export interface GameProps {
  localPlayerName: string
  players: Player[]
  size: number
}

const flipTile = (tiles: TileSet, id: number) =>
  tiles.map(t => (t.id === id ? { ...t, isFaceUp: true } : t))
