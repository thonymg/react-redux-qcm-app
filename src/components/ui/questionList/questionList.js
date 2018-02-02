import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Question from '../question';
import question from '../question/question';

export default class QuestionList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <button onClick={e => this.props.fetchData()}>Fetch</button>
        <div className="container">
          <div className="column col-12">
            <ul>
              {_.map(this.props.questions, question => {
                return (
                  <Question
                    key={question.id}
                    question={question}
                    onRespondClick={() => {
                      this.props.onRespondClick(question.id);
                      console.log(question.id , 'selection')
                      // this.props.onShowResponseField();
                    }}
                    onStatClick={() => this.props.onStatClick(question.id)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
