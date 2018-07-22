import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/AppContainer';
import { Provider } from 'react-redux';
import counter from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import Container from './container/AppContainer';

const store = createStore(counter);
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  rootEl
);
registerServiceWorker();
