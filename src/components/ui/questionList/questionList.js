import React from 'react';
import PropTypes from 'prop-types';

import Question from '../question';

const QuestionList = ({ questions }) => {
  const ListedQuestion = questions.map(question => (
    <Question question={question} />
  ));
  console.log(questions, 'questionList')
  return (
    <div>
      <div className="container">
        <div className="column col-12">
          <ul>{ListedQuestion}</ul>
        </div>
      </div>
    </div>
  );
};

QuestionList.propTypes = {};

export default QuestionList;
