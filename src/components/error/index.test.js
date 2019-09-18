import React from 'react';
import {shallow} from 'enzyme';
import ErrorMessage from './index';

describe('Error component', () => {
  it('should display text provided', () => {
    const text = 'error...';
    const context = shallow(<ErrorMessage text={text} />);
    expect(context.find('div').first().text()).to.equal(text);
  });
});