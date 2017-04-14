import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import DrinksIndex from './components/drinks_index';
import FoodIndex from './components/food_index';
import SinglePost from './components/single_post';
import AnonLogin from './components/AnonLoginTest';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AnonLogin} />
    <Route path="Drykkir" component={DrinksIndex} />
    <Route path="Matur" component={FoodIndex} />
    <Route path=":menu_cat/:id" component={SinglePost} />
  </Route>
);
