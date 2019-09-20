import React, {useState} from 'react';
import {IProduct, IProductVariant} from '../../types/product';
import {IBasketItem} from '../../types/basket';
import Image from '../image';
import DropDown from '../dropdown';
import Pricing from '../pricing';
import AddButton from '../add-button';
import get from  'lodash/get';
import {
  StyledTitle, 
  StyledProductCard,
  StyledDetails,
  StyledPricing,
  StyledProducer,
  StyledMeasurement
} from './styles';


interface IProductCardProps {
  product: IProduct,
  basketItems: IBasketItem[],
  removeFromBasket(product:IProduct, variant:IProductVariant): void,
  addToBasket(product:IProduct, variant:IProductVariant): void,
}

const getProductVariantCount = (items: IBasketItem[], product: IProduct, variant: IProductVariant) : number => {
  return items.filter(item =>  item.variant.id === variant.id && item.product.id === product.id ).length;
}

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  basketItems,
  addToBasket,
  removeFromBasket,
 }) => {
const [displayedVariant, displayVariant] = useState<number>(0);

  const {
      name, 
      media, 
      tags, 
      producer,
      variants = [],
    } = product;

  const variant = variants.length > 0 ? variants[displayedVariant] : false;
  let productVariantCount = 0;
  if(variant && basketItems) {
    productVariantCount = getProductVariantCount(basketItems, product, variant);
  }

  return (
    <StyledProductCard>
      <div>
      <Image 
          url={get(media, '[0].url')} 
          tag={get(tags, '[0].name')} 
          overlayText={`${productVariantCount} in basket`}
          showOverlay={productVariantCount ? true : false}
        />
        <StyledDetails>
          <StyledTitle>{name}</StyledTitle>
          <StyledProducer>{get(producer, 'name')}</StyledProducer>
          {Array.isArray(variants) && variants.length < 2 && (
            <StyledMeasurement>{get(variant, 'measurement.displayName')}</StyledMeasurement>
          )}
          {Array.isArray(variants) && variants.length > 1 && (
            <DropDown 
              onChange={(value) => {displayVariant(parseInt(value))} }
              value={displayedVariant}
              options={variants.map((variant, index) => (
                {
                name: get(variant, 'measurement.displayName'),
                value: index
                }
              ))}
            />
          )}
        </StyledDetails>
      </div>
      <StyledPricing>
          {variant && (
              <Pricing 
              pricing={variant}
            />
          )}
          {variant && (
            <AddButton 
              quantity={productVariantCount}
              addItem={() => addToBasket(product, variant)}
              removeItem={() => removeFromBasket(product, variant)}
            />
          )}
      </StyledPricing>
    </StyledProductCard>
  )
};

export default ProductCard;