import * as a from '../../actions/actions_types.js';
import _ from 'lodash';

const INITIAL_STATE = [
  {
    id: '885562',
    question: 'data.question',
    responses: [
      {
        response: 'data.goodResponse',
        isTrue: true,
        picked: 0,
        lastPicked: new Date(),
      },
      {
        response: 'data.badResponse1',
        isTrue: false,
        picked: 0,
        lastPicked: new Date(),
      },
      {
        response: 'data.badResponse2',
        isTrue: false,
        picked: 0,
        lastPicked: new Date(),
      },
    ],
  },
];

export const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case a.CREATE_ONE_QUESTION:
      return [...state, action.payload];

    case a.GET_LAST_QUESTION:
      return (state = 'GET_LAST_QUESTION');

    case a.GET_BEST_QUESTION:
      return (state = 'GET_BEST_QUESTION');

    case a.PICK_ONE_RESPONSE:
      const res = _.find(state, { id: '885562' });
      console.log(res, state, 'reducer');
      return Object.assign({}, state, res);

    case a.FETCH_ALL_QUESTION_ERROR:
      return Object.assign({}, state.hasHerror, action.hasHerror);
    case a.FETCH_ALL_QUESTION_LOADING:
      return Object.assign({}, state.isLoading, action.isLoading);
    case a.FETCH_ALL_QUESTION_SUCCESS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
