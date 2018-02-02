import { connect } from 'react-redux';
import _ from 'lodash';

import * as formAction from '../../../actions/form_actions' 
import ResponseFields from '../../ui/responseFields';


const mapStateToProps = (state, ownProps) => {
  return {
    question: _.find(state.questions, {'id' : state.ui.responseField.id}),
    isVisible: state.ui.responseField.isVisible,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (data) => {
    dispatch(formAction.pickOneResponse(data));
    dispatch(formAction.hideResponseField(false))
  }, 
  hideResponse : ()=> dispatch(formAction.hideResponseField(false))
});

const ResponseFieldContainer = connect(mapStateToProps, mapDispatchToProps)(
  ResponseFields
);

export default ResponseFieldContainer;
