import * as AccountsAPIUtil from '../util/accounts_util'


export const GET_ACCOUNTS = "GET_ACCOUNTS"

const findAccounts = accounts => ({
  type: GET_ACCOUNTS,
  accounts
})

export const getAccounts = email => dispatch => (
  AccountsAPIUtil.getAccounts(email)
    .then(accounts => dispatch(findAccounts(accounts)))
)