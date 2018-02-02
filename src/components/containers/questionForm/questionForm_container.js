import { connect } from 'react-redux';

import * as formAction from '../../../actions/form_actions' 
import * as headerAction from '../../../actions/header_actions' 
import QuestionForm from '../../ui/questionForm';

const mapStateToProps = (state, ownProps) => ({
  isVisible: state.ui.toggleForm.isVisible
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (data) => {
      dispatch(formAction.createOneQuestion(data))
    }, 
    onShowQuestionClick : () => {
      dispatch(headerAction.showQuestionForm(true))
    },
    onHideQuestionClick : () => {
      dispatch(headerAction.hideQuestionForm(false))
    },

  };
};

const QuestionFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  QuestionForm
);

export default QuestionFormContainer;
