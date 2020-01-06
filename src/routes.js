import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from '~/pages/Register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
