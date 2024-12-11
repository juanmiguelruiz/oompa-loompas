import { Text } from 'src/components';
import * as Styled from './styles';

const ShowMoreButton = ({
  mode = 'primary',
  showMore,
  setShowMore,
}: {
  mode?: 'primary' | 'secondary';
  showMore: boolean;
  setShowMore: (showMore: boolean) => void;
}) => (
  <Styled.ShowMoreButton $mode={mode} type="button" onClick={() => setShowMore(!showMore)}>
    <Text size={12} weight={400} tag="span">
      {showMore ? 'Show Less' : 'Show More'}
    </Text>
  </Styled.ShowMoreButton>
);

export default ShowMoreButton;
