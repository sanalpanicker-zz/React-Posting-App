import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
//local
import Postnew from './containers/post_new';
import PostsIndex from './containers/posts_index';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter >
    <div>
      <Switch>
      <Route path="/posts/new" component={Postnew}/>
      <Route path="/" component={PostsIndex}/>
      </Switch>
    </div>
    </ BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
