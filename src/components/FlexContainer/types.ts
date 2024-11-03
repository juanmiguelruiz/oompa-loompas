export type FlexJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexAlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface FlexContainerProps {
  align?: FlexAlignItems;
  justify?: FlexJustifyContent;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  flexGrow?: number;
  className?: string;
}

export interface FlexContainerStyledProps {
  $align?: FlexAlignItems;
  $justify?: FlexJustifyContent;
  $direction?: FlexDirection;
  $wrap?: FlexWrap;
  $gap?: number;
  $fullWidth?: boolean;
  $fullHeight?: boolean;
  $flexGrow?: number;
}
