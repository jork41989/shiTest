import React from 'react';
import { Redirect } from 'react-router-dom'



export default class Execs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.historyGrabber = this.historyGrabber.bind(this)
    this.emailGrabber = this.emailGrabber.bind(this)
  }

  componentDidMount(){
    this.props.getExecs()
  }

  historyGrabber(email){
    this.props.history.push(`/accounts/${email}`)
  }
  emailGrabber(event){
      this.historyGrabber(event.target.value)
  }

  render () {
   let keys = Object.values(this.props.execs)
   let names
   if (keys.length > 1){
     names = keys.map(item => {
     return <option value={item.id} key={item.id}>{item.firstName} {item.lastName}</option>
     })
   }
      return (
        <div>
          <select name="execsList" id="execs" defaultValue={'Null'} onChange={this.emailGrabber}>
            <option value="Null" disabled>Please select a Account Executive</option>
            {names}
          </select>
        </div>
      )


    
  }
}