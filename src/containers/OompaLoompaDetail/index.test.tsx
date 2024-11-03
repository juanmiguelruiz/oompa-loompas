import { ReactElement } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockOompaLoompa1 } from 'tests/mocks/oompaLoompas';
import OompaLoompaDetail from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    oompaLoompaId: '1',
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const renderWithRouter = (component: ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('OompaLoompaDetail Component', () => {
  beforeEach(() => {
    jest.spyOn(reactRedux, 'useSelector').mockReturnValue(mockOompaLoompa1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders extra info section', () => {
    renderWithRouter(<OompaLoompaDetail />);

    expect(screen.getByText('Extra Info')).toBeInTheDocument();
    expect(screen.getByText('john@wonka.com')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('150 cm')).toBeInTheDocument();
  });

  it('handles show more/less song functionality', () => {
    renderWithRouter(<OompaLoompaDetail />);

    const showMoreButton = screen.getByText('Show More');
    expect(showMoreButton).toBeInTheDocument();

    fireEvent.click(showMoreButton);
    expect(screen.getByText('Show Less')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Show Less'));
    expect(screen.getByText('Show More')).toBeInTheDocument();
  });

  it('renders not found message when no Oompa Loompa is found', () => {
    jest.spyOn(reactRedux, 'useSelector').mockReturnValue(null);
    renderWithRouter(<OompaLoompaDetail />);

    expect(screen.getByText('OompaLoompa not found')).toBeInTheDocument();
  });
});
