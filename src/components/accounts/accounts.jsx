import React from 'react';
import './accounts.css'

export default class Accounts extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchAccounts() {
    const id = parseInt(this.props.match.params.id);
    this.props.getAccounts(this.props.execs[id].emailAddress)
  }

  componentDidMount() {
    if (Object.keys(this.props.execs).length >= 1) {
      this.fetchAccounts()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id != this.props.match.params.id) {
      this.fetchAccounts()
    }
  }


  getName(){
    let execID = parseInt(this.props.match.params.id);
    let accountExec = this.props.execs[execID]
    if (accountExec){
      return(
        <div>Current Account Executive: {accountExec.firstName} {accountExec.lastName}</div>
      )
    }
  }

  getInfo(){
    let keys = Object.values(this.props.accounts)
    let info
    if (keys.length >= 1) {
      info = keys.map(item => {

        return (
          <tr key={item.id}>
            <td>{item.company}</td>
            <td>{item.phone}</td>
            <td>{item.streetAddress}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.zipCode}</td>
            <td>{item.activeTickets}</td>
            <td>{item.activeContracts}</td>
            <td>{item.accountExecutive}</td>
          </tr>
        )

      })
    } else {

    }
    return info
  }

  render() {
   
   
    
    return (
      <div>
        {this.getName()}
        <table className="accountsTable">
          <tbody>
            <tr>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Active Tickets</th>
              <th>Active Contracts</th>
              <th>Account Executive</th>
            </tr>
            {this.getInfo()}
          </tbody>
        </table>
      </div>
    )
  }


}