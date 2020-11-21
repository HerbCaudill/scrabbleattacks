import { randomGenerator } from './randomGenerator'

export type Letter = keyof typeof letterMap
export type TileSet = { letter: Letter; isFaceUp: boolean }[]

export const letterMap = {
  A: { points: 1, tiles: 9 },
  B: { points: 3, tiles: 2 },
  C: { points: 3, tiles: 2 },
  D: { points: 2, tiles: 4 },
  E: { points: 1, tiles: 12 },
  F: { points: 4, tiles: 2 },
  G: { points: 2, tiles: 3 },
  H: { points: 4, tiles: 2 },
  I: { points: 1, tiles: 9 },
  J: { points: 8, tiles: 1 },
  K: { points: 5, tiles: 1 },
  L: { points: 1, tiles: 4 },
  M: { points: 3, tiles: 2 },
  N: { points: 1, tiles: 6 },
  O: { points: 1, tiles: 8 },
  P: { points: 3, tiles: 2 },
  Q: { points: 10, tiles: 1 },
  R: { points: 1, tiles: 6 },
  S: { points: 1, tiles: 4 },
  T: { points: 1, tiles: 6 },
  U: { points: 1, tiles: 4 },
  V: { points: 4, tiles: 2 },
  W: { points: 4, tiles: 2 },
  X: { points: 8, tiles: 1 },
  Y: { points: 4, tiles: 2 },
  Z: { points: 10, tiles: 1 },
}

export const points = (letter: Letter) => {
  if (!letterMap[letter]) throw new Error('not a letter')
  return letterMap[letter].points
}

export const tiles = (letter: Letter) => {
  if (!letterMap[letter]) throw new Error('not a letter')
  return letterMap[letter].tiles
}

export const alphabet = Object.keys(letterMap) as Letter[]

export const initialLetters = alphabet.flatMap((letter) => new Array(tiles(letter)).fill(letter))

export const initialTiles = (seed: string = new Date().toISOString()): TileSet => {
  const random = randomGenerator(seed)
  const randomSort = () => random() - 0.5
  const makeTile = (letter: Letter) => ({ letter, isFaceUp: false })
  return initialLetters.sort(randomSort).map(makeTile)
}

export const wordScore = (word: string) =>
  word.split('').reduce((sum, letter) => sum + points(letter as Letter), 0)

export const totalScore = (words: string[]) => words.reduce((sum, word) => sum + wordScore(word), 0)
