import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
//import { Router, Route, Link, browserHistory} from 'react-router';
//import HelloWorld from './components/helloWorld';
import App from './containers/App';
import todoApp from './app/reducers';

let finalCreateStore = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

let store = finalCreateStore(todoApp);
let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);