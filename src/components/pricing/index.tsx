import React from 'react';
import {IProductVariant} from '../../types/product';
import get from 'lodash/get';

interface IPricingProps {
  pricing: IProductVariant
}

const formatPrice = (price: number) => `£${(price / 100).toFixed(2)}`;

const Pricing: React.FC<IPricingProps> = ({pricing}) => (
  <div>
    {pricing.saleText && (
      <span className="pricing__sale_text">{get(pricing, 'saleText')}</span>
    )}
    {pricing.salePrice && (
      <div>
        <span className="pricing__sale_price">{formatPrice(get(pricing, 'price.pence'))}</span>
        <span className="pricing__price">{formatPrice(get(pricing, 'salePrice.pence'))}</span>
      </div>
    )}
    {!pricing.salePrice && 
      <span className="pricing__price">{formatPrice(get(pricing, 'price.pence'))}</span>
    }
    <span className="pricing__measurement">{get(pricing, 'measurement.displayName')}</span>
  </div>
);

export default Pricing;