import React from 'react';



export default class Accounts extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.getAccounts(this.props.match.params.email)
  }

  render(){
    return (
      <div>Hello World</div>
    )
  }


}