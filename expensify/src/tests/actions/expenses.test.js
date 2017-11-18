import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expenseData = {
      description: 'Rent',
      note: 'This was last month',
      amount: 10000,
      createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values', () => {
   const action = addExpense();
   expect(action).toEqual({
     type: 'ADD_EXPENSE',
     expense: {
       description: '',
       note: '',
       amount: 0,
       createdAt: 0,
       id: expect.any(String)
     }
   });
});