import { Game, Player } from './Game'

const players: Player[] = [
  { name: 'Herb', words: ['QUAGMIRE', 'JINX'] },
  { name: 'Nancy', words: ['ABJURE', 'EXARCH'] },
]

const newGame = () => (
  <Game size={36} players={players} localPlayerName="Herb" />
)

export default { title: 'Game', id: '4' }

export const initial = () => newGame()
