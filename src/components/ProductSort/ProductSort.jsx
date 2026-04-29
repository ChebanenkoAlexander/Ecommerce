import React from 'react';
import './ProductSort.css';

function ProductSort({ productCount, sortBy, setSortBy }) { 
   console.log('ProductSort получил productCount:', productCount);
  return (
    <div className="product-sort">
      <div className="product-count">
        {productCount} products
      </div>
      
      <div className="sort-controls">
        <label>Sort by:</label>
        <select 
          className="sort-select"
          value={sortBy}  
          onChange={(e) => setSortBy(e.target.value)} 
        >
          <option value="price-asc">Price: Low to High</option>  
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default ProductSort;