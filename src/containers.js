import { connect } from 'react-redux';
import * as components from './components';
import { addMsg, deleteMsg } from './actions';

export const Records = connect(
  function mapStateToProps(state) {
    return { msgs: state };
  },
  function mapDispatchToProps(dispatch) {
	  return {
	    addMsg: text => dispatch(addMsg(text)),
	    deleteMsg: id => dispatch(deleteMsg(id))
	  };
	}
)(components.Records);