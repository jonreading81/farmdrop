import React from 'react';
import { shallow } from 'enzyme';
import AddButton from './index';
import {StyledAddButton, StyledQuantityButton} from './styles';
import sinon from 'sinon';

describe('AddButton Compoent', () => {
  const addItem = sinon.spy();
  const removeItem = sinon.spy();

  beforeAll(() => {
    addItem.resetHistory();
    removeItem.resetHistory();
  });

  it('should show the add button', () => {
    const context = shallow(<AddButton addItem={addItem} quantity={0} removeItem={removeItem} />);
    expect(context.find(StyledAddButton)).to.have.length(1);
  });

  it('should not show the add button when quanity > 0', () => {
    const context = shallow(<AddButton addItem={addItem} quantity={1} removeItem={removeItem} />);
    expect(context.find(StyledAddButton)).to.have.length(0);
  });

  it('should call addItem when addButton clicked', () => {
    const context = shallow(<AddButton addItem={addItem} quantity={1} removeItem={removeItem} />);
    context.find(StyledQuantityButton).at(1).simulate('click');
    expect(addItem.called).to.be.true;
  });

  it('should call addItem when removeButton clicked', () => {
    const context = shallow(<AddButton removeItem={removeItem} quantity={1}  removeItem={removeItem} />);
    context.find(StyledQuantityButton).at(0).simulate('click');
    expect(removeItem.called).to.be.true;
  });
});