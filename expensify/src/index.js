import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'))

