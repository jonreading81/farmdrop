import React from 'react';
import styled from 'styled-components';

interface IImageProps {
  url: string,
  tag?: string,
  overlayText?: string,
};

export const StyledImage = styled.img`
  max-width: 100%;
`;

const Image: React.FC<IImageProps> = ({url, tag, overlayText}) => (
  <div>
    <StyledImage  src={url} />
    {tag && <span className="image__tag">{tag}</span>}
    {overlayText && <span className="image__overlay">{overlayText}</span>}
  </div>
);

export default Image;