import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, onRespondClick, onStatClick, onTitleClick }) => {
  return (
    <li>
      <div>
        <div className="tile">
          <div className="tile-content">
            <a className="tile-title" onClick={onTitleClick}>
              Question #{question.id}
            </a>
            <p className="tile-subtitle text-gray">{question.question}</p>
          </div>
          <div className="tile-action">
            <button className="btn btn-primary" onClick={onRespondClick}>
              Respond
            </button>
            {/* <button className="btn btn-secondary" onClick={onStatClick}>
              See stat
            </button> */}
          </div>
        </div>
      </div>
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onRespondClick: PropTypes.func.isRequired,
  onStatClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default Question;
