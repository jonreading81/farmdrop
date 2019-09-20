import React from 'react';
import { shallow } from 'enzyme';
import Pricing from './index';
import {
    StyleMeasurement, 
    StyledSaleText,
    StyledPrice,
    StyledSalePrice
  } from './styles';

describe('Pricing component', () => {
  describe('Standard pricing', () => {

    const pricing = {
      pricePerUnit: 'pricePerUnit',
      measurement: {
        displayName: 'measurement'
      },
      price: {
        pence: 900
      }
    };
    let context;

    beforeAll(() => {
      context= shallow(<Pricing pricing={pricing} />);
    });

    it('should display mesurement', () => {
      expect(context.find(StyleMeasurement).text()).to.eql(pricing.pricePerUnit);
    });

    it('should display the price', () => {
      expect(context.find(StyledPrice).text()).to.eql('£9.00');
    });
  });

  describe('Sale pricing', () => {

    const pricing = {
      price: {
        pence: 900
      },
      salePrice: {
        pence: 800
      },
      saleText: 'saleText',
      pricePerUnit: 'pricePerUnit'
    };
    let context;
    
    beforeAll(() => {
      context= shallow(<Pricing pricing={pricing} />);
    });

    it('should display the price', () => {
      expect(context.find(StyledPrice).text()).to.eql('£8.00');
    });

    it('should display the  sale price', () => {
      expect(context.find(StyledSalePrice).text()).to.eql('£9.00');
    });

    it('should display the saletext', () => {
      expect(context.find(StyledSaleText).text()).to.eql(pricing.saleText);
    });
  });
});