/* eslint-disable */
import deepFreeze from 'deep-freeze';

import { questionReducer, INITIAL_STATE } from './questions_reducer';

describe('questionReducer', () => {
  it('returns initial state', () => {
    const action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = questionReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = questionReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
