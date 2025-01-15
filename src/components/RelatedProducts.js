import React, { useEffect, useState } from 'react'
import ProductListItem from './ProductListItem';

    function RelatedProducts({product}) {

    const [products, setProducts] = useState([]);

    // Fetching reviews from API or local storage
    const fetchProducts = ()=> {
        fetch('/product.json')
        .then((response) =>{
            if(!response.ok){
                throw new Error('Unable to fetch products')
            }
            return response.json();
        }).then((result)=>{
            setProducts(result.products.filter((prod)=>(prod.brand === product.brand && prod.id !== product.id)));
        }).catch((error)=>{
            console.log(error);
            setProducts([]);
        })
    }

    useEffect(()=>{
        fetchProducts();
    }, [product])

  return (
    <div className="col-md-6">
        <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
            <h5>Related Products</h5>
        </div>
        <div className="list-group list-group-flush m-4">
            {products.map((prod, index) => (
                <ProductListItem key={index} product={prod}/>                    
            ))}
        </div>
        </div>
    </div>
      
  )
}

export default RelatedProducts
