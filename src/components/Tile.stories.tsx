import React from 'react'
import { Tile } from './Tile'

export default { title: 'Tiles', id: '1' }

export const Small = () => (
  <div>
    <Tile letter="A" size={36} seed="SA" />
    <Tile letter="J" size={36} seed="SJ" />
    <Tile letter="Q" size={36} seed="SQ" />
    <Tile letter="Q" size={36} seed="SQ" isFaceUp={false} />
  </div>
)

export const Medium = () => (
  <div>
    <Tile letter="A" size={65} seed="MA" />
    <Tile letter="J" size={65} seed="MJ" />
    <Tile letter="Q" size={65} seed="MQ" />
    <Tile letter="Q" size={65} seed="MQ" isFaceUp={false} />
  </div>
)

export const Large = () => (
  <div>
    <Tile letter="A" size={100} seed="LA" />
    <Tile letter="J" size={100} seed="LJ" />
    <Tile letter="Q" size={100} seed="LQ" />
    <Tile letter="Q" size={100} seed="LQ" isFaceUp={false} />
  </div>
)
