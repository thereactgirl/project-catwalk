import React from 'react';
import ProductCard from './ProductCard.jsx'
import styles from './relatedItems.module.css'
import { dummyProductStyles } from '../dummyData.js'

const RelatedProductCards = ({ products, handleClick}) => {
  return (
    <div>
      <h3 id={styles.relatedItemsTitle}>Related Items and Comparisons</h3>
      <div id={styles.relatedProductsContainer}>
        {products.map((product, index) => {
          return <ProductCard product={product} handleClick={handleClick} key={product.id} />
        })}
      </div>
    </div>
  )
};

export default RelatedProductCards;