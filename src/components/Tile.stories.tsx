import React from 'react'
import { Tile } from './Tile'

export default { title: 'Tiles', id: '1' }

export const Small = () => (
  <div>
    <Tile letter="A" size={75} seed="SA" />
    <Tile letter="J" size={75} seed="SJ" />
    <Tile letter="Q" size={75} seed="SQ" />
    <Tile letter="Q" size={75} seed="SQ" isFaceUp={false} />
  </div>
)

export const Medium = () => (
  <div>
    <Tile letter="A" size={150} seed="MA" />
    <Tile letter="J" size={150} seed="MJ" />
    <Tile letter="Q" size={150} seed="MQ" />
    <Tile letter="Q" size={150} seed="MQ" isFaceUp={false} />
  </div>
)

export const Large = () => (
  <div>
    <Tile letter="A" size={300} seed="LA" />
    <Tile letter="J" size={300} seed="LJ" />
    <Tile letter="Q" size={300} seed="LQ" />
    <Tile letter="Q" size={300} seed="LQ" isFaceUp={false} />
  </div>
)
