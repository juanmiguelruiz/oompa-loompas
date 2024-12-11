import styled from 'styled-components';

export const ShowMoreButton = styled.button<{ $mode: 'primary' | 'secondary' }>`
  all: unset;
  cursor: pointer;
  background: ${({ $mode }) => ($mode === 'primary' ? 'antiquewhite' : 'lightgray')};
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
`;
