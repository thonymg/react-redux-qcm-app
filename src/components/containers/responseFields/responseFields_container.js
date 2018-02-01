import { connect } from 'react-redux';
import _ from 'lodash';

import * as formAction from '../../../actions/form_actions' 
import ResponseFields from '../../ui/responseFields';


const mapStateToProps = (state, ownProps) => {
  return {
    question: _.find(state.questions, {'ID' : state.ui.responseField}),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (data) => {
    dispatch(formAction.pickOneResponse(data))
  }
});

const ResponseFieldContainer = connect(mapStateToProps, mapDispatchToProps)(
  ResponseFields
);

export default ResponseFieldContainer;
