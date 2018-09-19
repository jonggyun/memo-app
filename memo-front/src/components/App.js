import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MemoPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'component={MemoPage} />
      </Switch>
    </div>
  )
}

export default App;