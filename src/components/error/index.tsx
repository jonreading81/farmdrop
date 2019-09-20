import React from 'react';
import {StyledNotice} from '../../styles/layout';

interface IErrorProps {
  text: string
};

const ErrorMessage: React.FC<IErrorProps> = ({text}) => (
  <StyledNotice><h1>{text}</h1></StyledNotice>
);

export default ErrorMessage;