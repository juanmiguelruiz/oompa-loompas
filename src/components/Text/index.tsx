import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { TextProps } from './types';

const Text = ({ children, tag, ...rest }: PropsWithChildren<TextProps>) => (
  <Styled.Text as={tag} {...rest}>
    {children}
  </Styled.Text>
);

export default Text;
