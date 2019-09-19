import React from 'react';
import styled from 'styled-components';
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

export const StyledSelect = styled.select`
  padding: 5px 8px;
  width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background-color: grey;
  background-image: none;
  appearance: none;
`;

export const StyledWrapper = styled.div`
  position:relative;
`;

export const StyledChevronWrapper = styled.div`
  position: absolute;
  right:1rem;
  top: 1rem;
  svg {
    width:1rem;
    height: 1rem;
  }
`;

const Dropdown: React.FC<IDropdownProps> = (props) => (
  <StyledWrapper>
    <StyledChevronWrapper>
      <Chevron />
    </StyledChevronWrapper>
    <StyledSelect onChange={(event: React.FormEvent<HTMLSelectElement>) => props.onChange(event.currentTarget.value)}>
      {props.options.map(({value, name}) => (
        <option selected={props.value === value} key={value} value={value}>{name}</option>
      ))}
    </StyledSelect>
  </StyledWrapper>
);

export default Dropdown;