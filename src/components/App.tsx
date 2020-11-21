import React from 'react'
import { GlobalStyles } from 'components/GlobalStyles'
import { Board } from 'components/Board'
import { initialTiles } from 'scrabble'

function App() {
  const boardTiles = initialTiles()
  return (
    <div>
      <GlobalStyles />
      <Board size={50} jiggleFactor={10} seed="1" tiles={boardTiles} />
    </div>
  )
}

export default App
