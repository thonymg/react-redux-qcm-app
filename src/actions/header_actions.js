import * as a from './actions_types.js';

export const showQuestionForm = () => {
  return { type: a.SHOW_QUESTION_FORM };
};

export const getLastQuestion = () => {
  return { type: a.GET_LAST_QUESTION };
};

export const getBestQuestion = () => {
  return { type: a.GET_BEST_QUESTION };
};

