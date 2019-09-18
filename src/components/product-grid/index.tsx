import React , {useEffect} from 'react';
import styled from 'styled-components';
import {IProduct} from '../../types/product';
import ProductCard from '../product-card';
import Loader from '../loader';
import ErrorMessage from '../error';

interface IProductGridProps {
  products:IProduct[],
  getProducts():void,
  isLoading: Boolean,
  isError: Boolean
};

const Products: React.FC<IProductGridProps> = ({
  products, 
  getProducts,
  isLoading,
  isError
}) => {

  useEffect(()  => {
    getProducts();
  }, []);

  return (
    <div>
      {isLoading && <Loader text="Loading Products"/>}
      {isError && <ErrorMessage text="Error Loading Products"/>}
      {!isLoading && !isError && (
        <ul>
          {products.map((product, index) => (
            <li key={index}><ProductCard {...product} /></li>
          ))}
      </ul>
      )}
    </div>
  );
};

export default Products;