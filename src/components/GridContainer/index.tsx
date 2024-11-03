import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { GridProps } from './types';

const Grid = ({ children, ...rest }: PropsWithChildren<GridProps>) => (
  <Styled.Container {...rest}>{children}</Styled.Container>
);
export default Grid;
