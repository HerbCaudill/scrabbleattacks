/** @jsxImportSource @emotion/react */
import { Board } from 'components/Board'
import { initialTiles, TileSet } from 'scrabble'
import { HorizontalRule } from './HorizontalRule'
import { Side } from './Side'

export const Game = ({
  localPlayerName,
  players,
  tiles = initialTiles(),
  size = 36,
}: GameProps) => (
  <div>
    {players.map(player => (
      <>
        <Side
          isLocalPlayer={player.name === localPlayerName}
          size={size}
          key={player.name}
          words={player.words}
          name={player.name}
        ></Side>
        <HorizontalRule size={size} />
      </>
    ))}

    <Board size={size} jiggleFactor={40} seed="1" tiles={tiles} />
  </div>
)

export interface Player {
  name: string
  words: string[]
}

export interface GameProps {
  localPlayerName: string
  players: Player[]
  tiles: TileSet
  size: number
}
