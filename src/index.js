import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Setup the reducer at the index.js file to import all react dependencies.
 * npm install redux react-redux
 * import redux
 * wrap the redux Provider store component on the App to make the redux globally.
 * NEXT -Setup the react redux container
 */

import { Provider } from 'react-redux';
import rootReducer from './store/reducers/reducer1';
import { createStore } from 'redux'

/**
 * set up the createStore() and pass in the rootReducer
 */

let store = createStore(rootReducer)


/**
 * Wrap the app component with the Provider store and pass in store as the provider component.
 * By doing this you make the redux store available globally
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>,
);


