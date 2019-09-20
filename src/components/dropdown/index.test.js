import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './index';
import  {StyledSelect} from './styles';
import sinon from 'sinon';

describe('Dropdown component', () => {

  const props = {
    options: [
      {name: 'name', value: '1'},
      {name: 'name-2', value: '2'}
    ],
    value:'2',
    onChange: sinon.spy()
  };
  let context;

  beforeAll(() => {
    context = shallow(<Dropdown {...props} />);
  });

  it('should add option for each option provided', () => {
    expect(context.find('option')).to.have.length(2);
  });

  it('should add the value attrubute to the select box', () => {
    expect(context.find(StyledSelect).prop('value')).to.eql(props.value);
  });

  it('should trigger change event when item selected', () => {
    const value = "2"
    const event = {
      currentTarget: {
        value
      }
    };
    context.find(StyledSelect).simulate('change', event);
    expect(props.onChange.calledWith(value)).to.be.true;
  });
});