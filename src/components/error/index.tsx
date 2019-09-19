import React from 'react';

interface IErrorProps {
  text: string
};

const ErrorMessage: React.FC<IErrorProps> = ({text}) => (
  <div>{text}</div>
);

export default ErrorMessage;