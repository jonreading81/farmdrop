import React from 'react';
import {StyledImage, StyledOverlay, StyledTag} from './styles';

interface IImageProps {
  url: string,
  tag?: string,
  showOverlay: Boolean,
  overlayText: string,
};

const Image: React.FC<IImageProps> = ({url, tag, overlayText, showOverlay}) => (
  <div className="image">
    <StyledImage  url={url} >
      {tag && <StyledTag>{tag}</StyledTag>}
      {<StyledOverlay showOverlay={showOverlay} >{overlayText}</StyledOverlay>}
    </StyledImage>
  </div>
);

export default Image;