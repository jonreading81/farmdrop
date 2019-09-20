import React from 'react';
import {shallow} from 'enzyme';
import ProductCard  from './index';
import {StyledTitle, StyledProducer} from './styles';
import Image from '../image';
import Dropdown from '../dropdown';
import Pricing from '../pricing';
import sinon from 'sinon';

describe('ProductCard Component', () => {

  let props = {
    product: {
      name: 'name',
      producer: {
        name: 'producer'
      }
    } 
  };
  let context;

  beforeAll(() => {
    context = shallow(<ProductCard {...props} />);
  });

  it('should display the name', () => {
    expect(context.find(StyledTitle).text()).to.equal(props.product.name);
  });

  it('should display the producer name', () => {
    const name = 'test';
    expect(context.find(StyledProducer).text()).to.equal(props.product.producer.name);
  });

  describe('Image Component', () => {
    let props = {
      product: {
        tags: [{name: 'item'}],
        media: [ {
          url:'url'
        }]
      }
    };
    let context;

    beforeAll(() => {
      context=shallow(<ProductCard {...props} />);
    });
    it('should construct the image component', () => {
      expect(context.find(Image)).to.have.length(1);
    });

    it('should set the url using the media provided', () => {
      expect(context.find(Image).prop('url')).to.eql(props.product.media[0].url);
    });
  
    it('should set the tag using the tags provided', () => {
      expect(context.find(Image).prop('tag')).to.eql(props.product.tags[0].name);
    });
  });

  describe('Dropdown Component', () => {
    let props = {
      product: {
        tags: [],
        media: [],
        variants: [
          {
            measurement: {
              displayName:'displayName'
            }
          },
          {
            measurement: {
              displayName:'displayName'
            }
          }
        ],
      },
    };
    let context;

    beforeAll(() => {
      context=shallow(<ProductCard {...props} />);
    });
    it('should construct the Dropdown component', () => {
      expect(context.find(Dropdown)).to.have.length(1);
    });

    it('should set the options', () => {
      expect(context.find(Dropdown).prop('options')).to.eql([
        {name: props.product.variants[0].measurement.displayName, value:0},
        {name: props.product.variants[1].measurement.displayName, value:1}
      ]);
    });
  });

  describe('Pricing Component', () => {
    const variant = {
      pricePerUnit: 'pricePerUnit',
      measurement: 'measurement',
      price: 'price',
      salePrice: 'salePrice',
      saleText: 'saleText',
    };

    let props = {
      product: {
        tags: [],
        media: [],
        variants: [variant],
      },
    };
    let context;

    beforeAll(() => {
      context=shallow(<ProductCard {...props} />);
    });
    it('should construct the  component', () => {
      expect(context.find(Pricing)).to.have.length(1);
    });

    it('should configure the pricing', () => {
      expect(context.find(Pricing).prop('pricing')).to.eql({
        pricePerUnit: variant.pricePerUnit,
        measurement: variant.measurement,
        price: variant.price,
        salePrice: variant.salePrice,
        saleText: variant.saleText,
      });
    });
  });

});