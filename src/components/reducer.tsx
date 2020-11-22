import { Reducer } from 'react'
import { TileSet } from 'scrabble'
import { State, Action } from '../types'

export const reducer: Reducer<State, Action> = (state, action) => {
  const { tiles, input } = state
  switch (action.type) {
    case 'ALPHA': {
      const { letter } = action.payload
      return { ...state, input: input + letter }
    }

    case 'FLIP': {
      const { id } = action.payload
      return {
        ...state,
        tiles: showTile(tiles, id),
      }
    }

    case 'BACKSPACE': {
      return { ...state }
    }

    case 'CANCEL': {
      return { ...state }
    }

    case 'COMMIT': {
      return { ...state }
    }

    default: {
      return state
    }
  }
}

export const showTile = (tiles: TileSet, id: number) =>
  tiles.map(t => (t.id === id ? { ...t, isFaceUp: true } : t))
