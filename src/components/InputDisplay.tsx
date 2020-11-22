/** @jsxImportSource @emotion/react */
import { Cursor } from './Cursor'

type InputDisplayProps = {
  input: string
  size: number
}

export const InputDisplay: React.FC<InputDisplayProps> = ({ input, size }) => {
  return (
    <div
      css={{
        minHeight: size * 2,
        fontFamily: 'Oswald, sans-serif',
        fontSize: size,
      }}
    >
      {input.split('').map(c => {
        return <span>{c}</span>
      })}
      <Cursor size={size}></Cursor>
    </div>
  )
}
