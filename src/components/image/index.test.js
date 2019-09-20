import React from 'react';
import {shallow} from 'enzyme';
import Image from './index';
import {StyledImage, StyledTag, StyledOverlay} from './styles';

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
    expect(context.find(StyledImage).prop('url')).to.equal(props.url);
  });

  it('should set the tag', () => {
    expect(context.find(StyledTag).text()).to.equal(props.tag);
  });

  it('should set the overlaytext', () => {
    expect(context.find(StyledOverlay).text()).to.equal(props.overlayText);
  })
});