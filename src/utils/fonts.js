/*
 * SparkPost Fonts ⌨
 */
const fontMap = {
  primary: `'Gotham Narrow SSm A', 'Gotham Narrow SSm B', 'Gotham Narrow', 'Helvetica', sans-serif`,
  secondary: `'Gotham SSm A', 'Gotham SSm B', 'Gotham', 'Helvetica', sans-serif`,
  monospace: 'Source Code Pro, monospace',
}

/*
 * SparkPost Font weights ⚖
 */
const weightMap = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 600,
}

function font(f) {
  if (!fontMap[f]) {
    console.log(`Font ${f} undefined`)
  }

  return fontMap[f]
}

function weight(w) {
  if (!weightMap[w]) {
    console.log(`Weight ${w} undefined`)
  }

  return weightMap[w]
}

function rem(s = 18) {
  return `${s / 18}rem`
}

const uppercase = `
  font-family: ${font('secondary')};
  font-weight: 400;
  text-transform: uppercase;
`

const monospace = `
  font-family: ${font('monospace')};
  font-size: 85%;
  font-weight: 400;
`

export { font, weight, rem, uppercase, monospace }
