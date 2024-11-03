import styled, { keyframes } from 'styled-components';
import { FlexContainer } from 'components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled(FlexContainer)`
  height: 100%;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  svg {
    animation: ${spin} 0.8s linear infinite;
    transform-origin: center;
  }
`;
