import React from 'react';
import {shallow} from 'enzyme';
import Image, {StyledImage} from './index';

describe('Image Component', () => {
  let context;
  const props = {
    url:'url',
    tag:'tag',
    overlayText: 'overlayText'
  };

  beforeAll(() => {
    context = shallow(<Image {...props}/>);
  });

  it('should set image url', () => {
    expect(context.find(StyledImage).prop('src')).to.equal(props.url);
  });

  it('should set the tag', () => {
    expect(context.find('.image__tag').text()).to.equal(props.tag);
  });

  it('should set the overlaytext', () => {
    expect(context.find('.image__overlay').text()).to.equal(props.overlayText);
  })
});