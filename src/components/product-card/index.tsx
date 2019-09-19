import React from 'react';
import {IProduct} from '../../types/product'
import Image from '../image';
import DropDown from '../dropdown';
import Pricing from '../pricing';
import styled from 'styled-components';
import { grey } from '../../constants/colors';
import get from  'lodash/get';

const StyledProductCard = styled.section`
  border: 1px solid ${grey};
  height:100%;
`;

interface IProductCardProps {
  product: IProduct,
  selectVariant(productId:number, variantId: number): void
}

const ProductCard: React.FC<IProductCardProps> = ({
  product: {
    id,
    name, 
    media, 
    tags, 
    producer,
    variants,
    pricePerUnit,
    measurement,
    price,
    salePrice,
    saleText,
    selectedVariant,
  },
  selectVariant
 }) => (
  <StyledProductCard>
    <Image 
      url={get(media, '[0].url')} 
      tag={get(tags, '[0].name')} 
    />
    <h1>{name}</h1>
    <h2>{get(producer, 'name')}</h2>
    {Array.isArray(variants) && (
      <DropDown 
        onChange={(value) => selectVariant(id, parseInt(value)) }
        value={selectedVariant}
        options={variants.map((variant, index) => (
          {
          name: get(variant, 'measurement.displayName'),
          value: index
          }
        ))}
      />
    )}
    <Pricing 
      pricing={{
        pricePerUnit,
        measurement,
        price,
        salePrice,
        saleText,
      }}
    />
  </StyledProductCard>
);

export default ProductCard;