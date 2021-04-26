import React, { useState, useEffect, useContext } from 'react';
//context
import { ProductContext } from '../state/ProductContext.js';
import { RelatedProductsContext } from '../state/RelatedProductsContext.js'
import { APIContext } from '../state/APIContext.js'

import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import YourOutfit from './YourOutfit.jsx';
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  // State --------------------------------------------------------------------
  const [outfitList, setOutfit] = useState([])

  // Context ------------------------------------------------------------------
  const {
    relatedProducts, relatedProductIds, relatedProductStyles
  } = useContext(RelatedProductsContext);
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle, handleProductChange
  } = useContext(ProductContext);
  const {
    getProducts, getStyles, getRelatedProductIds
  } = useContext(APIContext);

  // Event handlers -----------------------------------------------------------
  var handleAddOutfit = (product) => {
    var productId = product.id
    if (!outfitList.some(obj => obj.id === productId)) {
      setOutfit([...outfitList, product])
    }
  }
  var handleRemove = (item) => {
    var productId = item.id
    setOutfit(outfitList.filter(item => item.id !== productId))
  }
  var handleProductClick = (product, productStyle) => {
    handleProductChange(product, productStyle)
  }

  // Lifecycle Methods --------------------------------------------------------
  var productList = []
  useEffect(() => {
    getRelatedProductIds(product.id)
  }, [])
  useEffect(() => {
    getStyles(relatedProductIds)
    getProducts(relatedProductIds)
  }, [relatedProductIds])

  return (
    <div id={styles.relatedItemsGrid}>
      <RelatedProductCards products={relatedProducts} images={relatedProductStyles} handleClick={handleProductClick}/>
      <YourOutfit outfits={outfitList} images={relatedProductStyles} handleAddOutfit={handleAddOutfit} handleRemove={handleRemove}/>
    </div>
  )
};

export default RelatedItems;