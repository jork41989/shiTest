import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ExecContainer from './execs/execs_container';
import AccountsContainer from './accounts/accounts_container'



const App = () => (
  <div className={'mainDiv'}>
    <ExecContainer />
    <Switch>
      <Route exact path="/accounts/:id" component={AccountsContainer} />
    </Switch>

  </div>

);

export default App;