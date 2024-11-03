import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockOompaLoompasList } from 'tests/mocks/oompaLoompas';
import { IMAGES } from 'src/constants';
import Home from './index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('hooks/useInfiniteScroll', () => ({
  useInfiniteScroll: () => ({ current: null }),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);
    jest.spyOn(reactRedux, 'useSelector').mockReturnValue({
      data: mockOompaLoompasList,
      loading: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders search input', () => {
    renderWithRouter(<Home />);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Find your Oompa Loompa')).toBeInTheDocument();
    expect(screen.getByText('There are more than 100k')).toBeInTheDocument();
  });

  it('renders cards for each Oompa Loompa', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('filters cards when searching', () => {
    renderWithRouter(<Home />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });

  it('shows no results message when search has no matches', () => {
    renderWithRouter(<Home />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'XYZ' } });

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('renders loading spinner when loading', () => {
    jest.spyOn(reactRedux, 'useSelector').mockReturnValue({
      data: [],
      loading: true,
    });

    renderWithRouter(<Home />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders search icon', () => {
    renderWithRouter(<Home />);
    const searchIcon = screen.getByAltText('search');
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveAttribute('src', IMAGES.SEARCH_ICON);
  });
});
