import * as a from './actions_types.js';

export const showResponseForm = id => {
  return {
    type: a.TOGGLE_RESPONSE_FIELD,
    id,
  };
};

export const showStats = id => {
  return {
    type: a.TOGGLE_QUESTION_STATS,
    id,
  };
};
