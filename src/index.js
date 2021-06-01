import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mealReducer from './reducers/meal';
import recipeReducer from './reducers/recipe';
import './index.css';
import App from './components/App';

const middleware = [thunk];
const store = createStore(
  combineReducers({ mealState: mealReducer, recipeState: recipeReducer }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
