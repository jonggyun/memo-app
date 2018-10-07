import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MemoPage, MemoPost } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MemoPage} />
        <Route path='/folder/:id/memo' component={MemoPost} />
      </Switch>
    </div>
  )
}

export default App;