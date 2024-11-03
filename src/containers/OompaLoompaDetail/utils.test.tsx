import { render, screen } from '@testing-library/react';
import { mockOompaLoompa1 } from 'tests/mocks/oompaLoompas';
import { categorizeExtraInfo } from './utils';

describe('OompaLoompaDetail utils', () => {
  describe('categorizeExtraInfo', () => {
    it('should correctly categorize all extra info', () => {
      const result = categorizeExtraInfo(mockOompaLoompa1);
      expect(Object.keys(result)).toEqual(['email', 'age', 'height', 'country', 'color', 'food']);
    });

    it('should format email with correct link', () => {
      const { email } = categorizeExtraInfo(mockOompaLoompa1);
      render(<>{email.value}</>);

      const emailLink = screen.getByRole('link');
      expect(emailLink).toHaveAttribute('href', 'mailto:john@wonka.com');
      expect(emailLink).toHaveTextContent('john@wonka.com');
    });

    it('should format height with cm unit', () => {
      const { height } = categorizeExtraInfo(mockOompaLoompa1);
      expect(height.value).toBe('150 cm');
    });

    it('should include age as a number', () => {
      const { age } = categorizeExtraInfo(mockOompaLoompa1);
      expect(age.value).toBe(25);
    });

    it('should include country directly', () => {
      const { country } = categorizeExtraInfo(mockOompaLoompa1);
      expect(country.value).toBe('Wonderland');
    });

    it('should format favorite color with ColorBox component', () => {
      const { color } = categorizeExtraInfo(mockOompaLoompa1);
      expect(color.value).toBe('blue');
      expect(color.component).toBeDefined();

      const { container } = render(<>{color.component}</>);
      const colorBox = container.firstChild;
      expect(colorBox).toHaveStyle({ backgroundColor: 'blue' });
    });

    it('should include favorite food directly', () => {
      const { food } = categorizeExtraInfo(mockOompaLoompa1);
      expect(food.value).toBe('chocolate');
    });

    it('should have correct labels for all fields', () => {
      const result = categorizeExtraInfo(mockOompaLoompa1);

      expect(result.email.label).toBe('Email');
      expect(result.age.label).toBe('Age');
      expect(result.height.label).toBe('Height');
      expect(result.country.label).toBe('Country');
      expect(result.color.label).toBe('Favorite Color');
      expect(result.food.label).toBe('Favorite Food');
    });
  });
});
