import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[2]}
  />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});
