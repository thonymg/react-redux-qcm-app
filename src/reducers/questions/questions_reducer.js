import * as a from '../../actions/actions_types.js';

const INITIAL_STATE = {};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case a.SHOW_QUESTION_FORM:
      return (state = 'SH0W_QUESTION_FORM');

    case a.CREATE_ONE_QUESTION:
      return [...state, action];

    case a.GET_LAST_QUESTION:
      return (state = 'GET_LAST_QUESTION');

    case a.GET_BEST_QUESTION:
      return (state = 'GET_BEST_QUESTION');

    default:
      return state;
  }
};

export default questionReducer;
