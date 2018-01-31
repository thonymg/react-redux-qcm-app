import React from 'react';
import PropTypes from 'prop-types';

const Header = ({onCreateQuestionClick, onBestQuestionClick, onLastQuestionClick}) => (
  <div>
    <ul className="tab">
      <li className="tab-item active">
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            onCreateQuestionClick();
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
      <li className="tab-item">
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
    </ul>
  </div>
);

Header.propTypes = {};

export default Header;
