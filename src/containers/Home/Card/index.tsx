import { useNavigate } from 'react-router-dom';
import { Grid } from 'components';
import { Gender, OompaLoompa } from 'types';
import * as Styled from './styles';

const OompaLoompaCard = ({ oompaLoompa }: { oompaLoompa: OompaLoompa }) => {
  const navigate = useNavigate();
  return (
    <Styled.Container gap={16}>
      <Styled.ImageContainer>
        <Styled.Image src={oompaLoompa.image} alt={oompaLoompa.first_name} />
      </Styled.ImageContainer>
      <Grid gap={4}>
        <Styled.Button onClick={() => navigate(`/${oompaLoompa.id}`)}>
          <Styled.CenteredText size={18} weight={500} tag="span">
            {oompaLoompa.first_name} {oompaLoompa.last_name}
          </Styled.CenteredText>
        </Styled.Button>
        <Styled.CenteredText size={14} weight={300} color="gray" tag="span">
          {Gender[oompaLoompa.gender]}
        </Styled.CenteredText>
        <Styled.CenteredText size={14} weight={300} color="gray" tag="span" fontStyle="italic">
          {oompaLoompa.profession}
        </Styled.CenteredText>
      </Grid>
    </Styled.Container>
  );
};

export default OompaLoompaCard;
