import React from 'react';

interface ILoaderProps {
  text: String
};

const Loader: React.FC<ILoaderProps> = ({text}) => (
  <div>{text}</div>
);

export default Loader;