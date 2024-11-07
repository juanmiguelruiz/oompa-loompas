import styled from 'styled-components';
import { BREAKPOINTS, HORIZONTAL_SPACING } from 'src/constants';

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

export const Content = styled.div`
  padding: ${HORIZONTAL_SPACING.DEFAULT};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINTS.MOBILE_L}) {
    padding: ${HORIZONTAL_SPACING.MOBILE_L};
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 24px ${HORIZONTAL_SPACING.TABLET};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_EXTRA_SMALL}) {
    padding: 24px ${HORIZONTAL_SPACING.DESKTOP_EXTRA_SMALL};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_SMALL}) {
    padding: 24px ${HORIZONTAL_SPACING.DESKTOP_SMALL};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 24px ${HORIZONTAL_SPACING.DESKTOP};
  }
`;
