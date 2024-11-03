import styled from 'styled-components';
import { TextStyledProps } from './types';

export const Text = styled.p<TextStyledProps>`
  font-family: 'Satoshi', sans-serif;
  font-size: ${({ $size }) => $size && `${$size}px`};
  color: ${({ $color }) => $color};
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineHeight }) => $lineHeight};
  text-align: ${({ $align }) => $align};
  font-style: ${({ $fontStyle }) => $fontStyle};
`;
