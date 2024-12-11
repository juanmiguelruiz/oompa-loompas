import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { mockOompaLoompa1 } from 'tests/mocks/oompaLoompas';
import { selectOompaLoompasDetail } from 'src/store/oompaLoompasDetail/selectors';
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
  useDispatch: jest.fn(),
}));

jest.mock('dompurify', () => ({
  sanitize: jest.fn(content => content),
}));

jest.mock('html-react-parser', () => jest.fn(content => content));

const mockDispatch = jest.fn();

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('OompaLoompaDetail Component', () => {
  beforeEach(() => {
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);
    jest.spyOn(reactRedux, 'useSelector').mockReturnValue(mockOompaLoompa1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders OompaLoompa details correctly', () => {
    renderWithRouter(<OompaLoompaDetail />);

    expect(
      screen.getByText(`${mockOompaLoompa1.first_name} ${mockOompaLoompa1.last_name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockOompaLoompa1.profession)).toBeInTheDocument();
  });

  it('sanitizes and parses HTML description correctly', () => {
    renderWithRouter(<OompaLoompaDetail />);

    expect(DOMPurify.sanitize).toHaveBeenCalledWith(mockOompaLoompa1.description);
    expect(parse).toHaveBeenCalled();
  });

  it('handles show more/less functionality for song', () => {
    renderWithRouter(<OompaLoompaDetail />);

    const showMoreButtons = screen.getAllByRole('button', { name: 'Show More' });
    fireEvent.click(showMoreButtons[0]);

    const showLessButtons = screen.getAllByRole('button', { name: 'Show Less' });
    expect(showLessButtons[0]).toBeInTheDocument();

    fireEvent.click(showLessButtons[0]);
    expect(screen.getAllByRole('button', { name: 'Show More' })[0]).toBeInTheDocument();
  });

  it('handles show more/less functionality for random string', () => {
    renderWithRouter(<OompaLoompaDetail />);

    const showMoreButtons = screen.getAllByRole('button', { name: 'Show More' });
    fireEvent.click(showMoreButtons[1]);

    const showLessButtons = screen.getAllByRole('button', { name: 'Show Less' });
    expect(showLessButtons[0]).toBeInTheDocument();
  });

  it('handles show more/less functionality for quota', () => {
    renderWithRouter(<OompaLoompaDetail />);

    const showMoreButtons = screen.getAllByRole('button', { name: 'Show More' });
    fireEvent.click(showMoreButtons[2]);

    const showLessButtons = screen.getAllByRole('button', { name: 'Show Less' });
    expect(showLessButtons[0]).toBeInTheDocument();
  });

  it('renders not found message when no OompaLoompa is found', () => {
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(selector => {
      if (selector === selectOompaLoompasDetail) {
        return { loading: false };
      }
      return null;
    });

    renderWithRouter(<OompaLoompaDetail />);

    expect(screen.getByText('OompaLoompa not found')).toBeInTheDocument();
  });

  it('dispatches fetchOompaLoompaById on mount', () => {
    renderWithRouter(<OompaLoompaDetail />);

    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('renders extra info section correctly', () => {
    renderWithRouter(<OompaLoompaDetail />);

    expect(screen.getByText('Extra Info')).toBeInTheDocument();
    expect(screen.getByText(mockOompaLoompa1.email)).toBeInTheDocument();
    expect(screen.getByText(`${mockOompaLoompa1.age}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockOompaLoompa1.height} cm`)).toBeInTheDocument();
  });

  it('renders spinner when loading', () => {
    jest.spyOn(reactRedux, 'useSelector').mockImplementation(selector => {
      if (selector === selectOompaLoompasDetail) {
        return { loading: true };
      }
      return null;
    });

    const { container } = renderWithRouter(<OompaLoompaDetail />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
