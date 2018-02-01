import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

import Question from '../question';
import question from '../question/question';
/**
 * 
 * 
 * @param {any} { questions, onStatClick, onRespondClick } 
 * @returns Question list 
 * ! some strange things apears when i use native map 
 */
const QuestionList = ({ questions, onStatClick, onRespondClick }) => {

    
  // const ListedQuestion = questions.map(question => (
  //   <Question
  //     key={question.ID}
  //     question={question}
  //     onRespondClick={() => RespondClick()}
  //     onStatClick={() => StatClick()}
  //   />
  // ));

  return (
    <div>
      <div className="container">
        <div className="column col-12">
          <button onClick={() => onRespondClick()}>click</button>

          <ul>
            {_.map(questions, question => {
              return (
                <Question
                  key={`${question.ID}`}
                  question={question}
                  onRespondClick={() => onRespondClick()}
                  onStatClick={() => onStatClick()}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

QuestionList.propTypes = {};

export default QuestionList;
