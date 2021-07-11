import configureMockStore from '../../../testUtils/configureMockStore';
import { loadingAction } from '../actions';

describe('loading - actions', () => {
  it('loadingAction', () => {
    const initialState = {
      loading: {
        isLoading: false,
      },
    };
    const store = configureMockStore(initialState);

    store.dispatch(loadingAction());

    const actions = store.getActions();
    const result = [{ type: 'LOADING' }];
    expect(actions).toEqual(result);
  });
});
