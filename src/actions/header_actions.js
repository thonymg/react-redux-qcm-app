import * as a from './actions_types.js';

export const showQuestionForm = () => {
  return { 
    type: a.TOGGLE_QUESTION_FORM, 
    payload: true
   };
};

export const getLastQuestion = () => {
  return { type: a.GET_LAST_QUESTION };
};

export const getBestQuestion = () => {
  return { type: a.GET_BEST_QUESTION };
};

