import { Text } from 'src/components';
import * as Styled from './styles';

const ShowMoreButton = ({
  showMore,
  setShowMore,
}: {
  showMore: boolean;
  setShowMore: (showMore: boolean) => void;
}) => (
  <Styled.ShowMoreButton type="button" onClick={() => setShowMore(!showMore)}>
    <Text size={12} weight={400} tag="span">
      {showMore ? 'Show Less' : 'Show More'}
    </Text>
  </Styled.ShowMoreButton>
);

export default ShowMoreButton;
