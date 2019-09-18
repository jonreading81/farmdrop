import React from 'react';

interface IproductCard {
  name: String
}
const ProductCard: React.FC<IproductCard> = ({name}) => (
  <div>
    <h2>{name}</h2>
  </div>
)

export default ProductCard;