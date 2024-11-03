import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { FlexContainerProps } from './types';

const FlexContainer = ({ children, ...rest }: PropsWithChildren<FlexContainerProps>) => (
  <Styled.Container {...rest}>{children}</Styled.Container>
);

export default FlexContainer;
