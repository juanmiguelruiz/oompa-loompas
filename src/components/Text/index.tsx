import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { TextProps } from './types';

const Text = ({
  children,
  tag,
  size,
  color,
  weight,
  lineHeight,
  align,
  fontStyle,
  ...rest
}: PropsWithChildren<TextProps>) => (
  <Styled.Text
    as={tag}
    $size={size}
    $color={color}
    $weight={weight}
    $lineHeight={lineHeight}
    $align={align}
    $fontStyle={fontStyle}
    {...rest}
  >
    {children}
  </Styled.Text>
);

export default Text;
