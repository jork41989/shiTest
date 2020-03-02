import { connect } from 'react-redux';
import {getAccounts} from '../../actions/accounts_actions'
import Accounts from './accounts'


const mapStateToProps = (state) => {
  return {
    execs: state.execs,
    accounts: state.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAccounts: (email) => dispatch(getAccounts(email))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts)