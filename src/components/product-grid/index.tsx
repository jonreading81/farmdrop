import React , {useEffect} from 'react';
import styled from 'styled-components';
import {IProduct} from '../../types/product';
import ProductCard from '../product-card';
import Loader from '../loader';
import ErrorMessage from '../error';
import breakpoints from '../../constants/breakpoints';

const StyledProductGrid = styled.ul`
  display: grid;
  grid-gap: 1.5rem;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  list-style-type: none;
  margin: 0;
  padding:0;
  @media ${breakpoints[0]} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface IProductGridProps {
  products:IProduct[],
  getProducts():void,
  selectVariant(): void,
  isLoading: Boolean,
  isError: Boolean
};

const Products: React.FC<IProductGridProps> = ({
  products, 
  getProducts,
  selectVariant,
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
        <StyledProductGrid>
          {products.map((product, index) => (
            <li key={index}><ProductCard selectVariant={selectVariant} product={product} /></li>
          ))}
      </StyledProductGrid>
      )}
    </div>
  );
};

export default Products;