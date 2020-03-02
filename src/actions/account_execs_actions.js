import * as ExecApiUtil from '../util/account_execs_util'

export const RECEIVE_EXECS = "RECEIVE_EXECS";

const receiveExecs = execs => ({
  type: RECEIVE_EXECS, 
  execs
})

export const getExecs = () => dispatch =>  (
  ExecApiUtil.getExecs()
    .then(execs => dispatch(receiveExecs(execs)))
)