import React from 'react'
import { Tile } from './Tile'

export default { title: 'Tiles', id: '1' }

export const Small = () => (
  <div>
    <Tile letter="A" size={36} id={1} />
    <Tile letter="J" size={36} id={2} />
    <Tile letter="Q" size={36} id={3} />
    <Tile letter="Q" size={36} id={4} isFaceUp={false} />
  </div>
)

export const Medium = () => (
  <div>
    <Tile letter="A" size={65} id={5} />
    <Tile letter="J" size={65} id={6} />
    <Tile letter="Q" size={65} id={7} />
    <Tile letter="Q" size={65} id={8} isFaceUp={false} />
  </div>
)

export const Large = () => (
  <div>
    <Tile letter="A" size={100} id={9} />
    <Tile letter="J" size={100} id={10} />
    <Tile letter="Q" size={100} id={11} />
    <Tile letter="Q" size={100} id={12} isFaceUp={false} />
  </div>
)
