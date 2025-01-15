import React, { useEffect, useState } from 'react';
import ProductListItem from '../components/ProductListItem';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: '',
    brand: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }
    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }
    setFilteredProducts(filtered);

  }, [filters]);

  const fetchProducts = () => {
    fetch('/product.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch products');
        }
        return response.json();
      })
      .then((result) => {
        setProducts(result.products);
        setFilteredProducts(result.products);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="container my-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="row">
        {/* Filter Panel */}
        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h5 className="card-title">Filters</h5>
            <div className="mb-3">
              <label htmlFor="priceRange" className="form-label">Price Range</label>
              <select
                id="priceRange"
                name="priceRange"
                className="form-select"
                value={filters.priceRange}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="0-50">0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201-500">$201 - $500</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">Brand</label>
              <input
                type="text"
                id="brand"
                name="brand"
                className="form-control"
                placeholder="Enter brand"
                value={filters.brand}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="col-md-9">
          <div className="mb-2"><small>Products you might like</small></div>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductListItem key={index} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
