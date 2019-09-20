import React from 'react';
import {StyledNotice} from '../../styles/layout';

interface ILoaderProps {
  text: string
};

const Loader: React.FC<ILoaderProps> = ({text}) => (
  <StyledNotice><h1>{text}</h1></StyledNotice>
);

export default Loader;