import { connect } from 'react-redux';
import * as headerAction from '../../../actions/header_actions'

import Header from '../../ui/header';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onShowQuestionClick : () => {
      dispatch(headerAction.showQuestionForm())
    },
    onBestQuestionClick : () => {
      dispatch(headerAction.getBestQuestion() )
    },
    onLastQuestionClick : () => {
      dispatch(headerAction.getLastQuestion())
    }
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
