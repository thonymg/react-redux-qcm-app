import * as a from '../../actions/actions_types.js';
import _ from 'lodash';

const INITIAL_STATE = [
  {
    ID: '885562',
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
  {
    ID: '5562',
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

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case a.CREATE_ONE_QUESTION:
      return [...state, action.payload];

    case a.GET_LAST_QUESTION:
      return (state = 'GET_LAST_QUESTION');

    case a.GET_BEST_QUESTION:
      return (state = 'GET_BEST_QUESTION');

    case a.PICK_ONE_RESPONSE:
        const res = _.find(state, {'ID' : '885562'})
        console.log(res, state, 'reducer')
      return Object.assign({}, state, res);

    default:
      return state;
  }
};

export default questionReducer;
