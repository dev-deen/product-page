import React from 'react'
import { Link } from 'react-router-dom';

function ProductListItem({ product}) {

    const {title, description, image, price, brand, manufacturer} = product;

  return (
    <Link to={`/products/${product.id}`} state={{product}}>
    <div className="card mb-4 shadow-sm">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded-start"
            style={{ objectFit: 'cover', height: '30vh' }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <strong>Price:</strong> ${price}
            </p>
            <p className="card-text">
              <strong>Manufacturer:</strong> {manufacturer}
            </p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProductListItem;