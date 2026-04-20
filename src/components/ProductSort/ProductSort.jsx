import React from 'react';
import './ProductSort.css';

function ProductSort({ productCount }) {
  return (
    <div className="product-sort">
      <div className="product-count">
        {productCount} products
      </div>
      
      <div className="sort-controls">
        <label>Sort by:</label>
        <select className="sort-select">
          <option value=""></option>
          <option value="price-desc">Price: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
}

export default ProductSort;