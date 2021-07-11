import { loadingSelector, isLoadingSelector } from '../selectors';

describe('loading - selectors', () => {
  it('loadingSelector', () => {
    const state = {
      loading: {
        isLoading: false,
      },
    };
    expect(loadingSelector(state)).toEqual({ isLoading: false });
  });

  it('isLoadingSelector', () => {
    const state = {
      loading: {
        isLoading: false,
      },
    };
    expect(isLoadingSelector(state)).toEqual(false);
  });
});
