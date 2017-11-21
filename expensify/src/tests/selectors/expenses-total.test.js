import React from 'react';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly set up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should correctly set up multiple expense', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
