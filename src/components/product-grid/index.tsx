import React , {useEffect} from 'react';
import {IProduct} from '../../types/product';
import {IBasketItem} from '../../types/basket';
import ProductCard from '../product-card';
import Loader from '../loader';
import ErrorMessage from '../error';
import {StyledProductGrid} from './styles';

interface IProductGridProps {
  products:IProduct[],
  basketItems: IBasketItem[],
  getProducts():void,
  addToBasket(): void,
  removeFromBasket(): void,
  isLoading: Boolean,
  isError: Boolean
};

const Products: React.FC<IProductGridProps> = ({
  products, 
  basketItems,
  getProducts,
  addToBasket,
  removeFromBasket,
  isLoading,
  isError
}) => {

  useEffect(()  => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {isLoading && <Loader text="Loading Products"/>}
      {isError && <ErrorMessage text="Error Loading Products"/>}
      {!isLoading && !isError && (
        <StyledProductGrid>
          {products.map((product, index) => (
            <li key={index}>
            <ProductCard 
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
            product={product}
            basketItems={basketItems}
            /></li>
          ))}
      </StyledProductGrid>
      )}
    </div>
  );
};

export default Products;