import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectOompaLoompaById } from 'store/oompaLoompas/selectors';
import { FlexContainer, Grid, Text } from 'components';
import { LITERALS } from 'src/constants';
import { Gender } from 'types';
import { ExtraInfo } from './types';
import { categorizeExtraInfo } from './utils';
import * as Styled from './styles';

const OompaLoompaDetail = () => {
  const { oompaLoompaId } = useParams();
  const [showMoreSong, setShowMoreSong] = useState(false);
  const oompaLoompa = useSelector(selectOompaLoompaById(Number(oompaLoompaId)));
  const extraInfo = oompaLoompa && categorizeExtraInfo(oompaLoompa);

  if (!oompaLoompa) {
    return (
      <Text size={18} weight={400} fontStyle="italic" color="gray" tag="span">
        {LITERALS.OompaLoompaDetail.notFound}
      </Text>
    );
  }

  return (
    <Styled.Container gap={32}>
      <FlexContainer>
        <Styled.Image src={oompaLoompa.image} />
      </FlexContainer>
      <Grid gap={24}>
        <Grid gap={4}>
          <Text size={18} weight={500} tag="span">
            {oompaLoompa.first_name} {oompaLoompa.last_name}
          </Text>
          <Text size={14} weight={300} color="gray" tag="span">
            {Gender[oompaLoompa.gender]}
          </Text>
          <Text size={14} weight={300} color="gray" tag="span" fontStyle="italic">
            {oompaLoompa.profession}
          </Text>
        </Grid>
        <Styled.Description size={14} weight={300} lineHeight="160%" color="gray" tag="span">
          {oompaLoompa.favorite.random_string}
        </Styled.Description>
      </Grid>
      <Styled.ExtraInfo gap={16}>
        <Text size={16} weight={500} tag="span">
          {LITERALS.OompaLoompaDetail.extraInfo}
        </Text>
        {extraInfo &&
          Object.keys(extraInfo).map(key => {
            const { label, value, component: Component } = extraInfo[key as keyof ExtraInfo];
            return (
              <FlexContainer align="center" gap={4} key={key}>
                <Text size={14} weight={300} tag="span" color="grey">
                  {label}
                </Text>
                <Text size={14} weight={300} tag="span">
                  {value}
                </Text>
                {Component && Component}
              </FlexContainer>
            );
          })}
      </Styled.ExtraInfo>
      <Grid gap={16}>
        <Text size={16} weight={500} tag="span">
          {LITERALS.OompaLoompaDetail.favoriteSong}
        </Text>
        <Styled.Song
          size={14}
          weight={300}
          lineHeight="180%"
          color="gray"
          tag="span"
          fontStyle="italic"
          $showMoreSong={showMoreSong}
        >
          {oompaLoompa.favorite.song}
        </Styled.Song>
        <Styled.ShowMoreButton type="button" onClick={() => setShowMoreSong(!showMoreSong)}>
          <Text size={12} weight={400} tag="span">
            {showMoreSong ? 'Show Less' : 'Show More'}
          </Text>
        </Styled.ShowMoreButton>
      </Grid>
    </Styled.Container>
  );
};

export default OompaLoompaDetail;
