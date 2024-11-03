import { render, screen } from '@testing-library/react';
import Text from './index';

describe('Text Component', () => {
  it('renders text content correctly', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with different HTML tags', () => {
    const { rerender } = render(<Text tag="h1">Heading</Text>);
    expect(screen.getByText('Heading').tagName).toBe('H1');

    rerender(<Text tag="span">Span text</Text>);
    expect(screen.getByText('Span text').tagName).toBe('SPAN');

    rerender(<Text tag="p">Paragraph</Text>);
    expect(screen.getByText('Paragraph').tagName).toBe('P');
  });
});
