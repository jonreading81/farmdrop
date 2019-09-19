import React from 'react';
import { shallow } from 'enzyme';
import Pricing from './index';

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
      expect(context.find('.pricing__measurement').text()).to.eql(pricing.measurement.displayName);
    });

    it('should display the price', () => {
      expect(context.find('.pricing__price').text()).to.eql('£9.00');
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
    };
    let context;
    
    beforeAll(() => {
      context= shallow(<Pricing pricing={pricing} />);
    });

    it('should display the price', () => {
      expect(context.find('.pricing__price').text()).to.eql('£8.00');
    });

    it('should display the  sale price', () => {
      expect(context.find('.pricing__sale_price').text()).to.eql('£9.00');
    });

    it('should display the saletext', () => {
      expect(context.find('.pricing__sale_text').text()).to.eql(pricing.saleText);
    });
  });
});