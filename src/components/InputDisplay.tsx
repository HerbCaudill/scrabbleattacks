/** @jsxImportSource @emotion/react */
import { Cursor } from './Cursor'

type InputDisplayProps = {
  input: string
}

export const InputDisplay: React.FC<InputDisplayProps> = ({ input }) => {
  return (
    <div>
      {input.split('').map(c => {
        return <span>{c}</span>
      })}
      <Cursor></Cursor>
    </div>
  )
}
