import React from 'react'
import { initialTiles } from '../scrabble'
import { Board } from './Board'

export default { title: 'Board', id: '3' }

const tiles = initialTiles('1')

export const initial = () => {
  const boardTiles = tiles
  return <Board size={50} jiggleFactor={10} seed="1" tiles={boardTiles} />
}

export const someFlipped = () => {
  const tilesToFlip = [5, 12, 21, 22, 50, 55, 60]
  const boardTiles = tiles.map((t, i) => ({ ...t, isFaceUp: tilesToFlip.includes(i) }))
  return <Board size={50} jiggleFactor={10} seed="1" tiles={boardTiles} />
}

export const allFlipped = () => {
  const boardTiles = tiles.map((t) => ({ ...t, isFaceUp: true }))
  return <Board size={50} jiggleFactor={10} seed="1" tiles={boardTiles} />
}
