import { createSelector } from 'reselect';

export const loadingSelector = (state) => state.loading;

export const isLoadingSelector = createSelector(
  loadingSelector,
  (loading) => loading.isLoading,
);
