import { useNavigate } from 'react-router-dom';
import { IMAGES, ROUTES } from 'src/constants';
import { FlexContainer, Text } from 'components';
import * as Styled from './styles';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Styled.Container>
      <Styled.HeaderButton onClick={handleClick}>
        <FlexContainer align="center" gap={16}>
          <Styled.Logo src={IMAGES.LOGO} alt="Oompa Loompa's Crew" />
          <Text tag="h2" size={18} weight={600}>
            Oompa Loompa's Crew
          </Text>
        </FlexContainer>
      </Styled.HeaderButton>
    </Styled.Container>
  );
};

export default Header;
