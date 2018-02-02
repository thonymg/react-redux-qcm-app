import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  onHideQuestionClick,
  onShowQuestionClick,
  onBestQuestionClick,
  onLastQuestionClick,
  questionFormVisibility,
  hideResponse,
}) => (
  <div>
    <ul className="tab">
      <li className="tab-item active">
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            hideResponse();
            if (questionFormVisibility === false) {
              onShowQuestionClick();
            } else {
              onHideQuestionClick();
            }
          }}>
          (<i className="icon icon-plus" />) Add
        </a>
      </li>
      <li className="tab-item">
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            onLastQuestionClick();
            onHideQuestionClick();
            hideResponse();
          }}>
          (<i className="icon icon-arrow-up" />) Last
        </a>
      </li>
      {/* <li className="tab-item">
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            onBestQuestionClick();
          }}>
          <i className="icon icon-emoji" /> Best
        </a>
      </li> 
      <li className="tab-item tab-action">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
        </div>
      </li>
      */}
    </ul>
  </div>
);

Header.propTypes = {
  onHideQuestionClick: PropTypes.func.isRequired,
  onShowQuestionClick: PropTypes.func.isRequired,
  onBestQuestionClick: PropTypes.func,
  onLastQuestionClick: PropTypes.func.isRequired,
  questionFormVisibility: PropTypes.bool.isRequired,
  hideResponse: PropTypes.func.isRequired,
};

export default Header;
