import React from 'react';

interface IErrorProps {
  text: String
};

const ErrorMessage: React.FC<IErrorProps> = ({text}) => (
  <div>{text}</div>
);

export default ErrorMessage;