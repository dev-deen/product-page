import React from 'react'

function ProductReviews() {

    
  return (
    <div className="row mt-4">
        <div className="col">
          <h4 className="text-center">Customer Reviews</h4>
          <div className="card shadow-sm p-3">
            <p>"This product is amazing! Highly recommended."</p>
            <p className="text-muted">- John Doe</p>
          </div>
          <div className="card shadow-sm p-3 mt-3">
            <p>"Good value for money. Quality could be better."</p>
            <p className="text-muted">- Jane Smith</p>
          </div>
        </div>
      </div>
  )
}

export default ProductReviews
