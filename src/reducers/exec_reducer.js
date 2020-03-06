import { RECEIVE_EXECS } from '../actions/account_execs_actions'

const execsReducer = (state = {}, action) => {
  Object.freeze(state);
  let execArr
  let execsObj
  let newState;
  switch (action.type) {
    case RECEIVE_EXECS:
      execArr = action.execs.data
      execsObj = {};
      execArr.forEach(exec => {
        execsObj[exec.id] = exec
      });
      newState = Object.assign({}, state, execsObj)
      return newState
    default:
      return state;
  }
}

export default execsReducer;