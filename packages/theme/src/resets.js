import { css} from '@emotion/css';

export const ResetText = css`
  font-family: inherit;
  font-size: inherit;
  line-height: 1;
`;

export const ResetMargin = css`
  margin: 0;
`;

export const ResetPadding = css`
  padding: 0;
`;

export const ResetSpacing = css`
  ${ResetMargin};
  ${ResetPadding};
`;
