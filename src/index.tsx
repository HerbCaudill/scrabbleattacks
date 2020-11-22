import React from 'react'
import ReactDOM from 'react-dom'
import { Game, Player } from './components/Game'

const players: Player[] = [
  { name: 'Herb', words: ['QUAGMIRE', 'JINX'] },
  { name: 'Nancy', words: ['ABJURE', 'EXARCH'] },
]

ReactDOM.render(
  <Game size={36} localPlayerName="Herb" players={players} />,
  document.getElementById('root')
)
