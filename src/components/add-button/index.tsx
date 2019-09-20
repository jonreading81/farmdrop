import React from 'react';
import PlusIcon from '../../icons/plus';
import MinusIcon from '../../icons/minus';
import {
  StyledAddButton,
  StyledBox, 
  StyledQuantityButton,
  StyledQuantityButtonOptions,
  StyledQuantityText,
  StyledWrapper
} from './styles';

interface IAddButtonProps {
  addItem(): void,
  removeItem(): void,
  quantity: number
};


const AddButton: React.FC<IAddButtonProps> = ({addItem, removeItem, quantity}) => {
  return (
  <StyledWrapper>
      <StyledBox />
      {quantity === 0 && <StyledAddButton className="add_button__show_quantity" onClick={addItem}>Add</StyledAddButton>}
      {quantity > 0 && (
        <StyledQuantityButtonOptions >
          <StyledQuantityButton onClick={removeItem} ><MinusIcon /></StyledQuantityButton>
          <StyledQuantityText>{quantity}</StyledQuantityText>
          <StyledQuantityButton onClick={addItem}><PlusIcon /></StyledQuantityButton>
        </StyledQuantityButtonOptions>
      )
    }
  </StyledWrapper>
  );
};

export default AddButton;

