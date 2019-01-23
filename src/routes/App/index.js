import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../Home';

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
};
