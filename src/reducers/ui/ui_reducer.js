import * as a from '../../actions/actions_types.js';
const INITIAL_STATE = {
  toggleStat: {
    id: '885562',
    isVisible: false,
  },
  responseField: {
    id: '885562',
    isVisible: false,
  },
  toggleForm: {
    isVisible: false,
  },
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case a.TOGGLE_QUESTION_FORM:
      return Object.assign({}, state, {
        toggleForm: {
          isVisible: action.isVisible,
        },
      });

    case a.TOGGLE_QUESTION_STATS:
      return Object.assign({}, state, {
        toggleStat: {
          id: action.id,
          isVisible: !action.isVisible,
        },
      });

    case a.TOGGLE_RESPONSE_FIELD:
      return Object.assign({}, state, {
        responseField: {
          id: action.id,
          isVisible: action.isVisible,
        },
      });

    default:
      return state;
  }
};

export default uiReducer;
