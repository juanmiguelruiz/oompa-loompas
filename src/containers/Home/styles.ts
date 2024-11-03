import styled from 'styled-components';
import { FlexContainer, Grid, Text } from 'src/components';
import { BREAKPOINTS } from 'src/constants';

export const SearchContainer = styled(FlexContainer)`
  justify-content: end;
  @media (max-width: ${BREAKPOINTS.MOBILE_L}) {
    justify-content: center;
  }
`;

export const SearchInputContainer = styled(FlexContainer)`
  position: absolute;
  right: 8px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (min-width: ${BREAKPOINTS.MOBILE_L}) {
    right: 24px;
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    right: 32px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_EXTRA_SMALL}) {
    right: 64px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_SMALL}) {
    right: 80px;
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    right: 96px;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background-color: #ccc;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 110px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid transparent;

  &:focus-visible {
    outline: none;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_L}) {
    width: auto;
  }
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled(Text)`
  font-size: 48px;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: 40px;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_L}) {
    font-size: 32px;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_M}) {
    font-size: 24px;
  }
`;

export const Subtitle = styled(Text)`
  font-size: 32px;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: 24px;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_L}) {
    font-size: 24px;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_M}) {
    font-size: 18px;
  }
`;

export const OompaLoompasContainer = styled(Grid)`
  padding: 32px 0;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 0;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_L}) {
    grid-template-columns: repeat(1, 1fr);
    padding: 16px 0;
  }
`;

export const ObserverTarget = styled.div`
  height: 40px;
  width: 100%;
  margin: 20px 0;
`;
