import { Letter, TileSet } from 'scrabble'

export interface Player {
  name: string
  words: string[]
}

export interface State {
  tiles: TileSet
  players: Player[]
  input: string
}

export type Action =
  | {
      type: 'ALPHA'
      payload: { letter: Letter }
    }
  | {
      type: 'FLIP'
      payload: { id: number }
    }
  | {
      type: 'BACKSPACE'
    }
  | {
      type: 'CANCEL'
    }
  | {
      type: 'COMMIT'
    }
  | {
      type: 'ADD_PLAYER'
      payload: { name: string }
    }
  | {
      type: 'REMOVE_PLAYER'
      payload: { name: string }
    }
