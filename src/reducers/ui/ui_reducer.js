import * as a from '../../actions/actions_types.js';
const INITIAL_STATE = {toggleStat: '885562', responseField: '885562',};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case a.TOGGLE_QUESTION_FORM:
      return Object.assign({}, state, { toggleForm: !action.payload });

    case a.TOGGLE_QUESTION_STATS:
      return Object.assign({}, state, { toggleStat: action.id });

    case a.TOGGLE_RESPONSE_FIELD:
      return Object.assign({}, state, { responseField: action.id });

    default:
      return state;
  }
};

export default uiReducer;
