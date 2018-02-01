import * as a from '../../actions/actions_types.js'
const INITIAL_STATE = {};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case a.TOGGLE_QUESTION_FORM :
			return state = 'TOGGLE_QUESTION_FORM'
		case a.TOGGLE_QUESTION_STATS :
			return state = 'TOGGLE_QUESTION_STATS'
		case a.TOGGLE_RESPONSE_FIELD :
			return state = 'TOGGLE_RESPONSE_FIELD'
    default:
      return state;
  }
};

export default uiReducer;
