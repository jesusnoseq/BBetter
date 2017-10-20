import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import ThreeDaysView from './components/three_days_view';
//import Header from './components/Header';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={ThreeDaysView} />
          <Route path="/:year/:month/:day" component={ThreeDaysView} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
