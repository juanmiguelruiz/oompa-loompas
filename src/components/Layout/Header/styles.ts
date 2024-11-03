import styled from 'styled-components';
import { BREAKPOINTS } from 'src/constants';

export const Container = styled.div`
  padding: 4px 16px;
  background-color: lightgray;

  @media (min-width: ${BREAKPOINTS.MOBILE_L}) {
    padding: 24px;
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 4px 32px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_EXTRA_SMALL}) {
    padding: 4px 64px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_SMALL}) {
    padding: 4px 80px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 4px 96px;
  }
`;

export const HeaderButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 32px;
`;
