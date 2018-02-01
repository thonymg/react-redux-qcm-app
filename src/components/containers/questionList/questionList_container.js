import { connect } from 'react-redux';

import * as responseActions from '../../../actions/response_actions';
import {fetchAllQuestion} from '../../../actions/header_actions';
import QuestionList from '../../ui/questionList';

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions ,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRespondClick: (id) => dispatch(responseActions.showResponseForm(id)),
    onStatClick: (id) => dispatch(responseActions.showStats(id)),
    fetchData: () => dispatch(fetchAllQuestion())
  };
};

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(
  QuestionList
);

export default QuestionListContainer;
