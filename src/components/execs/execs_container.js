import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getExecs } from '../../actions/account_execs_actions'
import execs from './execs'

const mapStateToProps = (state) => {
  return {
    execs: state.execs,
    accounts: state.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getExecs: () => dispatch(getExecs())
  }
}

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(execs));