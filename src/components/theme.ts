export const palette = {
  colorLightest: '#fcfcfc',
  colorLighter: '#d6d6d6',
  colorLight: '#afafaf',
  colorBase: '#898989',
  colorDark: '#636363',
  colorDarker: '#3d3d3d',
  colorDarkest: '#161616',

  colorAccentLightest: '#0000fc',
  colorAccentLighter: '#0000d6',
  colorAccentLight: '#0000af',
  colorAccent: '#000089',
  colorAccentDark: '#000063',
  colorAccentDarker: '#00003d',
  colorAccentDarkest: '#000016',
};

// includes the core above extended with some semantic/use-case mappings
export const extendedPalette = {
  ...palette,
  linkColor: palette.colorAccent,
  linkColorActive: palette.colorAccentDark,
  primaryBg: 'white',
}

export const spacers = {
  // random-ass system based'ish on 16px and 1.6 scaling? psh, why not.
  xs: '6px',
  sm: '10px',
  md: '16px',
  lg: '26px',
  xl: '42px',
}

// the kitchen sink
export default {
  colors: {
    ...extendedPalette,
  },
  padding: {
    ...spacers,
  },
  margin: {
    ...spacers,
  },
}
