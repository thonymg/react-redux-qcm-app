import * as a from '../../actions/actions_types.js';

const INITIAL_STATE = {};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case a.CREATE_ONE_QUESTION:
      return (state = 'CREATE_ONE_QUESTION');

    case a.GET_LAST_QUESTION:
      return (state = 'GET_LAST_QUESTION');

    case a.GET_BEST_QUESTION:
      return (state = 'GET_BEST_QUESTION');

    default:
      return state;
  }
};

export default questionReducer;