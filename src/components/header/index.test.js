import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { StyledBasketCount} from './styles';

describe('Header component', () => {
  it('should display the number of basket items', () => {
    const basketItems =[1,2];
    expect(shallow(<Header basketItems={basketItems} />).find(StyledBasketCount).text()).to.equal('2');
  });
});