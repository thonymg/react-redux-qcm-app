import * as a from './actions_types.js';

export const createOneQuestion = () => {
  return { type: a.CREATE_ONE_QUESTION };
};

export const getLastQuestion = () => {
  return { type: a.GET_LAST_QUESTION };
};

export const getBestQuestion = () => {
  return { type: a.GET_BEST_QUESTION };
};
