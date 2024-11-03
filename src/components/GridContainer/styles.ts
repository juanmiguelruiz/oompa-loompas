import styled from 'styled-components';
import { GridProps } from './types';

export const Container = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => gap && `${gap}px`};
  column-gap: ${({ columnGap }) => columnGap && `${columnGap}px`};
  row-gap: ${({ rowGap }) => rowGap && `${rowGap}px`};
  align-items: ${({ alignContent }) => alignContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-content: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  grid-area: ${({ gridArea }) => gridArea};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'initial')};
`;
