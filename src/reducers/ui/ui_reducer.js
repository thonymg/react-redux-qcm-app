import * as a from '../../actions/actions_types.js'
const INITIAL_STATE = {};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case a.TOGGLE_QUESTION_FORM :
			return
		case a.TOGGLE_QUESTION_STATS :
			return
		case a.TOGGLE_RESPONSE_FIELD :
			return
    default:
      return state;
  }
};

export default uiReducer;
