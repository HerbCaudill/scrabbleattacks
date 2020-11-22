/** @jsxImportSource @emotion/react */
import { Board } from 'components/Board'
import { Fragment, useReducer } from 'react'
import { initialTiles, Letter, TileSet } from 'scrabble'
import { Side } from './Side'
import { State, Player } from '../types'
import { reducer } from './reducer'
import { useKeyboard } from 'hooks/useKeyboard'
import { InputDisplay } from './InputDisplay'

export const Game = ({
  localPlayerName,
  players,
  seed,
  size = 36,
}: GameProps) => {
  const initialState: State = {
    tiles: initialTiles(seed),
    players,
    input: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onTileClick = (id: number) => {
    dispatch({ type: 'FLIP', payload: { id } })
  }

  useKeyboard(({ key }: KeyboardEvent) => {
    if (isAlpha(key))
      dispatch({
        type: 'ALPHA',
        payload: { letter: key.toUpperCase() as Letter },
      })
    else if (key === 'Delete' || key === 'Backspace')
      dispatch({ type: 'BACKSPACE' })
    else if (key === 'Escape') dispatch({ type: 'CANCEL' })
    else if (key === 'Enter') dispatch({ type: 'COMMIT' })
  })

  return (
    <div>
      <InputDisplay input={state.input} size={size} />
      {players.map(player => (
        <Fragment key={player.name}>
          <Side
            isLocalPlayer={player.name === localPlayerName}
            size={size}
            key={player.name}
            words={player.words}
            name={player.name}
          ></Side>
        </Fragment>
      ))}

      <Board
        size={size}
        jiggleFactor={40}
        seed="1"
        tiles={state.tiles}
        onTileClick={onTileClick}
      />
    </div>
  )
}

export interface GameProps {
  localPlayerName: string
  players: Player[]
  size: number
  seed: string
}

export const isAlpha = (key: string) => /^[A-Za-z]$/.test(key)
