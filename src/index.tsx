import React from 'react'
import ReactDOM from 'react-dom'
import { Game } from './components/Game'
import { Player } from './types'

const players: Player[] = [
  { name: 'Herb', words: ['QUAGMIRE', 'JINX'] },
  { name: 'Nancy', words: ['ABJURE', 'EXARCH'] },
]

ReactDOM.render(
  <Game size={36} seed="1" localPlayerName="Herb" players={players} />,
  document.getElementById('root')
)
