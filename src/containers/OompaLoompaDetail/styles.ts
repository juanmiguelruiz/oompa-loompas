import styled from 'styled-components';
import { FlexContainer, Grid, Text } from 'components';
import { BREAKPOINTS } from 'src/constants';

export const Container = styled(Grid)`
  display: grid;
  grid-template-columns: 400px 1fr;
  padding: 32px;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  aspect-ratio: 4/3;
  width: 400px;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    width: 100%;
    aspect-ratio: auto;
  }
`;

export const Description = styled(Text)`
  overflow-wrap: break-word;
  width: 100%;
  max-width: 550px;
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExtraInfo = styled(Grid)`
  grid-auto-rows: min-content;
  grid-template-columns: 300px;
`;

export const Song = styled(Text)<{ $showMoreSong: boolean }>`
  white-space: pre-line;
  overflow: hidden;
  max-height: ${({ $showMoreSong }) => ($showMoreSong ? 'auto' : '128px')};
`;

export const ShowMoreButton = styled.button`
  all: unset;
  cursor: pointer;
  background: antiquewhite;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const ColorBox = styled(FlexContainer)<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export const Email = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;
