import { Game } from './Game'
import { Player } from '../types'

const players: Player[] = [
  { name: 'Herb', words: ['QUAGMIRE', 'JINX'] },
  { name: 'Nancy', words: ['ABJURE', 'EXARCH'] },
]

const newGame = () => (
  <Game size={36} players={players} localPlayerName="Herb" seed="1" />
)

export default { title: 'Game', id: '4' }

export const initial = () => newGame()
