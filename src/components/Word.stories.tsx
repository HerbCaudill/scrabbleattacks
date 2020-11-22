import React from 'react'
import { Word } from './Word'

const centered = { display: 'flex', justifyContent: 'center' }

export default { title: 'Word', id: '2' }
export const ScrabbleAttacks = () => (
  <>
    <div style={centered}>
      <Word word="SCRABBLE" size={36} />
    </div>
    <div style={centered}>
      <Word word="ATTACKS" size={50} />
    </div>
  </>
)
