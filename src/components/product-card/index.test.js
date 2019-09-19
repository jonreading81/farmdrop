import React from 'react';
import {shallow} from 'enzyme';
import ProductCard from './index';
import Image from '../image';
import Dropdown from '../dropdown';
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
    expect(context.find('h1').first().text()).to.equal(props.product.name);
  });

  it('should display the producer name', () => {
    const name = 'test';
    expect(context.find('h2').first().text()).to.equal(props.product.producer.name);
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
    const selectVariant = sinon.spy();
    let props = {
      product: {
        tags: [],
        media: [],
        variants: [
          {
            measurement: {
              displayName:'displayName'
            }
          }
        ],
        selectedVariant: 1
      },
      selectVariant
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
        {name: props.product.variants[0].measurement.displayName, value:0}
      ]);
    });

    it('should set the value to selectedVariant', () => {
      expect(context.find(Dropdown).prop('value')).to.eql(props.product.selectedVariant);
    });

    it('should call selectVariant onChange', () => {
      const value = '1'
      context.find(Dropdown).simulate('onChange', '1');
      expect(props.selectVariant.calledWith(props.product.id, 1));
    });
  });
});