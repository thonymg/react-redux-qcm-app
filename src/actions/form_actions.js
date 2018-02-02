import * as a from './actions_types.js';
import Axios from 'axios';
const apiUrl = 'http://localhost:4440/questions';

const uid = () => Date.now();

export const addQuestion = data => {};

export const createOneQuestion = data => {
  const formatedData = {
    id: `${uid()}`,
    question: data.question,
    responses: [
      {
        response: data.goodResponse,
        isTrue: true,
        picked: 0,
        lastPicked: new Date(),
        index: '0',
      },
      {
        response: data.badResponse1,
        isTrue: false,
        picked: 0,
        lastPicked: new Date(),
        index: '1',
      },
      {
        response: data.badResponse2,
        isTrue: false,
        picked: 0,
        lastPicked: new Date(),
        index: '2',
      },
    ],
  };
  return (dispatch, getState) => {
    Axios.post(apiUrl, formatedData)
      .then(res => {
        console.log(res, 'données postés');
      })
      .then(() => {
        return dispatch({
          type: a.CREATE_ONE_QUESTION,
          payload: formatedData,
        });
      });
  };
};

export const pickOneResponse = data => {
  const res = {
    picked: +1,
    lastPicked: new Date(),
    index: data.response,
  };

  return (dispatch, getState) => {
    Axios.get(apiUrl, {
      params: {
        id: data.questionId,
      },
    }).then(obj => {
      const updated = Object.assign({}, ...obj.data, {
        index: res.index,
        picked: res.picked,
        lastPicked: res.lastPicked,
      });

      console.log(updated, res, 'donnés formatés');

      Axios.patch(apiUrl + '/' + data.questionId, {data : res})
        .then(res => {
          console.log(res, 'response données postés');
        })
        .then(() => {
          return dispatch({
            type: a.PICK_ONE_RESPONSE,
            payload: res,
          });
        });
    });
  };
};

// thunks
// export const createQuestion = question => {
//   return dispatch => {
//     return Axios.post(apiUrl, question).then(res => {
//       dispatch(createOneQuestion(res.data));
//     });
//   };
// };
