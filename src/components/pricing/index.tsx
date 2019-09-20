import React from 'react';
import {IProductVariant} from '../../types/product';
import get from 'lodash/get';
import {
  StyledWrapper,
  StyledSaleText,
  StyledSalePrice,
  StyledPriceWrapper,
  StyledPrice,
  StyleMeasurement,
} from './styles';

interface IPricingProps {
  pricing: IProductVariant,
}

const formatPrice = (price: number) => `£${(price / 100).toFixed(2)}`;

const Pricing: React.FC<IPricingProps> = ({pricing}) => (
  <StyledWrapper>
    {pricing.saleText && (
      <StyledSaleText >{get(pricing, 'saleText')}</StyledSaleText>
    )}
    {pricing.salePrice && (
        <StyledSalePrice>{formatPrice(get(pricing, 'price.pence'))}</StyledSalePrice>
    )}
    <StyledPriceWrapper>
      <StyledPrice isSale={pricing.salePrice ? true : false }>{pricing.salePrice ? formatPrice(get(pricing, 'salePrice.pence')): formatPrice(get(pricing, 'price.pence'))}</StyledPrice>
      <StyleMeasurement>{get(pricing, 'pricePerUnit')}</StyleMeasurement>
    </StyledPriceWrapper>
  </StyledWrapper>
);

export default Pricing;