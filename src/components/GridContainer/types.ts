export type GridJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type GridAlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export interface GridProps {
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  columns?: string;
  rows?: string;
  alignContent?: GridAlignItems;
  justifyContent?: GridJustifyContent;
  alignItems?: GridAlignItems;
  justifyItems?: GridJustifyContent;
  gridArea?: string;
  className?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}
