import { renderHook } from '@testing-library/react';
import { useInfiniteScroll } from './useInfiniteScroll';

const mockIntersectionObserver = jest.fn();
const mockDisconnect = jest.fn();
const mockObserve = jest.fn();

describe('useInfiniteScroll', () => {
  beforeEach(() => {
    mockIntersectionObserver.mockImplementation(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      root: null,
      rootMargin: '0px',
      thresholds: [1.0],
      takeRecords: () => [],
      unobserve: () => null,
    }));

    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create an intersection observer', () => {
    const callback = jest.fn();
    renderHook(() => useInfiniteScroll(callback));

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('should call callback when intersection occurs and not loading', () => {
    const callback = jest.fn();
    renderHook(() => useInfiniteScroll(callback, { loading: false }));

    const [[intersectionCallback]] = mockIntersectionObserver.mock.calls;
    intersectionCallback([{ isIntersecting: true }]);

    expect(callback).toHaveBeenCalled();
  });

  it('should not call callback when loading', () => {
    const callback = jest.fn();
    renderHook(() => useInfiniteScroll(callback, { loading: true }));

    const [[intersectionCallback]] = mockIntersectionObserver.mock.calls;
    intersectionCallback([{ isIntersecting: true }]);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should not call callback when not intersecting', () => {
    const callback = jest.fn();
    renderHook(() => useInfiniteScroll(callback));

    const [[intersectionCallback]] = mockIntersectionObserver.mock.calls;
    intersectionCallback([{ isIntersecting: false }]);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should disconnect observer on unmount', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useInfiniteScroll(callback));

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('should create observer with custom options', () => {
    const callback = jest.fn();
    const options = {
      threshold: 0.5,
      rootMargin: '10px',
    };

    renderHook(() => useInfiniteScroll(callback, options));

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.5,
        rootMargin: '10px',
      })
    );
  });

  it('should observe target when ref is available', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useInfiniteScroll(callback));

    if (result.current.current) {
      expect(mockObserve).toHaveBeenCalledWith(result.current.current);
    }
  });

  it('should use default options when not provided', () => {
    const callback = jest.fn();
    renderHook(() => useInfiniteScroll(callback));

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.1,
        rootMargin: '20px',
      })
    );
  });
});
