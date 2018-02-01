import * as a from './actions_types.js';

const uid = () => Date.now();
const createQuestionCode = () => {
  // return code;
};

export const createOneQuestion = data => {
  const formatedData = {
    ID: uid(),
    question: data.question,
    responses: [
      {
        response: data.goodResponse,
        isTrue: true,
        picked: 0,
        lastPicked: new Date(),
      },
      {
        response: data.badResponse1,
        isTrue: false,
        picked: 0,
        lastPicked: new Date(),
      },
      {
        response: data.badResponse2,
        isTrue: false,
        picked: 0,
        lastPicked: new Date(),
      },
    ],
  };
  return {
    type: a.CREATE_ONE_QUESTION,
    payload: formatedData,
  };
};

export const pickOneResponse = () => {};

// export const getLastQuestion = () => {
//   return { type: a.GET_LAST_QUESTION };
// };

// export const getBestQuestion = () => {
//   return { type: a.GET_BEST_QUESTION };
// };
