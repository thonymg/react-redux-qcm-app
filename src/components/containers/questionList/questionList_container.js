import { connect } from 'react-redux';

import * as responseActions from '../../../actions/response_actions';
import { fetchAllQuestion } from '../../../actions/header_actions';
import { showResponseField } from '../../../actions/form_actions';
import QuestionList from '../../ui/questionList';

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
    isVisible: state.ui.responseField.isVisible
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRespondClick: id =>  dispatch(responseActions.showResponseForm(id, true)),
    // onShowResponseField : () => dispatch(showResponseField(true)),
    onStatClick: id => dispatch(responseActions.showStats(id)),
    fetchData: () => dispatch(fetchAllQuestion()),
  };
};

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(
  QuestionList
);

export default QuestionListContainer;
