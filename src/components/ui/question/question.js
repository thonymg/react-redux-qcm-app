import React from 'react';
import PropTypes from 'prop-types';

const Question = ({question}) => {
  console.log(question, 'props des question item')
  return (
    <li key={question.ID}>
  <div>
    <div className="tile">
      <div className="tile-content">
        <a className="tile-title">Question #{question.ID}</a>
        <p className="tile-subtitle text-gray">{question.question}</p>
      </div>
      <div className="tile-action">
        <button className="btn btn-primary">Respond</button>
        <button className="btn btn-secondary">See stat</button>
      </div>
    </div>
  </div>
  </li>
);}

Question.propTypes = {};

export default Question;
