import React from 'react'
import { initialTiles, TileSet } from '../scrabble'
import { Board } from './Board'

const tiles = initialTiles('1')

const flipped = [5, 12, 21, 22, 50, 55, 60]
const isFlipped = (i: number): boolean => flipped.includes(i)
const newBoard = (boardTiles: TileSet) => (
  <Board size={36} jiggleFactor={10} seed="1" tiles={boardTiles} />
)

export default { title: 'Board', id: '3' }

export const initial = () => newBoard(tiles)

export const someFlipped = () =>
  newBoard(tiles.map((t, i) => ({ ...t, isFaceUp: isFlipped(i) })))

export const allFlipped = () =>
  newBoard(tiles.map(t => ({ ...t, isFaceUp: true })))
