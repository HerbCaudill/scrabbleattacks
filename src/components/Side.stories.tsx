import React from 'react'
import { Side } from './Side'

export default { title: 'Side', id: '4' }

export const Herb = () => (
  <Side
    isLocalPlayer={true}
    size={36}
    words={['QUAGMIRE', 'JINX', 'ABSQUATULATED']}
    name="Herb"
  />
)
