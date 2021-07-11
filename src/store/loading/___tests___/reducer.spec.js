import reducer from '../reducer';

describe('loading - reducer', () => {
  it('LOADING', () => {
    const state = {
      isLoading: false,
    };
    const action = {
      type: 'LOADING',
    };
    expect(reducer(state, action)).toEqual({ isLoading: true });
  });

  it('Default', () => {
    const state = {
      isLoading: true,
    };
    const action = {
      type: 'DEFAULT',
    };
    expect(reducer(state, action)).toEqual({ isLoading: false });
  });
});
