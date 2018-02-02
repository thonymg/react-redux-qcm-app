import * as a from './actions_types.js';
import Axios from 'axios';
import _ from 'lodash';

const apiUrl = 'http://localhost:4440/questions';

const uid = () => Date.now();

export const addQuestion = data => {};

export const createOneQuestion = data => {
  const formatedData = {
    id: `${uid()}`,
    question: data.question,
    createdAt: new Date(),
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
      {
        response: data.badResponseD,
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
    picked: 1,
    lastPicked: new Date(),
    index: _.parseInt(data.response),
  };

  return (dispatch, getState) => {
    Axios.get(apiUrl, {
      params: {
        id: data.questionId,
      },
    })
      .then(obj => {
        const upt = Object.assign({}, ...obj.data);

        return  upt;
      })
      .then(( upt) => {
        const updatedResponse = Object.assign(
          {},
          upt.responses[res.index],
          (upt.responses[res.index] = {
            index: res.index,
            piked: upt.responses[res.index].picked,              
            lastPicked: res.lastPicked,
            response: upt.responses[res.index].response,
            isTrue: upt.responses[res.index].isTrue,
          })
        );
        return upt;
      })
      .then(upt => {
        Axios.put(apiUrl + '/' + data.questionId, upt)
          .then(() => {
            return dispatch({
              type: a.PICK_ONE_RESPONSE,
              payload: res,
            });
          });
      });
  };
};

export const hideResponseField = (bool = false) => {
  return {
    type: a.TOGGLE_RESPONSE_FIELD,
    isVisible: bool,
  };
};
export const showResponseField = (bool = true) => {
  return {
    type: a.TOGGLE_RESPONSE_FIELD,
    isVisible: bool,
  };
};
