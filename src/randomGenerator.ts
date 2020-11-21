import seedRandom from 'seed-random'

export const randomGenerator = (seed: string = new Date().toISOString()) =>
  seedRandom(seed)
