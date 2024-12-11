import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {
  selectOompaLoompaById,
  selectOompaLoompasDetail,
} from 'src/store/oompaLoompasDetail/selectors';
import { FlexContainer, Grid, Spinner, Text } from 'components';
import { LITERALS } from 'src/constants';
import { Gender } from 'types';
import { AppDispatch } from 'src/store';
import { fetchOompaLoompaById } from 'src/store/oompaLoompasDetail/slice';
import { ExtraInfo } from './types';
import { categorizeExtraInfo } from './utils';
import * as Styled from './styles';
import ShowMoreButton from './ShowMoreButton';

const OompaLoompaDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { oompaLoompaId } = useParams();
  const [showMoreSong, setShowMoreSong] = useState(false);
  const [showMoreRandomString, setShowMoreRandomString] = useState(false);
  const [showMoreQuota, setShowMoreQuota] = useState(false);
  const oompaLoompasDetail = useSelector(selectOompaLoompasDetail);
  const oompaLoompa = useSelector(selectOompaLoompaById(Number(oompaLoompaId)));
  const extraInfo = oompaLoompa && categorizeExtraInfo(oompaLoompa);

  useEffect(() => {
    dispatch(fetchOompaLoompaById(Number(oompaLoompaId)));
  }, [dispatch, oompaLoompaId]);

  if (oompaLoompasDetail.loading) {
    return <Spinner justify="center" align="center" />;
  }

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
      <Grid gap={24} alignContent="baseline">
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
          {parse(DOMPurify.sanitize(oompaLoompa.description || ''))}
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
      <Styled.LargeTextContainer gap={16} columns="repeat(3, 1fr)">
        <Grid gap={4} alignContent="baseline">
          <Text size={16} weight={500} tag="span">
            {LITERALS.OompaLoompaDetail.favoriteSong}
          </Text>
          <Styled.Song
            size={14}
            weight={300}
            lineHeight="180%"
            color="gray"
            fontStyle="italic"
            $showMoreSong={showMoreSong}
          >
            {oompaLoompa.favorite.song}
          </Styled.Song>
          <ShowMoreButton showMore={showMoreSong} setShowMore={setShowMoreSong} />
        </Grid>
        <Grid gap={4} alignContent="baseline">
          <Text size={16} weight={500} tag="span">
            {LITERALS.OompaLoompaDetail.quota}
          </Text>
          <Styled.LargeText
            size={14}
            weight={300}
            lineHeight="180%"
            fontStyle="italic"
            color="gray"
            $showMore={showMoreQuota}
          >
            {oompaLoompa.quota}
          </Styled.LargeText>
          <ShowMoreButton showMore={showMoreQuota} setShowMore={setShowMoreQuota} />
        </Grid>
        <Grid gap={4} alignContent="baseline">
          <Text size={16} weight={500} tag="span">
            {LITERALS.OompaLoompaDetail.randomString}
          </Text>
          <Styled.LargeText
            size={14}
            weight={300}
            lineHeight="180%"
            fontStyle="italic"
            color="gray"
            $showMore={showMoreRandomString}
          >
            {oompaLoompa.favorite.random_string}
          </Styled.LargeText>
          <ShowMoreButton showMore={showMoreRandomString} setShowMore={setShowMoreRandomString} />
        </Grid>
      </Styled.LargeTextContainer>
    </Styled.Container>
  );
};

export default OompaLoompaDetail;
