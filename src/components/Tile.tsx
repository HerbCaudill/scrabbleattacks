/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Fragment, MouseEventHandler } from 'react'
import { Letter, points } from 'scrabble'
import tinycolor from 'tinycolor2'
import { fade, linearGradient, pct, px, rotate, translate } from '../lib/css'
import { randomGenerator } from '../randomGenerator'

export const Tile = (props: TileProps) => {
  const { letter, seed = letter, isFaceUp = true, onClick } = props

  const expandedSeed = `${seed}_${isFaceUp ? 'up' : 'down'}`
  const styles = getStyles({ ...props, seed: expandedSeed })

  return (
    <div css={styles.tile} onClick={onClick}>
      {isFaceUp && (
        <Fragment>
          <span css={styles.letter}>{letter}</span>
          <span css={styles.points}>{points(letter)}</span>
        </Fragment>
      )}
    </div>
  )
}

const getStyles = ({ size = 100, seed, jiggleFactor }: Partial<TileProps>) => {
  const unit = size / 19
  const unitPx = (n: number, fontSize: number = 1) => px(n * unit * fontSize)

  // randomization
  const random = randomGenerator(seed) // use letter as random seed, so it's stable
  const rnd = (n: number) => random() * n
  const rndUnitPx = (n: number) => unitPx(rnd(n))
  const rnd0 = (n: number) => random() * n * 2 - n
  const rnd0UnitPx = (n: number) => unitPx(rnd0(n))

  //colors
  const black = tinycolor('black')
  const white = tinycolor('white')
  const base = tinycolor('#f5cf90')
  const overlay = base.clone().darken(rnd0(10)).desaturate(rnd0(10))
  const overlayDark = overlay.clone().darken(50)
  const overlayLight = overlay.clone().lighten(50)

  const thin = 0.5 * unit
  const small = 0.75 * unit
  const med = 1.5 * unit

  const dimensions = { height: px(size * 1.15), width: px(size) }

  const backgroundOverlay = css({
    content: '""',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
    backgroundImage: linearGradient(rnd(360), overlayDark, overlayLight),
    opacity: 0.2,
    mixBlendMode: 'color-burn',
    borderRadius: med * 2,
    boxSizing: 'border-box',
  })

  const background = {
    backgroundImage: 'url(/images/wood.jpg)',
    backgroundSize: pct(unit * 200),
    backgroundPosition: [rndUnitPx(600), rndUnitPx(600)].join(' '),
    ':after': { ...backgroundOverlay },
  }

  const borders = {
    borderTopColor: fade(white, 0.55),
    borderTopWidth: small,

    borderRightColor: fade(black, 0.25),
    borderRightWidth: thin,

    borderBottomColor: fade(black, 0.2),
    borderBottomWidth: med + 1,

    borderLeftColor: fade(white, 0.75),
    borderLeftWidth: thin,

    borderRadius: med * 2,
    borderStyle: 'solid',
  }

  const jiggle = (n: number = 3) => ({
    transform: [
      rotate(rnd0(n)), //
      translate(rnd0UnitPx(n / 4), rnd0UnitPx(n / 4)),
    ].join(' '),
    // marginBottom: rndUnitPx(n / 2),
    // marginRight: rndUnitPx(n / 2),
  })

  const tile = css({
    display: 'inline-block',
    position: 'relative',
    ...dimensions,
    ...borders,
    ...background,
    boxShadow: [0, px(small), px(med), 0, fade(black, 0.2).toString()].join(
      ' '
    ),
    boxSizing: 'border-box',
    margin: unitPx(0.5),
    cursor: 'pointer',
    ...jiggle(jiggleFactor),
  })

  const insetText = (fontSize: number) => {
    const tinyPx = (n: number) => unitPx(n, fontSize / 7)
    return {
      fontSize: size * fontSize,
      backgroundClip: 'text',
      color: fade(black, 0.5),
      textShadow: [
        `${tinyPx(4)} ${tinyPx(4)} ${tinyPx(4)} ${fade(white, 0.5)}`,
        `0 0 0 ${fade(black, 0.7)}`,
        `${tinyPx(2)} ${tinyPx(4)} ${tinyPx(2)} ${fade(base, 0.5)}`,
      ].join(','),
    }
  }

  const letter = css({
    ...insetText(0.7),
    fontFamily: 'Oswald, sans-serif',
    left: '50%',
    top: '45%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
  })

  const points = css({
    ...insetText(0.235),
    fontFamily: 'sans-serif',
    position: 'absolute',
    bottom: small,
    left: 0,
    right: small,
    textAlign: 'right',
  })

  return { tile, letter, points }
}

export interface TileProps {
  letter: Letter
  size?: number
  seed?: string
  isFaceUp?: boolean
  jiggleFactor?: number
  onClick?: MouseEventHandler<HTMLElement>
}
