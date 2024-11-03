import { useNavigate } from 'react-router-dom';
import { Grid, Text } from 'components';
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
          <Text size={18} weight={500} tag="span">
            {oompaLoompa.first_name} {oompaLoompa.last_name}
          </Text>
        </Styled.Button>
        <Text size={14} weight={300} color="gray" tag="span">
          {Gender[oompaLoompa.gender]}
        </Text>
        <Text size={14} weight={300} color="gray" tag="span" fontStyle="italic">
          {oompaLoompa.profession}
        </Text>
      </Grid>
    </Styled.Container>
  );
};

export default OompaLoompaCard;
