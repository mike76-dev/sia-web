import { globalCss } from './theme'

// Reset and normalize css
export const resetStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    lineHeight: 1,
  },

  'html, body, #root, #__next, #__next > div, .theme-0': {
    height: '100%',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5, h6, p, span': {
    padding: 0,
    margin: 0,
  },
})