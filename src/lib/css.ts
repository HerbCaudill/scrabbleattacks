import { Instance as Color } from 'tinycolor2'

// units

export const px = (n: number) => `${n}px`

export const pct = (n: number) => `${n}%`

// helpers

export const linearGradient = (angle: number, a: string | Color, b: string | Color) =>
  `linear-gradient(${angle}deg, ${a}, ${b})`

export const rotate = (angle: number) => `rotate(${angle}deg)`

export const translate = (x: string, y: string = x) => `translate(${x}, ${y})`

// colors

export const fade = (color: Color, pct = 0.5) => color.clone().setAlpha(pct).toString()
