import { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { GridProps } from './types';

const Grid = ({
  children,
  gap,
  columnGap,
  rowGap,
  columns,
  rows,
  alignContent,
  justifyContent,
  alignItems,
  justifyItems,
  gridArea,
  fullWidth,
  fullHeight,
  ...rest
}: PropsWithChildren<GridProps>) => (
  <Styled.Container
    $gap={gap}
    $columnGap={columnGap}
    $rowGap={rowGap}
    $columns={columns}
    $rows={rows}
    $alignContent={alignContent}
    $justifyContent={justifyContent}
    $alignItems={alignItems}
    $justifyItems={justifyItems}
    $gridArea={gridArea}
    $fullWidth={fullWidth}
    $fullHeight={fullHeight}
    {...rest}
  >
    {children}
  </Styled.Container>
);
export default Grid;
