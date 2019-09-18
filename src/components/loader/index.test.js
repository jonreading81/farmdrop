import React from 'react';
import {shallow} from 'enzyme';
import Loader from './index';

describe('Loader component', () => {
  it('should display text provided', () => {
    const text = 'loading...';
    const context = shallow(<Loader text={text} />);
    expect(context.find('div').first().text()).to.equal(text);
  });
});