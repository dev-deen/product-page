import React from 'react'
import Product from '../components/Product'
import RelatedProducts from '../components/RelatedProducts'
import ProductReviews from '../components/ProductReviews'
import { useLocation } from 'react-router-dom'

function ProductDetails() {

    const location = useLocation();
    const {product} = location.state || {};

  return (
    <div className="container-fluid m-4">
      <div className="row">
        <Product product={product}/>
        <RelatedProducts product={product}/>
    </div>
    </div>
  )
}

export default ProductDetails
