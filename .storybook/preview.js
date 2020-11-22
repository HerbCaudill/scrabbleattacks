import { GlobalStyles } from '../src/components/GlobalStyles'

export const decorators = [
  storyFn => (
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  ),
]

const sortById = (a, b) =>
  a[1].kind === b[1].kind
    ? 0
    : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })

export const parameters = {
  actions: { disabled: true },
  options: { storySort: sortById },
  controls: { disabled: true },
}
