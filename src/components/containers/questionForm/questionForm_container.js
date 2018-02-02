import { connect } from 'react-redux';

import * as formAction from '../../../actions/form_actions' 
import QuestionForm from '../../ui/questionForm';

const mapStateToProps = (state, ownProps) => ({
  isVisible: state.ui.toggleForm.isVisible
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (data) => {
      dispatch(formAction.createOneQuestion(data))
    }
  };
};

const QuestionFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  QuestionForm
);

export default QuestionFormContainer;
