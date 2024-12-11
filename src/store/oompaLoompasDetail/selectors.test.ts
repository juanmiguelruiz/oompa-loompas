import { mockOompaLoompa1, mockOompaLoompa2 } from 'tests/mocks/oompaLoompas';
import { RootState } from 'src/store';
import { selectOompaLoompaById, selectOompaLoompasDetail } from './selectors';

describe('Oompa Loompa Detail Selectors', () => {
  const mockState: RootState = {
    oompaLoompasDetail: {
      data: {
        1: mockOompaLoompa1,
        2: mockOompaLoompa2,
      },
      loading: false,
      error: false,
    },
    oompaLoompasList: {
      data: {
        resultsByPage: {},
        current: 0,
        total: 0,
      },
      loading: false,
      error: false,
    },
    _persist: { version: -1, rehydrated: true },
  };

  const emptyState: RootState = {
    oompaLoompasDetail: {
      data: {},
      loading: false,
      error: false,
    },
    oompaLoompasList: {
      data: {
        resultsByPage: {},
        current: 0,
        total: 0,
      },
      loading: false,
      error: false,
    },
    _persist: { version: -1, rehydrated: true },
  };

  const loadingState: RootState = {
    ...mockState,
    oompaLoompasDetail: {
      ...mockState.oompaLoompasDetail,
      loading: true,
    },
  };

  const errorState: RootState = {
    ...mockState,
    oompaLoompasDetail: {
      ...mockState.oompaLoompasDetail,
      error: true,
    },
  };

  describe('selectOompaLoompasDetail', () => {
    it('should return the complete oompaLoompasDetail state', () => {
      const result = selectOompaLoompasDetail(mockState);
      expect(result).toEqual(mockState.oompaLoompasDetail);
    });

    it('should return empty state when no data is present', () => {
      const result = selectOompaLoompasDetail(emptyState);
      expect(result).toEqual(emptyState.oompaLoompasDetail);
    });

    it('should return loading state correctly', () => {
      const result = selectOompaLoompasDetail(loadingState);
      expect(result.loading).toBe(true);
    });

    it('should return error state correctly', () => {
      const result = selectOompaLoompasDetail(errorState);
      expect(result.error).toBe(true);
    });
  });

  describe('selectOompaLoompaById', () => {
    it('should return specific Oompa Loompa by id', () => {
      const selector = selectOompaLoompaById(1);
      const result = selector(mockState);
      expect(result).toEqual(mockOompaLoompa1);
    });

    it('should return undefined for non-existent id', () => {
      const selector = selectOompaLoompaById(999);
      const result = selector(mockState);
      expect(result).toBeUndefined();
    });

    it('should return undefined when state is empty', () => {
      const selector = selectOompaLoompaById(1);
      const result = selector(emptyState);
      expect(result).toBeUndefined();
    });

    it('should maintain reference equality for same id', () => {
      const selector = selectOompaLoompaById(1);
      const result1 = selector(mockState);
      const result2 = selector(mockState);
      expect(result1).toBe(result2);
    });

    it('should return different references for different ids', () => {
      const selector1 = selectOompaLoompaById(1);
      const selector2 = selectOompaLoompaById(2);
      const result1 = selector1(mockState);
      const result2 = selector2(mockState);
      expect(result1).not.toBe(result2);
    });
  });
});
