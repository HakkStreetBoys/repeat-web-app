import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProductsIndex from './components/products_index';
import SinglePost from './components/single_post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductsIndex} />
    <Route path="Matur" component={ProductsIndex} />
    <Route path="Drykkir" component={ProductsIndex} />
    <Route path=":menu_cat/:id" component={SinglePost} />
  </Route>
);
