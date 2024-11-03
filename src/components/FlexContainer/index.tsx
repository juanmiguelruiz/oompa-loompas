import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { FlexContainerProps } from './types';

const FlexContainer = ({
  children,
  align,
  justify,
  direction,
  wrap,
  gap,
  fullWidth,
  fullHeight,
  flexGrow,
  ...rest
}: PropsWithChildren<FlexContainerProps>) => (
  <Styled.Container
    $align={align}
    $justify={justify}
    $direction={direction}
    $wrap={wrap}
    $gap={gap}
    $fullWidth={fullWidth}
    $fullHeight={fullHeight}
    $flexGrow={flexGrow}
    {...rest}
  >
    {children}
  </Styled.Container>
);

export default FlexContainer;
