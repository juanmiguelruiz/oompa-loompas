import styled, { keyframes } from 'styled-components';
import { Grid, Text } from 'components';
import { BREAKPOINTS } from 'src/constants';

const fadeOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled(Grid)`
  animation: ${fadeOpacity} 1s ease-out;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
`;

export const ImageContainer = styled.div`
  background: #f0f0f0;
  overflow: hidden;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  text-align: start;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    text-align: center;
  }

  :hover {
    text-decoration: underline;
    color: darkcyan;
  }
`;

export const CenteredText = styled(Text)`
  text-align: start;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    text-align: center;
  }
`;
