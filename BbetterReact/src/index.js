import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import ThreeDaysView from './components/three_days_view';
import Header from './components/Header';
import reducers from './reducers';


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promise, ReduxThunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ThreeDaysView} />
          <Route path="/:year/:month/:day" component={ThreeDaysView} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
