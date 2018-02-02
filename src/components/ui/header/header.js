import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  onHideQuestionClick,
  onShowQuestionClick,
  onBestQuestionClick,
  onLastQuestionClick,
  questionFormVisibility,
}) => (
  <div>
    <ul className="tab">
      <li className="tab-item active">
        <a
          href=""
          onClick={e => {
            e.preventDefault();
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

Header.propTypes = {};

export default Header;
