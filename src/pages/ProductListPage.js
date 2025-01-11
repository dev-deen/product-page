import React, { useEffect, useState } from 'react'
import ProductListItem from '../components/ProductListItem';

function ProductListPage() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchProducts();
    }, []);

    const fetchProducts = () =>{
        fetch('/product.json')
        .then((response)=>{
            if(!response.ok){
                throw new Error('Unable to fetch products');
            }
            return response.json();
        }).then((result)=>{
            setProducts(result.products)
        }).catch((error)=>console.log(error));
    }
  return (
    <div className='container my-4'>
        <div className="mb-2"><small>Products you might like</small></div>
        {products && products.map((product, index) =>{
            return <ProductListItem key={index} product={product}/>
        })}
      
    </div>
  )
}

export default ProductListPage;
