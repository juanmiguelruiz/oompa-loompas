import { mockOompaLoompa1, mockOompaLoompa2 } from 'tests/mocks/oompaLoompas';
import { mockLoadedState } from 'tests/mocks/store';
import { selectOompaLoompas, selectOompaLoompasByPage, selectOompaLoompaById } from './selectors';

const emptyState = {
  oompaLoompas: {
    data: { total: 0, current: 0, resultsByPage: {} },
    loading: false,
    error: false,
  },
  _persist: { version: -1, rehydrated: true },
};

describe('Oompa Loompa Selectors', () => {
  describe('selectOompaLoompas', () => {
    it('should return the oompaLoompas state', () => {
      const result = selectOompaLoompas(mockLoadedState);
      expect(result).toBe(mockLoadedState.oompaLoompas);
    });
  });

  describe('selectOompaLoompasByPage', () => {
    it('should return accumulated results up to specified page', () => {
      const selector = selectOompaLoompasByPage(2);
      const result = selector(mockLoadedState);

      expect(result.data).toHaveLength(2);
      expect(result.data).toEqual([mockOompaLoompa1, mockOompaLoompa2]);
      expect(result.loading).toBe(false);
    });

    it('should return partial results for lower page number', () => {
      const selector = selectOompaLoompasByPage(1);
      const result = selector(mockLoadedState);

      expect(result.data).toHaveLength(1);
      expect(result.data).toEqual([mockOompaLoompa1]);
      expect(result.loading).toBe(false);
    });

    it('should handle empty results', () => {
      const selector = selectOompaLoompasByPage(1);
      const result = selector(emptyState);

      expect(result.data).toHaveLength(0);
      expect(result.loading).toBe(false);
    });
  });

  describe('selectOompaLoompaById', () => {
    it('should return specific Oompa Loompa by id', () => {
      const selector = selectOompaLoompaById(1);
      const result = selector(mockLoadedState);

      expect(result).toEqual(mockOompaLoompa1);
    });

    it('should return undefined for non-existent id', () => {
      const selector = selectOompaLoompaById(999);
      const result = selector(mockLoadedState);

      expect(result).toBeUndefined();
    });

    it('should find Oompa Loompa across all pages', () => {
      const selector = selectOompaLoompaById(2);
      const result = selector(mockLoadedState);

      expect(result).toEqual(mockOompaLoompa2);
    });

    it('should handle empty state', () => {
      const selector = selectOompaLoompaById(1);
      const result = selector(emptyState);

      expect(result).toBeUndefined();
    });
  });

  describe('selector memoization', () => {
    it('should memoize selectOompaLoompasByPage results', () => {
      const selector = selectOompaLoompasByPage(1);
      const result1 = selector(mockLoadedState);
      const result2 = selector(mockLoadedState);

      expect(result1).toBe(result2);
    });

    it('should memoize selectOompaLoompaById results', () => {
      const selector = selectOompaLoompaById(1);
      const result1 = selector(mockLoadedState);
      const result2 = selector(mockLoadedState);

      expect(result1).toBe(result2);
    });

    it('should recalculate when state changes', () => {
      const selector = selectOompaLoompasByPage(1);
      const result1 = selector(mockLoadedState);

      const newState = {
        ...mockLoadedState,
        oompaLoompas: {
          ...mockLoadedState.oompaLoompas,
          loading: true,
        },
      };

      const result2 = selector(newState);
      expect(result1).not.toBe(result2);
      expect(result2.loading).toBe(true);
    });
  });
});
