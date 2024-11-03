import styled from 'styled-components';
import { BREAKPOINTS } from 'src/constants';

export const Content = styled.div`
  padding: 16px;
  max-width: 1200px;

  @media (min-width: ${BREAKPOINTS.MOBILE_L}) {
    padding: 24px;
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    padding: 24px 32px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_EXTRA_SMALL}) {
    padding: 24px 64px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_SMALL}) {
    padding: 24px 80px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 24px 96px;
  }
`;
