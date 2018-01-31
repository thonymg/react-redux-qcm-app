/* eslint-disable */
import deepFreeze from 'deep-freeze';

import { uiReducer, INITIAL_STATE } from './ui_reducer';

describe('uiReducer', () => {
  it('returns initial state', () => {
    const action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = uiReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = uiReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
