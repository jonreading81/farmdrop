import React from 'react';
import {StyledWrapper, StyledChevronWrapper, StyledSelect} from './styles'
import Chevron from '../../icons/chevron';

interface IDropdownItem {
  name: string,
  value: any
};

interface IDropdownProps{
  options: IDropdownItem[],
  value: any,
  onChange(value: string): void
};

const Dropdown: React.FC<IDropdownProps> = (props) => (
  <StyledWrapper>
    <StyledChevronWrapper>
      <Chevron />
    </StyledChevronWrapper>
    <StyledSelect value={props.value} onChange={(event: React.FormEvent<HTMLSelectElement>) => props.onChange(event.currentTarget.value)}>
      {props.options.map(({value, name}) => (
        <option key={value} value={value}>{name}</option>
      ))}
    </StyledSelect>
  </StyledWrapper>
);

export default Dropdown;