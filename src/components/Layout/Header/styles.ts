import styled from 'styled-components';
import { BREAKPOINTS, HORIZONTAL_SPACING } from 'src/constants';

export const Container = styled.div`
  padding: 4px ${HORIZONTAL_SPACING.DEFAULT};
  background-color: lightgray;

  @media (min-width: ${BREAKPOINTS.MOBILE_L}) {
    padding: 4px ${HORIZONTAL_SPACING.MOBILE_L};
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 4px ${HORIZONTAL_SPACING.TABLET};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_EXTRA_SMALL}) {
    padding: 4px ${HORIZONTAL_SPACING.DESKTOP_EXTRA_SMALL};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_SMALL}) {
    padding: 4px ${HORIZONTAL_SPACING.DESKTOP_SMALL};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 4px ${HORIZONTAL_SPACING.DESKTOP};
  }
`;

export const HeaderButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 32px;
`;
