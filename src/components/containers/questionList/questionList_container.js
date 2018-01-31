import { connect } from 'react-redux';

import QuestionList from '../../ui/questionList';

const mapStateToProps = (state, ownProps) => {
  return {
    questions : state.questions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(
  QuestionList
);

export default QuestionListContainer;
