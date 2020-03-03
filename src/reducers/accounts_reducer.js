import { GET_ACCOUNTS } from '../actions/accounts_actions'
import merge from 'lodash/merge'

const accountsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let accountsArray;
  let accountsObj;
  switch (action.type) {
    case GET_ACCOUNTS:
      accountsArray = action.accounts.data
      accountsObj = {}
      accountsArray.forEach(element => {
        accountsObj[element.company] = element
      });
      newState = merge({}, state, {[accountsArray[0].accountExecutive]: accountsArray})
      return newState
    default:
      return state;
  }

}


export default accountsReducer;