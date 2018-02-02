import * as a from './actions_types.js';

export const showResponseForm = (id, bool = false )=> {
  return {
    type: a.TOGGLE_RESPONSE_FIELD,
    id,
    isVisible: bool,
  };
};

export const showStats = (id, bool = false )=> {
  return {
    type: a.TOGGLE_QUESTION_STATS,
    id,
    isVisible: bool,
  };
};
