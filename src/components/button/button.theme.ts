import { palette, spacers } from '../theme';

export interface Type {
  bg: string;
  bgHover?: string;
  border: string;
  borderColorHover?: string;
  color: string;
  padding: string;
};

export const standard = {
  bg: palette.colorLighter,
  bgHover: palette.colorLightest,
  border: `2px solid ${palette.colorLighter}`,
  borderColorHover: palette.colorLight,
  color: palette.colorDarkest,
  padding: `${spacers.sm} ${spacers.md}`,
};

export const primary = {
  ...standard,
  bg: palette.colorAccent,
  bgHover: palette.colorAccentDark,
  color: palette.colorLightest,
  border: `2px solid ${palette.colorAccent}`,
  borderColorHover: palette.colorAccentDark,  
};
