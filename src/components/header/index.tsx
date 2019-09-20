import React from 'react';
import {IBasketItem} from '../../types/basket';
import {
  StyleHeader, 
  StyledBasketWrapper,
  StyledMasthead,
  StyledBasketContentWrapper,
  StyledBasketCount,
  StyledIconWrapper,
} from './styles';
import BasketIcon from '../../icons/basket';
import { StyledContentWrapper } from '../../styles/layout';

interface IHeaderProps {
  basketItems: IBasketItem[]
};

const Header: React.FC<IHeaderProps> = ({basketItems})=> (
  <StyleHeader>
    <StyledMasthead>
      <StyledContentWrapper></StyledContentWrapper>
    </StyledMasthead>
    <StyledBasketWrapper>
      <StyledBasketContentWrapper>
        <StyledIconWrapper>
          <BasketIcon />
          <StyledBasketCount>{basketItems.length}</StyledBasketCount>
        </StyledIconWrapper>
      </StyledBasketContentWrapper>
    </StyledBasketWrapper>
  </StyleHeader>
);

export default Header;