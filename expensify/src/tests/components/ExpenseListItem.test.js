import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});