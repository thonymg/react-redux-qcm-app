import * as a from './actions_types.js';
import Axios from 'axios';
const apiUrl = 'http://localhost:4440/questions';

export const getAllQuestion = () => {
  return {
    type: a.GET_ALL_QUESTION,
  };
};

export const showQuestionForm = () => {
  return {
    type: a.TOGGLE_QUESTION_FORM,
    payload: true,
  };
};

export const getLastQuestion = () => {
  return { type: a.GET_LAST_QUESTION };
};

export const getBestQuestion = () => {
  return { type: a.GET_BEST_QUESTION };
};

//thunk
export const fetchAllQuestionLoading = bool => {
  return {
    type: a.FETCH_ALL_QUESTION_LOADING,
    isLoading: bool,
  };
};

export const fetchAllQuestionError = bool => {
  return {
    type: a.FETCH_ALL_QUESTION_ERROR,
    hasError: bool,
  };
};
export const fetchAllQuestionSuccess = data => {
  return {
    type: a.FETCH_ALL_QUESTION_SUCCESS,
    payload: data,
  };
};

export const fetchAllQuestion = () => {
  return dispatch => {
    dispatch(fetchAllQuestionLoading(true));

    Axios.get(apiUrl)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(fetchAllQuestionLoading(false));
        return response;
      })
      .then(response => {
        dispatch(fetchAllQuestionSuccess(response.data));
      })
      .catch(() => dispatch(fetchAllQuestionError(true)));
  };
};
