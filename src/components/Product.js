import React from 'react'

function Product({product}) {
    const {title, description, image, price, brand, manufacturer} = product;

  return (
    <div className="col-md-8">
    <div className="card shadow-sm">
      <img
        src={image}
        alt={title}
        className="img-fluid"
        style={{ height: '40vh', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="text-muted">{description}</p>
        <p className="fw-bold text-primary fs-5">Price: ${price}</p>
        <p className="text-secondary">
          Brand: {brand} <span>({manufacturer})</span>
        </p>
        <button className="btn btn-success w-100 mt-3">Add to Cart</button>
      </div>
    </div>
  </div>

  )
}

export default Product
