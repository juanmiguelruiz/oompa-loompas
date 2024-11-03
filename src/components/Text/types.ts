import React from 'react';

type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end'
  | 'match-parent'
  | 'inherit'
  | 'initial'
  | 'unset';

export interface TextProps {
  size?: number;
  color?: string;
  weight?: number;
  lineHeight?: string;
  align?: TextAlign;
  fontStyle?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
}
