import styled from 'styled-components';
import { FlexContainerStyledProps } from './types';

export const Container = styled.div<FlexContainerStyledProps>`
  display: flex;
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  flex-wrap: ${({ $wrap }) => $wrap};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'initial')};
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : 'initial')};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
`;
