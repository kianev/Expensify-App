import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});



