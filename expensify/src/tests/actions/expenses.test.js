import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('Should setup remove action object', () => {
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: 'abc123'
    });
});

test('Should setup edit action object', () => {
  const action = editExpense('abc123', {note: 'some note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      note: 'some note'
    }
  });
});

test('Should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to store and database', (done) => {
   const store = createMockStore({});
   const expenseData = {
     description: 'Mouse',
     note: 'Better mouse',
     amount: 3000,
     createdAt: 1000,
   }

   store.dispatch(startAddExpense(expenseData)).then(() => {
     const actions = store.getActions();
     expect(actions[0]).toEqual({
       type: 'ADD_EXPENSE',
       expense: {
         id: expect.any(String),
         ...expenseData
       }
     });

     return database.ref(`expenses/${actions[0].expense.id}`).once('value')
   }).then((snapshot) => {
     expect(snapshot.val()).toEqual(expenseData);
     done();
   });
});

test('should add expense with default data to store and database', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  }

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

test('should set up set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
});