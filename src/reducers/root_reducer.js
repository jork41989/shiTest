import { combineReducers } from 'redux';
import execsReducer from './exec_reducer'
import accountsReducer from './accounts_reducer'

const RootReducer = combineReducers({
  execs: execsReducer,
  accounts: accountsReducer
})

export default RootReducer;