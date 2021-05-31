import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import filterReducer from './reducers/filter';
import './index.css';
import App from './components/App';

const defaultState = {
  meals: [
    {
      id: 1,
      title: 'rice',
      mealType: 'Lunch',
      ingredients: 'rice, water, salt',
      image:
        'https://media.istockphoto.com/photos/cooked-rice-picture-id491090528?k=6&m=491090528&s=612x612&w=0&h=bkDHZ4AtcCmGi1lkpyOd7zDpHubBW40dSaruF4dWPTY=',
    },
  ],
  filter: 'All',
};

const store = createStore(filterReducer, defaultState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
