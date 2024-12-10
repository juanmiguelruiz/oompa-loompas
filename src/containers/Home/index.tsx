import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { selectOompaLoompas, selectOompaLoompasByPage } from 'store/oompaLoompas/selectors';
import { fetchOompaLoompas } from 'store/oompaLoompas/slice';
import { Spinner, Text } from 'components';
import { IMAGES, LITERALS } from 'src/constants';
import { AppDispatch } from 'src/store';
import Card from './Card';
import * as Styled from './styles';

const Home = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const { data, loading } = useSelector(selectOompaLoompasByPage(page));
  const pagesLength = useSelector(selectOompaLoompas)?.data?.total;
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadMore = (): void => {
    if (pagesLength > page) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const observerTarget = useInfiniteScroll(handleLoadMore, { loading });

  const filteredOompaLoompas = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase().trim().replace(/\s+/g, ' ');
    return data?.filter(oompaLoompa => {
      const fullName = `${oompaLoompa.first_name} ${oompaLoompa.last_name}`.toLowerCase().trim();
      return fullName.includes(searchTermLower);
    });
  }, [data, searchTerm]);

  useEffect(() => {
    dispatch(fetchOompaLoompas(page));
  }, [dispatch, page]);

  if (loading && page === 1) {
    return <Spinner justify="center" align="center" />;
  }

  return (
    <Styled.Container>
      <Styled.SearchContainer fullWidth>
        <Styled.SearchInputContainer align="center" gap={8}>
          <Styled.SearchInput
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Styled.Separator />
          <Styled.SearchIcon src={IMAGES.SEARCH_ICON} alt="search" />
        </Styled.SearchInputContainer>
      </Styled.SearchContainer>
      <Styled.TitleContainer justifyContent="center" alignItems="center" gap={8}>
        <Styled.Title weight={400} align="center" tag="span">
          {LITERALS.Home.title}
        </Styled.Title>
        <Styled.Subtitle weight={400} color="gray" align="center" tag="span">
          {LITERALS.Home.subtitle}
        </Styled.Subtitle>
      </Styled.TitleContainer>
      <Styled.OompaLoompasContainer
        columns="repeat(3, 1fr)"
        columnGap={56}
        rowGap={32}
        justifyContent="center"
      >
        {filteredOompaLoompas?.map(oompaLoompa => (
          <Card key={oompaLoompa.id} oompaLoompa={oompaLoompa} />
        ))}
      </Styled.OompaLoompasContainer>
      {!filteredOompaLoompas?.length && !loading && (
        <Text size={32} weight={400} color="gray" align="center" tag="span">
          {LITERALS.Home.noResultsFound}
        </Text>
      )}
      {!searchTerm && <Styled.ObserverTarget ref={observerTarget} />}
    </Styled.Container>
  );
};

export default Home;
