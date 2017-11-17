import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  //console.log(visibleExpenses);
});

store.dispatch(addExpense({description: 'Water Bill', amount: 500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'))

